import { useMutation } from "react-query";
import { UserRequest, postSignin } from "../libs/axios/userAPI";
import { setSessionToken, setSessionUserInfo } from "../utils/storageUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSigninMutation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const navigate = useNavigate();
    const toggleModal = () => setIsOpen(!isOpen);

    const { mutate } = useMutation(
        (formData: UserRequest) => postSignin(formData),
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
                setModalContent("로그인에 실패했습니다.");
                toggleModal();
            },
        }
    );

    return { mutate, isOpen, toggleModal, modalContent };
};
