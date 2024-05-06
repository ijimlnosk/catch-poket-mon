import PokeEvolution from "../components/pokemonDetailPage/pokeEvolution";
import PokeInfo from "../components/pokemonDetailPage/pokeInfo";

const PoketMonDetailPage: React.FC = () => {
    return (
        <div className="w-full h-[600px] flex items-start justify-center ">
            <div className="w-[90%] h-[500px] flex flex-col items-center justify-center bg-COMMON-dark_gray p-4 ">
                <PokeInfo />
                <PokeEvolution />
            </div>
        </div>
    );
};
export default PoketMonDetailPage;
