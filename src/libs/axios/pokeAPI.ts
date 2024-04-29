import { PokeRoot } from "../../type/abilityType";
import { SpritesRoot } from "../../type/spritesType";

import { pocketmonInstance } from "./axiosInstance";

interface PocketmonResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Array<{ name: string; url: string }>;
}

export const getAllPocketmon = async () => {
    const response = await pocketmonInstance.get<PocketmonResponse>(
        "/pokemon/?limit=10?offset=0"
    );
    return response.data;
};

export const getAbilityInfo = async (poketId: number) => {
    const response = await pocketmonInstance.get<PokeRoot>(
        `/ability/${poketId}`
    );
    return response.data;
};

export const getPokemonSprites = async (poketId: number) => {
    const response = await pocketmonInstance.get<SpritesRoot>(
        `/pokemon/${poketId}`
    );
    return response.data;
};
