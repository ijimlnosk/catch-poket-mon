export const setSessionToken = (token: string): void => {
    sessionStorage.setItem("accessToken", token);
};

export const getSessionToken = () => {
    return sessionStorage.getItem("accessToken");
};

type userInfo = {
    userId: string;
    nickName: string;
};

export const setSessionUserInfo = (userInfo: userInfo) => {
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const getSessionUserInfo = () => {
    const userInfoString = sessionStorage.getItem("userInfo");
    if (userInfoString) {
        return JSON.parse(userInfoString);
    }
};

export const setSessionUserProfile = (profileUrl: string) => {
    const userProfile = { profileUrl };
    sessionStorage.setItem("userProfile", JSON.stringify(userProfile));
};

export const getSessionUserProfile = () => {
    const profileString = sessionStorage.getItem("userProfile");
    if (profileString) {
        return JSON.parse(profileString);
    }
    return null;
};
