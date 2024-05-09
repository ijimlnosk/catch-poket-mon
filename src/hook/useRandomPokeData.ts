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
            const response = await getAllPocketmon();
            const details = await Promise.all(
                response.results.map(async (poke) => {
                    const match = poke.url.match(/\/pokemon\/(\d+)\//);
                    if (match) {
                        const pokeId = parseInt(match[1], 10);
                        const [species, pokemon] = await Promise.all([
                            getPokemonSpecies(pokeId),
                            getPokemon(pokeId),
                        ]);

                        if (!species && !pokemon) return null;
                        return { species, pokemon };
                    }
                    return null;
                })
            );
            const nonNullDetails = details.filter(
                (details) => details !== null
            );

            const randomIndex = Math.floor(
                Math.random() * nonNullDetails.length
            );
            return nonNullDetails[randomIndex];
        },
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            cacheTime: 1000 * 60 * 5,
        }
    );
};
