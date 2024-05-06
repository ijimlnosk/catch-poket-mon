/**
 * mainpage 에서 맨처음 컴포넌트
 * author : Wendy
 * @returns {JSX.Element}
 */

import { useState } from "react";
import examplePoketMon from "../../assets/imgs/examplePoke.png";
import Level1 from "./startPoke";

type PokeCon = {
    returnLevel1: VoidFunction;
};

const EncounterPoke = ({ returnLevel1 }: PokeCon) => {
    const [pokeConfirm] = useState<boolean>(false);

    const onRunaway = () => {
        alert("무사히 도망쳤다..!");
        returnLevel1();
        return <Level1 onGameStart={() => {}} />;
    };
    const onCatchPoketMon = () => {
        alert("포획성공");
        returnLevel1();
        return <Level1 onGameStart={() => {}} />;
    };
    return (
        <>
            <div className="flex flex-col">
                {!pokeConfirm && (
                    <div className="absolutes">
                        <div className="w-full flex items-center justify-center">
                            <div className="w-[922px] h-[700px] flex justify-center items-center flex-col  ">
                                <div className=" mr-[-770px] mb-[-35px]">
                                    <p className=" text-lg">포획률 : 100%</p>
                                </div>

                                <div className="h-[600px] flex items-center ">
                                    <img
                                        src={examplePoketMon}
                                        className="h-[220px] "
                                    />
                                </div>
                                <div className="w-[100%] h-[50px] mt-[-10px] text-xl bg-SYSTEM-white text-center  border border-SYSTEM-black rounded-md">
                                    앗! 야생 name 이 나타났다!
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
