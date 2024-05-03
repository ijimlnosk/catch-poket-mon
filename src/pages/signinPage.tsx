import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/imgs/logo.png";
import { useNavigate } from "react-router-dom";


/**
 * signin page
 * author : kimjinsol
 * @returns {}
 */

const SigninPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
    const transitionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleSections = () => {
        setShowLoginForm(false);
        setIsOpen(!isOpen);
    };


    const handleNavSignup = () => {
        navigate("/signup");
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
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

            <div
                className={`flex items-center justify-center transition-opacity duration-500 ease-in-out absolute translate-x-[-50%] translate-y-[-50%] left-1/2 top-1/2 ${
                    showLoginForm ? "opacity-100" : "opacity-0"
                }`}
            >
                {/* signinForm */}
                <div className="w-[400px]  flex items-center justify-center flex-col pb-20 rounded-xl">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <label className="pt-8">ID</label>
                        <input
                            placeholder="아이디를 입력하세요"
                            className="border-2 border-COMMON-light-gray p-2"
                        />
                        <label className="pt-8">Password</label>
                        <input
                            placeholder="비밀번호를 입력하세요"
                            className="border-2 border-COMMON-light-gray p-2"
                        />
                        <button className="p-4">로그인</button>
                    </div>

                    <div className="flex flex-row">
                        <p className="p-4 text-ti text-POKETYPE-rock">
                            아직도 회원이 아니신가요?
                        </p>
                        <button onClick={handleNavSignup} className="text-ti">
                            가입하러가기
                        </button>
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
                    <div className="w-[45%]">
                        <div className="w-full h-4 bg-SYSTEM-black"></div>
                    </div>
                    <div className="min-w-[310px] h-[160px] bg-SYSTEM-black rounded-b-full flex flex-col justify-start items-center">
                        <div className="w-60 h-32 bg-SYSTEM-white rounded-b-full"></div>
                    </div>
                    <div className="w-[45%]">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SigninPage;
