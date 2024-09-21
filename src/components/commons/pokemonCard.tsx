import { PokemonData } from "../../types/pokeTypes/pokemonData";
import TypeButton from "./typeButton";

const PokemonCard = ({ poke_id, type, name, url, onClick }: PokemonData) => {
    return (
        <div className="w-[200px] h-[200px] bg-SYSTEM-white flex justify-center items-center">
            <div className="w-[200px] h-[200px] flex justify-center items-center rounded-lg">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-full h-[25px] flex justify-center items-center">
                        <p className="text-[20px]">#{poke_id}</p>
                    </div>
                    <img
                        src={url}
                        className="w-[80px] h-[80px] cursor-pointer"
                        onClick={onClick}
                    />
                    <div className="w-full flex justify-center items-center flex-col ">
                        <div className="w-full rounded-xl flex justify-center items-center">
                            {type &&
                                type.map(
                                    (poke, idx) =>
                                        poke && (
                                            <TypeButton
                                                pokeType={poke}
                                                size="tiny"
                                                key={idx}
                                            >
                                                {poke}
                                            </TypeButton>
                                        )
                                )}
                        </div>
                        <div className="w-full flex justify-center items-center">
                            <p>{name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PokemonCard;
