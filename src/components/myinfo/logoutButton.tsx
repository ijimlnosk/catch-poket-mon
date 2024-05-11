import { useMutation } from "react-query";
import CustomButton from "../commons/button";
import { postSignout } from "../../libs/axios/userAPI";

const LogoutButton = () => {
    const logoutMutation = useMutation(postSignout, {
        onSuccess: () => {
            window.location.href = "/signin";
        },
        onError: (error) => {
            console.error("로그아웃 실패:", error);
        },
    });

    const handleLogoutClick = () => {
        logoutMutation.mutate();
    };

    return (
        <CustomButton
            variant="common"
            size="large"
            shape="roundedSquare"
            onClick={handleLogoutClick}
        >
            로그아웃
        </CustomButton>
    );
};

export default LogoutButton;
