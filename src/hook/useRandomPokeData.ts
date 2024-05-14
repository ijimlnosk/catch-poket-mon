import { useQuery } from "react-query";
import { SpeciesRoot } from "../types/pokeTypes/speciesType";
import { getAllPocketmon } from "../libs/axios/pokeAPI";
import { PokemonRoot } from "../types/pokeTypes/pokemonType";

interface PokeApiProps {
    getPokemonSpecies: (pokeId: number) => Promise<SpeciesRoot>;
    getPokemon: (pokeId: number) => Promise<PokemonRoot>;
}

interface PokeDetails {
    species: SpeciesRoot;
    pokemon: PokemonRoot;
}

export const useRandomPokeData = ({
    getPokemonSpecies,
    getPokemon,
}: PokeApiProps) => {
    return useQuery<PokeDetails | null>(
        "pokeData",
        async () => {
            const batchSize = 300;
            const totalPokes = 900;
            const batches = Math.ceil(totalPokes / batchSize);
            let allDetails: (PokeDetails | null)[] = [];
            for (let i = 0; i < batches; i++) {
                const offset = i * batchSize;
                const response = await getAllPocketmon({
                    limit: batchSize,
                    offset: offset,
                });

                // 병렬 요청 처리
                const detailsPromises = response.results.map(async (poke) => {
                    const match = poke.url.match(/\/pokemon\/(\d+)\//);
                    if (match) {
                        const pokeId = parseInt(match[1], 10);
                        try {
                            const [species, pokemon] = await Promise.all([
                                getPokemonSpecies(pokeId),
                                getPokemon(pokeId),
                            ]);
                            return { species, pokemon };
                        } catch (error) {
                            console.error(
                                `Error fetching data for PokeID ${pokeId}:`,
                                error
                            );
                            return null;
                        }
                    }
                    return null;
                });

                const batchDetails = (
                    await Promise.all(detailsPromises)
                ).filter((detail) => detail !== null);
                allDetails = allDetails.concat(batchDetails);
            }

            const randomIndex = Math.floor(Math.random() * allDetails.length);
            return allDetails[randomIndex];
        },
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        }
    );
};
