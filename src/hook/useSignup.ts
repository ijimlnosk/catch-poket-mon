import { useMutation } from "react-query";
import { SignupRequest, postSignup } from "../libs/axios/userAPI";
import { useState } from "react";

export const useSignupMutation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    const { mutate } = useMutation(
        (formData: SignupRequest) => postSignup(formData),
        {
            onSuccess: (data) => {
                if (data.status === 201) {
                    setModalContent(
                        `회원가입에 성공했습니다!!!!!로그인 페이지로 이동합니다.`
                    );
                    setIsSuccess(true);
                    toggleModal();
                }
            },
            onError: () => {
                setModalContent("이미 존재하는 계정입니다.");
                setIsSuccess(false);
                toggleModal();
            },
        }
    );
    return { mutate, isOpen, toggleModal, modalContent, isSuccess };
};
