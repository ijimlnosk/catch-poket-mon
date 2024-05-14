import PokeInfo from "../components/pokemonDetailPage/pokeInfo";
import { Pokemon } from "../types/pokeTypes/pokemonData";

const PoketMonDetailPage: React.FC<Pokemon> = ({ poke }) => {
    return (
        <div className="w-full h-[500px] flex items-start justify-center ">
            <div className="w-full h-[290px] flex flex-col items-center justify-center bg-white p-4 ">
                <PokeInfo pokeId={poke.data.pokeId} />
            </div>
        </div>
    );
};
export default PoketMonDetailPage;
