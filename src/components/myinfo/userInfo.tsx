import { useState } from "react";
import CustomButton from "../commons/button";
import Modal from "../commons/modal";
import { useUpdateUser } from "../../hook/useUpdateUser";
import LogoutButton from "./logoutButton";

type userInfo = {
    nickName: string;
    userId: string;
};

const UserInfo = ({ nickName, userId }: userInfo) => {
    const [editMode, setEditMode] = useState(false);
    const [updateNickname, setUpdateNickName] = useState(nickName || "");
    const [isError, setIsError] = useState(false);

    const { mutate } = useUpdateUser(userId, updateNickname);

    const handleEditClick = () => {
        setEditMode(true);
    };
    const handleSaveClick = () => {
        const profileData = {
            data: {
                userId: userId,
                nickName: updateNickname,
            },
        };
        mutate(profileData);
    };

    return (
        <>
            <Modal
                title="에러가 발생했습니다"
                isOpen={isError}
                onClose={() => setIsError(false)}
                buttonText="확인"
            />
            <div className="w-[600px] h-[400px] bg:h-[300px] bg-SYSTEM-white ml-8 rounded-xl flex justify-center items-center flex-col p-4">
                <p className="text-lg pb-4">회원정보</p>
                <div className="w-[90%] h-[400px] border-2 border-COMMON-light_gray rounded-xl flex flex-col justify-center ">
                    <div className="w-full flex flex-col justify-start items-center pt-4 bg:flex-row ">
                        <p className="text-lg pl-4">닉네임 :</p>
                        {editMode ? (
                            <input
                                type="text"
                                className="w-[200px] text-lg text-center border-2 rounded-lg"
                                value={updateNickname}
                                onChange={(e) =>
                                    setUpdateNickName(e.target.value)
                                }
                            />
                        ) : (
                            <p className="w-[300px] text-lg text-center">
                                {nickName}
                            </p>
                        )}
                        <CustomButton
                            variant={"common"}
                            size={"small"}
                            onClick={
                                editMode ? handleSaveClick : handleEditClick
                            }
                        >
                            {editMode ? "완료" : "수정"}
                        </CustomButton>
                    </div>
                    <div className="w-full flex flex-col justify-start items-center pt-4 bg:flex-row ">
                        <p className="text-lg pl-4">아이디 :</p>
                        <p className="w-[300px] text-lg text-center">
                            {userId}
                        </p>
                    </div>
                    <div className="w-full flex flex-row  justify-center items-center pt-4">
                        <LogoutButton />
                    </div>
                </div>
            </div>
        </>
    );
};
export default UserInfo;
