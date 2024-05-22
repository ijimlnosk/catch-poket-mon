
import {  QueryFunctionContext, QueryKey, useInfiniteQuery } from "react-query";
import { SpeciesRoot } from "../types/pokeTypes/speciesType";
import { PokemonRoot } from "../types/pokeTypes/pokemonType";
import { getAllPocketmon } from "../libs/axios/pokeAPI";


interface PokeApiProps {
    getPokemonSpecies: (pokeId: number) => Promise<SpeciesRoot>;
    getPokemon: (pokeId: number) => Promise<PokemonRoot>;
}

interface PokeDetails {
    species: SpeciesRoot;
    pokemon: PokemonRoot;
}

export const usePokeDataInfinite = ({
    getPokemonSpecies,
    getPokemon,
}: PokeApiProps) => {
    return useInfiniteQuery<  PokeDetails[] | null, Error, PokeDetails[] | null, QueryKey>(
        "pokeData", 
        async ({ pageParam = 0 }:QueryFunctionContext<QueryKey,number>) => { 
            const response = await getAllPocketmon({
                limit: 20,
                offset: pageParam,
            });
            const poke = response.results.map( async (poke)=>{
                const match = poke.url.match(/\/pokemon\/(\d+)\//);
                if(match) {
                    const pokeId = parseInt(match[1], 10);
                    const [species, pokemon] = await Promise.all([
                        getPokemonSpecies(pokeId),
                        getPokemon(pokeId), 
                    ])
                    return { species, pokemon };
                }
                return null;
            })

            const results = await Promise.all(poke)
            const validResult = results.filter((result): result is PokeDetails => result !== null)
            
            if(validResult.length > 0) return validResult;
            else return null;
        },
        {
            getNextPageParam: (lastPage, allPages) => {
                // 다음 페이지의 파라미터 결정 (예: 마지막 ID 기반 증가)
                if (!lastPage || lastPage.length === 0) {
                    return undefined;
                } 
                const lastPokemon = lastPage[lastPage.length -1 ];
                const nextId = lastPokemon ? lastPokemon.pokemon.id + 1 : null;
                return nextId && nextId < 900 ? nextId : undefined; 
            },
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        }
    );
};
