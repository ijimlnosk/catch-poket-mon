import { useNavigate } from "react-router-dom";
import Modal from "../commons/modal";

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
    return (
        <Modal
            title={isSuccess ? "포획 성공! 확인하러가기" : "포획 실패!"}
            buttonText={isSuccess ? "다시하기" : "닫기"}
            onClick={isSuccess ? onNavigate : onClose}
            secondButtonText={isSuccess ? "가기" : ""}
            onSecondClick={isSuccess ? () => navigate("/myinfo") : undefined}
            isOpen={result !== null}
            onClose={onClose}
        />
    );
};
export default SuccessFailOverlay;
