import { useMutation } from "react-query";
import { postSignin } from "../libs/axios/userAPI";
import { useNavigate } from "react-router-dom";
import { setSessionToken } from "../utils/storageUtils";

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
                console.log(data.data.token)
                if (data.status === 200) {
                    setSessionToken(data.data.token)
                    navigate('/');
                }
            },
            onError: () => {
                alert("로그인에 실패했습니다");
            }
        }
    );

    return mutation;
};
