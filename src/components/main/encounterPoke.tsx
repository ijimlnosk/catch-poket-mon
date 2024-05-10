import { useState } from "react";
import { useRandomPokeData } from "../../hook/useRandomPokeData";
import LoadingPage from "../commons/loadingPage";
import { getPokemonSpecies, getPokemon } from "../../libs/axios/pokeAPI";
import { useQueryClient } from "react-query";
import Modal from "../commons/modal";
import SuccessFailOverlay from "./successFailOverlay";
import useCatchPokemon from "../../hook/useCatchPokemon";
import {
    handleCatchFail,
    handleNewSession,
    handleRunAway,
    handleSuccess,
} from "../../utils/encounterPokeUtils";
import EncounterPokeScreen from "./encounterPokeScreen";
type PokeCon = {
    returnLevel1: VoidFunction;
};
/**
 * author : Wendy, Gang
 * mainpage 에서 맨처음 컴포넌트
 * unknown 이미지에서 확인하기 버튼 클릭 시 랜덤한 포켓몬 등장
 * 포획하기 성공 시 postData에 저장되면서 모달창 등장
 * 포획하기 실패 시 확인 창 등장, 클릭 시 다시 unknown 이미지 컴포넌트 보여줌
 * @returns {JSX.Element}
 */
const EncounterPoke = ({ returnLevel1 }: PokeCon) => {
    const [pokeConfirm] = useState<boolean>(false);
    const queryClient = useQueryClient();
    const [runAway, setRunAway] = useState<boolean>(false);
    const { data, error, isLoading } = useRandomPokeData({
        getPokemonSpecies,
        getPokemon,
    });
    const { catchResult, onCatchPoketMon } = useCatchPokemon(data);
    if (isLoading) return <LoadingPage />;
    if (error) return <div>error</div>;
    if (!data) return <div>데이터 없음</div>;
    return (
        <>
            {catchResult !== null && (
                <SuccessFailOverlay
                    result={catchResult}
                    onClose={() =>
                        handleCatchFail(false, () =>
                            handleNewSession(returnLevel1, queryClient)
                        )
                    }
                    onNavigate={() =>
                        handleSuccess(catchResult, () =>
                            handleNewSession(returnLevel1, queryClient)
                        )
                    }
                />
            )}
            {runAway && (
                <Modal
                    title="무사히 도망쳤다!"
                    buttonText="확인"
                    onClick={() =>
                        handleRunAway(setRunAway, () =>
                            handleNewSession(returnLevel1, queryClient)
                        )
                    }
                    isOpen={runAway}
                    onClose={() => setRunAway(false)}
                />
            )}
            <div className="flex flex-col">
                {!pokeConfirm && (
                    <EncounterPokeScreen
                        data={data}
                        onCatchPoketMon={onCatchPoketMon}
                        setRunAway={setRunAway}
                    />
                )}
            </div>
        </>
    );
};
export default EncounterPoke;
