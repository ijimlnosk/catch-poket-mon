import { useLocation } from "react-router-dom";
import PokeEvolution from "../components/pokemonDetailPage/pokeEvolution";
import PokeInfo from "../components/pokemonDetailPage/pokeInfo";
import { Pokemon } from "../types/pokeTypes/pokemonData";

const PoketMonDetailPage: React.FC = () => {
    const location = useLocation();
    const selectedPokemon: Pokemon = location.state?.pokemon;
    return (
        <div className="w-full h-[600px] flex items-start justify-center ">
            <div className="w-[90%] h-[500px] flex flex-col items-center justify-center bg-COMMON-dark_gray p-4 ">
                <PokeInfo pokeId={selectedPokemon.data.pokeId} />
            </div>
        </div>
    );
};
export default PoketMonDetailPage;
