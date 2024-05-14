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
            const totalPokes = 900;
            const randomOffset = Math.floor(Math.random() * totalPokes); // 랜덤 오프셋 생성

            const response = await getAllPocketmon({
                limit: 1,
                offset: randomOffset,
            });

            // 병렬 요청 처리
            const detailsPromise = response.results.map(async (poke) => {
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

            const details =
                (await Promise.all(detailsPromise)).find(
                    (detail) => detail !== null
                ) || null;
            return details;
        },
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        }
    );
};
