import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PokeEvolution: React.FC = () => {
    return (
        <div className="w-full h-1/2 grid grid-cols-[1fr_3fr_1fr] ">
            <div className="w-full h-full flex items-center justify-center">
                <BsChevronLeft
                    size={80}
                    className="text-COMMON-light_gray cursor-pointer"
                />
            </div>
            <div className="w-full h-full">{/* 캐릭터 카드 */}</div>
            <div className="w-full h-full flex items-center justify-center">
                <BsChevronRight
                    size={80}
                    className="text-COMMON-light_gray cursor-pointer"
                />
            </div>
        </div>
    );
};
export default PokeEvolution;
