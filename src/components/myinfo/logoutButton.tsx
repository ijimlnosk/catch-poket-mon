import { useMutation } from "react-query";
import CustomButton from "../commons/button";
import { postSignout } from "../../libs/axios/userAPI";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();
    const logoutMutation = useMutation(postSignout, {
        onSuccess: () => {
            navigate("/signin");
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
