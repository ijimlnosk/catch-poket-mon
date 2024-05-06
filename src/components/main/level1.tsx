import unknownPoketMon from "../../assets/imgs/unknown.png";
import { useDispatch, useSelector } from "react-redux";
import { startGame } from "../../libs/redux/gameStartSlice";
import { RootState } from "../../libs/redux/store";
/**
 * mainpage 에서 맨처음 컴포넌트
 * author : Wendy
 * @onGameStart - function - 게임시작을 처리하는 함수
 * @returns {JSX.Element}
 */

type GameStartProps = {
    onGameStart: () => void;
};
const Level1 = ({ onGameStart }: GameStartProps) => {
    const dispatch = useDispatch();
    const gameStart = useSelector(
        (state: RootState) => state.gameStart.gameStart
    );

    const handleGameStart = () => {
        dispatch(startGame());
    };
    const handleNextLevel = () => {
        onGameStart();
    };
    return (
        <>
            {gameStart ? (
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full flex items-center justify-center">
                        <div className="w-[922px] h-[700px] flex justify-center items-center flex-col ">
                            <img src={unknownPoketMon} className="h-[600px]" />
                            <div className="w-[100%] h-[50px] mt-[-10px] text-xl bg-SYSTEM-white text-center  border border-SYSTEM-black rounded-md">
                                앗! 야생 포켓몬이 나타났다!
                            </div>
                        </div>
                    </div>
                    <button
                        className="w-[150px] h-[60px] bg-MAIN-gray"
                        onClick={handleNextLevel}
                    >
                        확인하기
                    </button>
                </div>
            ) : (
                <button
                    className="bg-SYSTEM-white w-[200px] h-[80px] z-50"
                    onClick={handleGameStart}
                >
                    게임 Start
                </button>
            )}
        </>
    );
};
export default Level1;
