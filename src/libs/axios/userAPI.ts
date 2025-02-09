import { userDataInstance } from "./axiosInstance";
import { getPokeData } from "./dataAPI";

export interface UserRequest {
  userId: string;
  password: string;
}

export interface SignupRequest {
  userId: string;
  password: string;
  data: {
    nickName: string;
  };
}

const defaultUserData: getPokeData = {
  apiKey: "mobi3rd1234",
  pair: 2,
};

//회원가입
export const postSignup = async (user: SignupRequest) => {
  const response = await userDataInstance.post("/user/sign-up", user, {
    params: defaultUserData,
  });
  return response;
};

//로그인
export const postSignin = async (user: UserRequest) => {
  const response = await userDataInstance.post("/user/sign-in", user, {
    params: defaultUserData,
  });
  console.log(response);
  return response;
};

//로그아웃
export const postSignout = async () => {
  const response = await userDataInstance.post(
    "/user/sign-out",
    {},
    {
      params: defaultUserData,
    }
  );
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
export interface Profile {
  data: {
    image?: File;
    nickName?: string;
  };
}

//프로필이미지 수정
export const patchUpdateProfileUrl = async (profileImage: Profile) => {
  const formData = new FormData();
  if (profileImage.data.image) {
    formData.append("image", profileImage.data.image);
  } else {
    throw new Error("No image file provided");
  }
  try {
    const response = await userDataInstance.patch(
      "/user/update/profileUrl",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: defaultUserData,
      }
    );
    return response.data.profileUrl;
  } catch (error) {
    throw new Error("error");
  }
};
//프로필 닉네임 수정
export const patchUpdateInfo = async (nickName: Profile) => {
  const response = await userDataInstance.patch("/user/update/info", nickName, {
    params: defaultUserData,
  });
  return response;
};
