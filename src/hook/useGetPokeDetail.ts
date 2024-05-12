import { useQuery } from "react-query";
import { SpeciesRoot } from "../types/pokeTypes/speciesType";
import { getPokemon, getPokemonSpecies } from "../libs/axios/pokeAPI";
import { PokemonRoot } from "../types/pokeTypes/pokemonType";

export const useGetPokeKorean = (pokeId:number)=>{
    const {data:speciesData,isLoading}= useQuery<SpeciesRoot>(
        ["pokeSpecies",pokeId], ()=>getPokemonSpecies(pokeId)
    )
    return {speciesData, isLoading}
}

export const useGetPokeDetail = (pokeId:number)=>{
const {data,isLoading}=useQuery<PokemonRoot>(
    ['pokeDetail', pokeId],()=> getPokemon(pokeId)
)
return{data,isLoading}
}