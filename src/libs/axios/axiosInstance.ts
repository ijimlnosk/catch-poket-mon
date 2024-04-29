import axios from "axios";

export const kakaoInstance = axios.create({
    baseURL: "https://dapi.kakao.com",
    headers: {
        Authorization: `KakaoAK ${import.meta.env.VITE_API_KAKAO_KEY}`,
    },
});

export const poketmonInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_POKETMON_BASE_URL}`,
});

interface KakaoResponse {
    documents: Array<{
        title: string;
        url: string;
        datetime: Date;
        play_time: number;
        thumbnail: string;
        author: string;
    }>;
}

export const searchVClip = async (query: string): Promise<KakaoResponse> => {
    const response = await kakaoInstance.get<KakaoResponse>(
        "/v2/search/vclip",
        {
            params: { query },
        }
    );
    return response.data;
};
