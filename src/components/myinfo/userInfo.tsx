import { useState } from "react";
import CustomButton from "../commons/button";
import { useMutation } from "react-query";
import { patchUpdateInfo } from "../../libs/axios/userAPI";
import LogoutButton from "./logoutButton";
import { setSessionUserInfo } from "../../utils/storageUtils";

type userInfo = {
    nickName: string;
    userId: string;
};

const UserInfo = ({ nickName, userId }: userInfo) => {
    const [editMode, setEditMode] = useState(false);
    const [updateNickname, setUpdateNickName] = useState(nickName || "");

    const updateMutation = useMutation(patchUpdateInfo, {
        onSuccess: () => {
            setSessionUserInfo({ userId, nickName: updateNickname });
            window.location.reload();
            setEditMode(false);
        },
        onError: (error) => {
            console.error(error);
        },
    });

    const handleEditClick = () => {
        setEditMode(true);
    };
    const handleSaveClick = () => {
        const profileData = {
            data: {
                nickName: updateNickname,
            },
        };
        updateMutation.mutate(profileData);
    };

    return (
        <div className="w-[600px] h-[300px] bg-SYSTEM-white ml-8 rounded-xl flex justify-center items-center flex-col p-4">
            <p className="text-lg pb-4">회원정보</p>
            <div className="w-[90%] h-[200px] border-2 border-COMMON-light_gray rounded-xl flex flex-col justify-center">
                <div className="w-full flex flex-row  justify-start items-center pt-4">
                    <p className="text-lg pl-4">닉네임 :</p>
                    {editMode ? (
                        <input
                            type="text"
                            className="w-[300px] text-lg text-center border-2 rounded-lg"
                            value={updateNickname}
                            onChange={(e) => setUpdateNickName(e.target.value)}
                        />
                    ) : (
                        <p className="w-[300px] text-lg text-center">
                            {nickName}
                        </p>
                    )}
                    <CustomButton
                        variant={"common"}
                        size={"small"}
                        onClick={editMode ? handleSaveClick : handleEditClick}
                    >
                        {editMode ? "완료" : "수정"}
                    </CustomButton>
                </div>
                <div className="w-full flex flex-row  justify-start items-center pt-4">
                    <p className="text-lg pl-4">아이디 :</p>
                    <p className="w-[300px] text-lg text-center">{userId}</p>
                </div>
                <div className="w-full flex flex-row  justify-center items-center pt-4">
                    <LogoutButton />
                </div>
            </div>
        </div>
    );
};
export default UserInfo;
