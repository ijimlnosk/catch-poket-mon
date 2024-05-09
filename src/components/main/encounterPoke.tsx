import { useState } from "react";
import { useRandomPokeData } from "../../hook/useRandomPokeData";
import LoadingPage from "../commons/loadingPage";
import { getPokemonSpecies, getPokemon } from "../../libs/axios/pokeAPI";
import { useMutation, useQueryClient } from "react-query";
import { postData } from "../../libs/axios/dataAPI";
import Overlay from "../commons/overlay";
import Modal from "../commons/modal";
import { useNavigate } from "react-router-dom";

type PokeCon = {
    returnLevel1: VoidFunction;
};

/**
 * mainpage 에서 맨처음 컴포넌트
 * author : Wendy, Gang
 * @returns {JSX.Element}
 */

const EncounterPoke = ({ returnLevel1 }: PokeCon) => {
    const [pokeConfirm] = useState<boolean>(false);
    const queryClient = useQueryClient();
    const [catchSuccess, setCatchSuccess] = useState<boolean>(false);
    const navigate = useNavigate();

    const { data, error, isLoading } = useRandomPokeData({
        getPokemonSpecies,
        getPokemon,
    });

    // 포획률 계산
    const captureRate = data?.species?.capture_rate;
    const capturePercent = captureRate
        ? ((captureRate / 255) * 100).toFixed(2)
        : null;

    console.log(data);

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
        setCatchSuccess(false);
        returnLevel1();
    };

    const onRunaway = () => {
        alert("무사히 도망쳤다..!");
        handleNewSession();
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
                setCatchSuccess(true);
                mutate(postPokeData);
            }
        } else {
            alert("포획 실패!");
            handleNewSession();
        }
    };
    return (
        <>
            {catchSuccess && (
                <Overlay
                    isOpen={catchSuccess}
                    onClose={() => setCatchSuccess(false)}
                >
                    <Modal
                        title="포획 성공! 확인하러가기"
                        buttonText="다시하기"
                        onClick={() => handleNewSession()}
                        secondButtonText="가기"
                        onSecondClick={() => navigate("/myinfo")}
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
                                onClick={onRunaway}
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
