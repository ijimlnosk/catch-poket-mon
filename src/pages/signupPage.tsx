import logo from "../assets/imgs/logo.png";

const SignupPage = () => {
    return (
        <div className="w-full h-screen flex flex-col overflow-hidden">
            {/* 빨간색 섹션 */}
            <div
                className={`w-full h-[16.7%] bg-COMMON-red flex flex-col justify-end items-center overflow-hidden
                }`}
            >
                <div className="flex w-full">
                    <div className="w-[45%] flex flex-col justify-end items-center">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                    <div className="min-w-[310px] h-[160px]  bg-SYSTEM-black rounded-t-full flex flex-col justify-end items-center">
                        <div className="w-60 h-32 bg-SYSTEM-white rounded-t-full flex flex-col justify-end items-center"></div>
                    </div>
                    <div className="w-[45%] flex flex-col justify-end items-center">
                        <div className="w-full h-4 bg-SYSTEM-black "></div>
                    </div>
                </div>
            </div>

            <div className={` h-screen flex items-center justify-center`}>
                {/* signinForm */}
                <div className="w-[400px] h-[400px] flex items-center justify-center flex-col rounded-xl">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="flex items-center justify-center flex-col">
                        <label className="pt-6">ID</label>
                        <input
                            placeholder="아이디를 입력하세요"
                            className="border-2 border-COMMON-light-gray p-2"
                        />
                        <label className="pt-6">Password</label>
                        <input
                            placeholder="비밀번호를 입력하세요"
                            className="border-2 border-COMMON-light-gray p-2"
                        />
                        <label className="pt-6">닉네임</label>
                        <input
                            placeholder="닉네임을 입력하세요"
                            className="border-2 border-COMMON-light-gray p-2"
                        />
                        <button className="pt-8">가입하기</button>
                    </div>

                    {/* signupForm */}
                </div>
            </div>

            {/* 하얀색 섹션 */}
            <div
                className={`w-full h-[16.7%] bg-SYSTEM-white overflow-hidden  `}
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
export default SignupPage;
