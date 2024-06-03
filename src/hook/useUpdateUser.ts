import { UseMutationResult, useMutation } from "react-query";
import { patchUpdateInfo } from "../libs/axios/userAPI";
import { setSessionUserInfo } from "../utils/storageUtils";
import { AxiosError } from "axios";

type PatchUpdateInfoData = {
    data: {
        userId: string;
        nickName: string;
    };
};

export const useUpdateUser = (
    userId: string,
    initialNickName: string
): UseMutationResult<void, AxiosError, PatchUpdateInfoData> => {
    return useMutation<void, AxiosError, PatchUpdateInfoData, unknown>(
        async (newData: PatchUpdateInfoData) => {
            await patchUpdateInfo(newData); // patchUpdateInfo 함수 호출 및 응답 대기
            return; // void 반환
        },
        {
            onSuccess: () => {
                setSessionUserInfo({ userId, nickName: initialNickName }); // 성공 시 세션 정보 업데이트
                window.location.reload(); // 페이지 새로고침
            },
            onError: (error) => {
                console.error("Update user info failed:", error); // 에러 처리
            },
        }
    );
};
