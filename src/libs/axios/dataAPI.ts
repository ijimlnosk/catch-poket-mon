import { Pokemon } from "../../types/pokeTypes/pokemonData";
import { userDataInstance } from "./axiosInstance";

interface PokeRequest {
    poke_id: number;
    type: string[];
    name: string;
    url: string;
    background: string;
}

interface getPokeData {
    apiKey: string;
    auth: boolean;
    pair: number;
}

const defaultPokeData: getPokeData = {
    apiKey: "mobi3rd1234",
    auth: true,
    pair: 2,
};

//포켓몬 포획 / 저장
export const postData = async (postPokeData: PokeRequest) => {
    const postDataResponse = await userDataInstance.post(
        "/data/poke",
        {
            pokeId: postPokeData.poke_id,
            type: postPokeData.type,
            name: postPokeData.name,
            url: postPokeData.url,
            background: postPokeData.background,
        },
        {
            params: defaultPokeData,
        }
    );
    return postDataResponse.data;
};

//포획한 포켓몬 불러오기
export const getData = async (
    startPage: number,
    endPage: number
): Promise<{ data: Pokemon[] }> => {
    const requests = Array.from({ length: endPage - startPage + 1 }, (_, i) =>
        userDataInstance.get("/data/poke", {
            params: {
                ...defaultPokeData,
                page: startPage + i,
            },
        })
    );
    const responses = await Promise.all(requests);
    const pokemons = responses.flatMap((res) => res.data.data);
    return { data: pokemons };
};

//포획된 포켓몬 놓아주기
export const deleteData = async (id: string) => {
    const deleteDataResponse = await userDataInstance.delete(
        `/data/poke/${id}`,
        {
            params: {
                ...defaultPokeData,
            },
        }
    );
    return deleteDataResponse.data;
};
