import { useNavigate } from "react-router-dom";
import Modal from "../commons/modal";
import { useDispatch } from "react-redux";
import { setCatching } from "../../libs/redux/catchingSlice";
import { useQueryClient } from "react-query";

type ResultOverlayProps = {
    result: boolean;
    onClose: () => void;
    onNavigate: () => void;
};

const SuccessFailOverlay = ({
    result,
    onClose,
    onNavigate,
}: ResultOverlayProps) => {
    const navigate = useNavigate();
    const isSuccess = result === true;
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const handleVerify = () => {
        dispatch(setCatching(false));
        navigate("/myinfo");
        queryClient.invalidateQueries("pokemon");
    };

    const handleCloseOrRetry = () => {
        dispatch(setCatching(false));
        if (isSuccess) {
            onNavigate();
        } else {
            onClose();
        }
    };

    return (
        <Modal
            title={isSuccess ? "포획 성공! 확인하러가기" : "포획 실패!"}
            buttonText={isSuccess ? "다시하기" : "닫기"}
            onClick={handleCloseOrRetry}
            secondButtonText={isSuccess ? "확인하기" : ""}
            onSecondClick={isSuccess ? handleVerify : undefined}
            isOpen={result !== null}
            onClose={onClose}
        />
    );
};
export default SuccessFailOverlay;
