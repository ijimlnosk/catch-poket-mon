import React from "react";

type SigninScreenProp = {
    children: React.ReactNode;
    isOpen: boolean;
    transitionRef: React.RefObject<HTMLDivElement>;
    showLoginForm: boolean;
    handleSections: () => void;
};

const SigninScreen = ({
    children,
    isOpen,
    transitionRef,
    showLoginForm,
    handleSections,
}: SigninScreenProp) => {
    return (
        <div className="w-full h-screen flex flex-col overflow-hidden">
            {/* 빨간색 섹션 */}
            <div
                ref={transitionRef}
                className={`w-full h-1/2 bg-COMMON-red flex flex-col justify-end items-center overflow-hidden transition-all duration-500 ease-in-out z-50 ${
                    isOpen
                        ? "transform translate-y-0"
                        : "transform -translate-y-3/4"
                }`}
            >
                <div className="flex w-full">
                    <div className="w-[45%] flex flex-col justify-end items-center">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                    <div className="min-w-[310px] h-[160px]  bg-SYSTEM-black rounded-t-full flex flex-col justify-end items-center">
                        <div className="w-60 h-32 bg-SYSTEM-white rounded-t-full flex flex-col justify-end items-center">
                            <button
                                onClick={handleSections}
                                className="w-60 h-32  rounded-t-full hover:bg-COMMON-light-gray  transition-colors"
                            ></button>
                        </div>
                    </div>
                    <div className="w-[45%] flex flex-col justify-end items-center">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                </div>
            </div>

            {/* 로그인 폼 */}
            <div
                className={`flex items-center justify-center transition-opacity duration-500 ease-in-out absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 ${
                    showLoginForm ? "opacity-100" : "opacity-0"
                }`}
            >
                {children}
            </div>

            {/* 하얀색 섹션 */}
            <div
                className={`w-full h-1/2 bg-SYSTEM-white flex flex-col justify-start items-center overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                        ? "transform translate-y-0"
                        : "transform translate-y-3/4"
                }`}
            >
                <div className="flex w-full">
                    <div className="w-[45%]">
                        <div className="w-full h-4 bg-SYSTEM-black"></div>
                    </div>
                    <div className="min-w-[310px] h-[160px] bg-SYSTEM-black rounded-b-full flex flex-col justify-start items-center">
                        <div className="w-60 h-32 bg-SYSTEM-white rounded-b-full">
                            <button
                                onClick={handleSections}
                                className="w-60 h-32  rounded-b-full hover:bg-COMMON-light-gray  transition-colors"
                            ></button>
                        </div>
                    </div>
                    <div className="w-[45%]">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SigninScreen;
