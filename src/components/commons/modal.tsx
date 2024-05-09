import CustomButton from "./button";

type ModalProps = {
    title: string;
    buttonText: string;
    onClick: () => void;
    secondButtonText?: string;
    onSecondClick?: () => void;
};

const Modal = ({
    title,
    buttonText,
    onClick,
    secondButtonText,
    onSecondClick,
}: ModalProps) => {
    return (
        <div className="w-[300px] h-[150px] flex items-center justify-center flex-col">
            <p className="p-8">{title}</p>
            <div className=" w-full flex justify-center items-center flex-row">
                <CustomButton
                    variant={"common"}
                    shape={"roundedSquare"}
                    size={"medium"}
                    onClick={onClick}
                >
                    {buttonText}
                </CustomButton>
                <div className="w-4"></div>
                {secondButtonText && onSecondClick && (
                    <CustomButton
                        variant={"common"}
                        shape={"roundedSquare"}
                        size={"medium"}
                        onClick={onSecondClick}
                    >
                        {secondButtonText}
                    </CustomButton>
                )}
            </div>
        </div>
    );
};
export default Modal;
