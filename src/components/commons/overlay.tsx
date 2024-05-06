import clsx from "clsx";
import { ReactNode } from "react";

interface OverlayProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    widthCss?: string;
    heightCss?: string;
}

/**
 *
 * @param (boolean) isOpen - 오버레이의 표시 여부 제어
 * @param (Function) onClose - 오버레이를 닫을 때 호출되는 콜백함수 닫기 or 오버레이 바깥 클릭 시 닫힘
 * @param (ReactNode) children - 오버레이 내부에 표시될 내용
 * @param (string) [widthCss="max-w-4xl"] - 오버레이 너비를 설정하기 위한 선택적 css클래스
 * @param (string) [heightCss="h-auto"] - 오버레이 높이를 설정하기 위한 선택적 css클래스
 */

const Overlay: React.FC<OverlayProps> = ({
    isOpen,
    onClose,
    children,
    widthCss = "max-w-4xl",
    heightCss = "h-auto",
}) => {
    if (!isOpen) return null;

    const contentCss = clsx(
        "bg-white p-4 rounded-lg shadow-lg w-auto mx-auto my-auto",
        widthCss,
        heightCss
    );

    return (
        <div
            className="fixed inset-0 bg-SYSTEM-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div className={contentCss} onClick={(e) => e.stopPropagation()}>
                {children}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-lg font-bold"
                >
                    X
                </button>
            </div>
        </div>
    );
};

export default Overlay;
