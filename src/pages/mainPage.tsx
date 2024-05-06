import { useState } from "react";

import MainBackgorund from "../components/main/mainBackground";
import StartPoke from "../components/main/startPoke";
import EncounterPoke from "../components/main/encounterPoke";

type StepType = "level-1" | "level-2";

const MainPage = () => {
    const [step, setStep] = useState<StepType>("level-1");
    const returnLevel1 = () => {
        setStep("level-1");
    };
    const onGameStart = () => {
        setStep("level-2");
    };
    switch (step) {
        case "level-1":
            return (
                <MainBackgorund>
                    <StartPoke onGameStart={onGameStart} />
                </MainBackgorund>
            );
        case "level-2":
            return (
                <MainBackgorund>
                    <EncounterPoke returnLevel1={returnLevel1} />
                </MainBackgorund>
            );
    }
};

export default MainPage;
