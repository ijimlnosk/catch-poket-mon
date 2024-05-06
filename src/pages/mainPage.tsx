import { useState } from "react";

import MainBackgorund from "../components/main/mainBackground";
import Level1 from "../components/main/level1";
import Level2 from "../components/main/level2";

type StepType = "level-1" | "level-2" | "level-3" | "level-3";

const MainPage = () => {
    const [step, setStep] = useState<StepType>("level-1");
    const returnLevel1 = () => {
        setStep("level-1");
    };
    const onGameStart = () => {
        setStep("level-2");
    };
    const onPokeConfirm = () => {
        setStep("level-3");
    };
    switch (step) {
        case "level-1":
            return (
                <MainBackgorund>
                    <Level1 onGameStart={onGameStart} />
                </MainBackgorund>
            );
        case "level-2":
            return (
                <MainBackgorund>
                    <Level2
                        onPokeConfirm={onPokeConfirm}
                        returnLevel1={returnLevel1}
                    />
                </MainBackgorund>
            );
    }
};

export default MainPage;
