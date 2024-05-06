import { useNavigate, useLocation } from "react-router-dom";
import { getSessionToken } from "../../utils/storageUtils";
import { useEffect } from "react";
import RootLayout from "../../components/layouts/layout";

const AdminRouter: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const sessionToken = getSessionToken();

    useEffect(() => {
        if (!sessionToken) {
            navigate("/poketmondetail");
        } else {
            if (location.pathname === "/signin") {
                navigate("/");
            }
        }
    }, [navigate, location.pathname, sessionToken]);
    return <RootLayout />;
};

export default AdminRouter;
