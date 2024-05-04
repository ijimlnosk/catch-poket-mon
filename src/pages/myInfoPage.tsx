import { BsPlusLg } from "react-icons/bs";

const MyInfoPage = () => {
    return (
        <div className="w-full bg-MAIN-purple flex items-center justify-cneter flex-col pb-8">
            <div className="w-full p-[20px] flex items-center justify-center flex-row">
                <div className="w-[300px] h-[300px] flex flex-col ">
                    <div className="h-[260px] bg-SYSTEM-white rounded-xl flex justify-center items-center">
                        <BsPlusLg size={150} color="#ccc" />
                    </div>
                    <button className="p-4">프로필 변경</button>
                </div>
                <div className="w-[600px] h-[300px] bg-SYSTEM-white ml-8 rounded-xl flex justify-center items-center flex-col p-4">
                    <p className="text-lg pb-4">회원정보</p>
                    <div className="w-[90%] h-[200px] border-2 border-COMMON-light_gray rounded-xl flex flex-col justify-center">
                        <div className="w-full flex flex-row  justify-start items-center pt-4">
                            <p className="text-lg pl-4">닉네임 :</p>
                            <p className="w-[300px] text-lg text-center">
                                지우
                            </p>
                            <button className="">수정</button>
                        </div>
                        <div className="w-full flex flex-row  justify-start items-center pt-4">
                            <p className="text-lg pl-4">아이디 :</p>
                            <p className="w-[300px] text-lg text-center">
                                Admin123
                            </p>
                        </div>
                        <div className="w-full flex flex-row  justify-start items-center pt-4">
                            <button className="w-[184px] text-lg p-2">
                                비밀번호 변경
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full p-[20px] flex items-center justify-center flex-col ">
                <div className="w-[57%] bg-SYSTEM-white rounded-xl flex items-center justify-center flex-col pb-8">
                    <div className="w-full flex justify-center flex-col items-center pt-4 ">
                        <p className="text-xl  p-2 rounded-xl ">
                            포켓몬 장바구니
                        </p>
                        <div className="w-full flex justify-end ">
                            <p className="text-lg p-8">최대 30마리</p>
                        </div>
                    </div>
                    <div className="w-[90%] h-[600px] overflow-y-auto  border-2 border-COMMON-light-gray rounded-xl"></div>
                </div>
            </div>
        </div>
    );
};
export default MyInfoPage;
