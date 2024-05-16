import { useMutation } from "react-query";
import CustomButton from "../commons/button";
import { postSignout } from "../../libs/axios/userAPI";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../commons/modal";

const LogoutButton = () => {
    const navigate = useNavigate();
    const [isError, setIsError] = useState(false);
    const logoutMutation = useMutation(postSignout, {
        onSuccess: () => {
            navigate("/signin");
        },
        onError: () => {
            setIsError(true);
        },
    });

    const handleLogoutClick = () => {
        logoutMutation.mutate();
    };

    return (
        <>
            <Modal
                title="에러가 발생했습니다"
                isOpen={isError}
                onClose={() => setIsError(false)}
                buttonText="확인"
            />
            <CustomButton
                variant="common"
                size="large"
                shape="roundedSquare"
                onClick={handleLogoutClick}
            >
                로그아웃
            </CustomButton>
        </>
    );
};

export default LogoutButton;
