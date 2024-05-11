import { useMutation } from "react-query";
import { postSignin } from "../libs/axios/userAPI";
import { useNavigate } from "react-router-dom";
import { setSessionToken, setSessionUserInfo } from "../utils/storageUtils";

interface FormValues {
    userId: string;
    password: string;
}

export const useSigninMutation = () => {
    const navigate = useNavigate();

    const mutation = useMutation(
        (formData: FormValues) => postSignin(formData),
        {
            onSuccess: (data) => {
                if (data.status === 200) {
                    setSessionToken(data.data.token);
                    const userInfo = {
                        userId: data.data.userId,
                        nickName: data.data.info.nickName,
                    };
                    setSessionUserInfo(userInfo);
                    navigate("/");
                }
            },
            onError: () => {
                alert("로그인에 실패했습니다");
            },
        }
    );

    return mutation;
};
