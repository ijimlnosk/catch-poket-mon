import { useState } from "react";
import { useMutation } from "react-query";
import { postData } from "../libs/axios/dataAPI";
import { SpeciesRoot } from "../types/pokeTypes/speciesType";
import { PokemonRoot } from "../types/pokeTypes/pokemonType";

interface PokeData {
    species: SpeciesRoot;
    pokemon: PokemonRoot;
}

const useCatchPokemon = (data: PokeData | undefined | null) => {
    const [catchResult, setCatchResult] = useState<boolean | null>(null);
    const { mutate } = useMutation(postData, {
        onSuccess: () => {
            setCatchResult(true);
        },
        onError: (error: unknown) => {
            console.error("포획 데이터 저장 실패", error);
            setCatchResult(false);
        },
    });

    // 포획 버튼 클릭 이벤트
    const onCatchPoketMon = () => {
        if (!data) {
            console.error("catch pokemon 데이터 없음");
            return;
        }

        const isSuccess =
            data.species.capture_rate &&
            Math.random() < data.species.capture_rate / 255;
        if (isSuccess) {
            const typesName = data.pokemon.types.map((type) => type.type.name);
            if (data.pokemon.id && typesName && data.species.names[2].name) {
                const postPokeData = {
                    poke_id: data.pokemon.id,
                    type: typesName,
                    name: data.species.names[2].name,
                    url: data.pokemon.sprites.other.showdown.front_default,
                    background: data.species.color.name,
                };
                mutate(postPokeData);
            }
        } else {
            setCatchResult(false);
        }
    };
    return { catchResult, onCatchPoketMon };
};
export default useCatchPokemon;
