import { useMutation } from "react-query";
import { UserRequest, postSignup } from "../libs/axios/userAPI";
import { useState } from "react";

export const useSignupMutation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const toggleModal = () => setIsOpen(!isOpen);

    const { mutate } = useMutation(
        (formData: UserRequest) => postSignup(formData),
        {
            onSuccess: (data) => {
                if (data.status === 200) {
                    setModalContent(
                        `회원가입에 성공했습니다!!!!!로그인 페이지로 이동합니다.`
                    );
                    toggleModal();
                }
            },
            onError: () => {
                setModalContent("이미 존재하는 계정입니다.");
                toggleModal();
            },
        }
    );
    return { mutate, isOpen, toggleModal, modalContent };
};
