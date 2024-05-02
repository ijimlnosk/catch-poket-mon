import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/imgs/logo.png";

/**
 * signin page
 * author : kimjinsol
 * @returns {JSX.Element}
 */

const SigninPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
    const transitionRef = useRef<HTMLDivElement>(null);

    const handleSections = () => {
        setShowLoginForm(false);
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const ref = transitionRef.current;
        if (ref) {
            const handleTransition = () => {
                if (!isOpen) {
                    setShowLoginForm(true);
                }
            };
            ref.addEventListener("transitionend", handleTransition);

            return () => {
                ref.removeEventListener("transitionend", handleTransition);
            };
        }
    }, [isOpen]);

    return (
        <div className="w-full h-screen flex flex-col overflow-hiden">
            {/* 빨간색 섹션 */}
            <div
                ref={transitionRef}
                className={`w-full h-1/2 bg-COMMON-red flex flex-col justify-end items-center overflow-hidden transition-all duration-500 ease-in-out  ${
                    isOpen
                        ? "transform translate-y-0"
                        : "transform -translate-y-3/4"
                }`}
            >
                <div className="flex w-full">
                    <div className="w-2/5 flex flex-col justify-end items-center">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                    <div className="w-80 h-40  bg-SYSTEM-black rounded-t-full flex flex-col justify-end items-center">
                        <div className="w-60 h-32 bg-SYSTEM-white rounded-t-full flex flex-col justify-end items-center">
                            <button
                                onClick={handleSections}
                                className="w-60 h-32  rounded-t-full hover:bg-COMMON-light-gray  transition-colors"
                            ></button>
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-col justify-end items-center">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                </div>
            </div>

            <div
                className={`flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    showLoginForm ? "" : "hidden"
                }`}
            >
                {/* loginForm */}
                <div className="w-1/3 flex items-center justify-center flex-col bg-SYSTEM-white pb-20 rounded-xl">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <label className="p-2">ID</label>
                        <input
                            placeholder="아이디를 입력하세요"
                            className="border-2 border-COMMON-light-gray p-2"
                        />
                        <label className="p-8">Password</label>
                        <input
                            placeholder="비밀번호를 입력하세요"
                            className="border-2 border-COMMON-light-gray p-2"
                        />
                    </div>
                </div>
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
                    <div className="w-2/5">
                        <div className="w-full h-4 bg-SYSTEM-black"></div>
                    </div>
                    <div className="w-80 h-40 bg-SYSTEM-black rounded-b-full flex flex-col justify-start items-center">
                        <div className="w-60 h-32 bg-SYSTEM-white rounded-b-full"></div>
                    </div>
                    <div className="w-2/5">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SigninPage;
