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
        postPokeData,
        {
            params: {
                pair: "2",
                auth: true,
                apiKey: "mobi3rd1234",
            },
        }
    );
    return postDataResponse.data;
};

//포획한 포켓몬 불러오기
export const getData = async () => {
    const getDataResponse = await userDataInstance.get("/data/poke", {
        params: {
            defaultPokeData,
        },
    });

    return getDataResponse.data;
};

//포획된 포켓몬 놓아주기
export const deleteData = async (id: number) => {
    const deleteDataResponse = await userDataInstance.delete(
        `/data/poke/${id}`,
        {
            params: {
                defaultPokeData,
            },
        }
    );
    return deleteDataResponse.data;
};