import { useQuery } from "react-query";
import { SpeciesRoot } from "../types/pokeTypes/speciesType";
import { getAllPocketmon } from "../libs/axios/pokeAPI";
import { PokemonRoot } from "../types/pokeTypes/pokemonType";

interface PokeApiProps {
    getPokemonSpecies: (pokeId: number) => Promise<SpeciesRoot>;
    getPokemon: (pokeId: number) => Promise<PokemonRoot>;
}

export const useRandomPokeData = ({
    getPokemonSpecies,
    getPokemon,
}: PokeApiProps) => {
    return useQuery(
        "pokeData",
        async () => {
            const batchSize = 300;
            const totalPokes = 600;
            const batches = Math.ceil(totalPokes / batchSize);
            let allDetails: { species: SpeciesRoot; pokemon: PokemonRoot }[] =
                [];
            for (let i = 0; i < batches; i++) {
                const offset = i * batchSize;
                const response = await getAllPocketmon({
                    limit: batchSize,
                    offset: offset,
                });
                const batchDetails = [];
                for (const poke of response.results) {
                    const match = poke.url.match(/\/pokemon\/(\d+)\//);
                    if (match) {
                        const pokeId = parseInt(match[1], 10);
                        const species = await getPokemonSpecies(pokeId);
                        const pokemon = await getPokemon(pokeId);
                        if (species && pokemon) {
                            batchDetails.push({ species, pokemon });
                        }
                    }
                }
                allDetails = allDetails.concat(batchDetails);
                await new Promise((resolve) => setTimeout(resolve, 100));
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
