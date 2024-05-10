import { QueryClient } from "react-query";

const handleNewSession = (
    returnLevel1: VoidFunction,
    queryClient: QueryClient
) => {
    returnLevel1();
    queryClient.invalidateQueries("pokeData");
};

const handleSuccess = (
    catchResult: boolean | null,
    handleNewSession: () => void
) => {
    catchResult;
    handleNewSession();
};

// 포획 실패 시
const handleCatchFail = (
    catchResult: boolean | null,
    handleNewSession: () => void
) => {
    catchResult;
    handleNewSession();
};

// 도망가기
const handleRunAway = (
    setRunAway: (value: boolean) => void,
    handleNewSession: () => void
) => {
    setRunAway(false);
    handleNewSession();
};

export { handleNewSession, handleSuccess, handleCatchFail, handleRunAway };
