import { useState } from "react";
import { useRandomPokeData } from "../../hook/useRandomPokeData";
import LoadingPage from "../commons/loadingPage";
import { getPokemonSpecies, getPokemon } from "../../libs/axios/pokeAPI";
import { useMutation, useQueryClient } from "react-query";
import { postData } from "../../libs/axios/dataAPI";
import Overlay from "../commons/overlay";
import Modal from "../commons/modal";
import ResultOverlay from "./resultOverlay";

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
    const [catchResult, setCatchResult] = useState<boolean | null>(null);
    const [runAway, setRunAway] = useState<boolean>(false);
    const { data, error, isLoading } = useRandomPokeData({
        getPokemonSpecies,
        getPokemon,
    });

    // 포획률 계산
    const captureRate = data?.species?.capture_rate;
    const capturePercent = captureRate
        ? ((captureRate / 255) * 100).toFixed(2)
        : null;

    const { mutate } = useMutation(postData, {
        onSuccess: () => {},
        onError: (error: unknown) => {
            console.error("포획 데이터 저장 실패", error);
        },
    });
    if (isLoading) return <LoadingPage />;
    if (error) return <div>error</div>;

    const handleNewSession = () => {
        // 페이지 강제 새로고침
        queryClient.invalidateQueries("pokeData");
        setCatchResult(null);
        returnLevel1();
    };

    // 포획 실패 시
    const catchFail = () => {
        setCatchResult(null);
        returnLevel1();
        queryClient.invalidateQueries("pokeData");
    };

    // 도망가기
    const handleRunAway = () => {
        setRunAway(false);
        returnLevel1();
        queryClient.invalidateQueries("pokeData");
    };

    // 포획 버튼 클릭 이벤트
    const onCatchPoketMon = () => {
        const isSuccess = captureRate && Math.random() < captureRate / 255;
        if (isSuccess) {
            const typesName = data?.pokemon?.types.map(
                (type) => type.type.name
            );
            if (
                data?.pokemon?.id &&
                typesName &&
                data?.species?.names[2].name
            ) {
                const postPokeData = {
                    poke_id: data?.pokemon?.id,
                    type: typesName,
                    name: data?.species?.names[2].name,
                    url: data?.pokemon?.sprites?.front_default,
                    background: data?.species?.color.name,
                };
                setCatchResult(true);
                mutate(postPokeData);
            }
        } else {
            setCatchResult(false);
        }
    };
    return (
        <>
            {catchResult !== null && (
                <ResultOverlay
                    result={catchResult}
                    onClose={() => catchFail()}
                    onNavigate={handleNewSession}
                />
            )}
            {runAway && (
                <Overlay
                    isOpen={runAway}
                    onClose={() => {
                        setRunAway(false);
                    }}
                >
                    <Modal
                        title="무사히 도망쳤다!"
                        buttonText="확인"
                        onClick={() => handleRunAway()}
                    />
                </Overlay>
            )}
            <div className="flex flex-col">
                {!pokeConfirm && (
                    <div className="absolutes">
                        <div className="w-full flex items-center justify-center">
                            <div className="w-[922px] h-[700px] flex justify-center items-center flex-col  ">
                                <div className=" mr-[-770px] mb-[-35px]">
                                    <p className=" text-lg">
                                        포획률 : {capturePercent}%
                                    </p>
                                </div>

                                <div className="h-[600px] flex items-center ">
                                    <img
                                        src={
                                            data?.pokemon?.sprites?.other
                                                ?.showdown?.front_default
                                        }
                                        className="h-[200px] "
                                    />
                                </div>
                                <div className="w-[100%] h-[50px] mt-[-10px] text-xl bg-SYSTEM-white text-center  border border-SYSTEM-black rounded-md">
                                    앗! 야생 {data?.species?.names[2].name}
                                    (이)가 나타났다!
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-[30px]">
                            <button
                                className="w-[150px] h-[60px] bg-MAIN-gray z-50"
                                onClick={onCatchPoketMon}
                            >
                                포획하기
                            </button>
                            <button
                                className="w-[150px] h-[60px] bg-MAIN-gray"
                                onClick={() => setRunAway(true)}
                            >
                                도망가기
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};
export default EncounterPoke;
