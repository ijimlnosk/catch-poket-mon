/**
 * mainpage 에서 맨처음 컴포넌트
 * author : Wendy, Gang
 * @returns {JSX.Element}
 */

import { useState } from "react";
import { useRandomPokeData } from "../../hook/useRandomPokeData";
import LoadingPage from "../commons/loadingPage";
import { getPokemonSpecies, getPokemon } from "../../libs/axios/pokeAPI";
import { useQueryClient } from "react-query";

type PokeCon = {
    returnLevel1: VoidFunction;
};

const EncounterPoke = ({ returnLevel1 }: PokeCon) => {
    const [pokeConfirm] = useState<boolean>(false);
    const queryClient = useQueryClient();

    const { data, error, isLoading } = useRandomPokeData({
        getPokemonSpecies,
        getPokemon,
    });

    const captureRate = data?.species?.capture_rate;
    const capturePercent = captureRate
        ? ((captureRate / 255) * 100).toFixed(2)
        : null;

    console.log(data);

    if (isLoading) return <LoadingPage />;
    if (error) return <div>error</div>;

    const handleNewSession = () => {
        queryClient.invalidateQueries("pokeData");
        returnLevel1();
    };

    const onRunaway = () => {
        alert("무사히 도망쳤다..!");
        handleNewSession();
    };
    const onCatchPoketMon = () => {
        alert("포획성공");
        handleNewSession();
    };
    return (
        <>
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
