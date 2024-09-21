import PokeInfo from "../components/pokemonDetailPage/pokeInfo";
import { PokemonData } from "../types/pokeTypes/pokemonData";

interface PokeType {
    poke: PokemonData;
}

const PoketMonDetailPage: React.FC<PokeType> = ({ poke }) => {
    return (
        <div className="w-full h-[300px] flex items-start justify-center ">
            <div className="w-full h-full flex flex-col items-center justify-center bg-white p-4 ">
                <PokeInfo pokeId={poke.poke_id} />
            </div>
        </div>
    );
};
export default PoketMonDetailPage;
