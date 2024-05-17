import { ChangeEvent, useState, useEffect } from "react";
import { useMutation } from "react-query";
import { patchUpdateProfileUrl } from "../../libs/axios/userAPI";
import {
    getSessionUserProfile,
    setSessionUserProfile,
} from "../../utils/storageUtils";

const ProfileChange = () => {
    const [profileUrl, setProfileUrl] = useState<string | null>(null);

    // 컴포넌트가 처음 마운트될 때 세션에서 프로필 URL을 가져와 상태를 설정
    useEffect(() => {
        // 세션에서 사용자 프로필 정보를 가져옴
        const userProfile = getSessionUserProfile();
        // 프로필 정보와 URL이 존재할 경우 상태를 업데이트
        if (userProfile && userProfile.profileUrl) {
            setProfileUrl(userProfile.profileUrl);
        }
    }, []);

    // 프로필 이미지를 업데이트하는 mutation 설정
    const mutation = useMutation(patchUpdateProfileUrl, {
        onSuccess: (data) => {
            setSessionUserProfile(data);
            setProfileUrl(data);
        },
    });

    // 파일 입력이 변경되었을 때 호출되는 함수
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        // 파일이 선택되었는지 확인
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            // 파일을 데이터 URL로 읽기 시작
            reader.readAsDataURL(file);
            // 이미지를 서버에 업로드
            mutation.mutate({ data: { image: file } });
        }
    };

    return (
        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center bg-SYSTEM-white rounded-xl ">
            <div className="w-[250px] h-[250px] flex justify-center items-center flex-col rounded-lg">
                {profileUrl && (
                    <img
                        src={profileUrl}
                        className="w-[200px] h-[200px] rounded-lg"
                        alt="유저 프로필"
                    />
                )}

                {mutation.isError && (
                    <p>
                        Error:
                        {mutation.error instanceof Error
                            ? mutation.error.message
                            : "An error occurred"}
                    </p>
                )}
            </div>
            <div className="w-[250px] h-[70px] p-4 flex justify-center items-center flex-col ">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="profileImageInput"
                    className="hidden"
                />
                <label
                    htmlFor="profileImageInput"
                    className="mt-2 p-2 pr-10 pl-10 bg-MAIN-gray text-SYSTEM-black rounded cursor-pointer"
                >
                    이미지 변경하기
                </label>
            </div>
        </div>
    );
};

export default ProfileChange;
