import { useMutation } from "react-query";
import { patchUpdateProfileUrl } from "../libs/axios/userAPI";
import { setSessionUserProfile } from "../utils/storageUtils";

export const useProfileUpdate = () => {
    const mutation = useMutation(patchUpdateProfileUrl, {
        onSuccess: (data) => {
            setSessionUserProfile(data);
            return data;
        },
    });

    const updateProfileUrl = (file: File) => {
        mutation.mutate({ data: { image: file } });
    };
    return { updateProfileUrl, mutation };
};
