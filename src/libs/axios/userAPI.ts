import { profile } from "console";
import { userDataInstance } from "./axiosInstance";

export interface UserRequest {
    userId: string;
    password: string;
}

//회원가입
export const postSignup = async (user: UserRequest) => {
    const response = await userDataInstance.post("/user/sign-up", user);
    return response;
};

//로그인
export const postSignin = async (user: UserRequest) => {
    const response = await userDataInstance.post("/user/sign-in", user);
    return response;
};

//로그아웃
export const postSignout = async () => {
    const response = await userDataInstance.post("/user/sign-out");
    return response;
};

//리프레쉬토큰
export const getRefresh = async () => {
    const response = await userDataInstance.get("/user/refresh");
    if (response.status === 200) {
        return response.data.token;
    } else {
        console.error("접근 권한이 없습니다");
    }
};

//회원정보 수정
interface profile {
    image?: string;
    nickname?: string;
}

//프로필이미지 수정
export const patchUpdateProfileUrl = async (image: profile) => {
    const response = await userDataInstance.patch(
        "/user/update/profileUrl",
        image
    );
    return response;
};

//프로필 닉네임 수정
export const patchUpdateInfo = async (nickname: profile) => {
    const response = await userDataInstance.patch(
        "/user/update.info",
        nickname
    );
    return response;
};
