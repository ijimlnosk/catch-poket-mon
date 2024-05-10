import { PokemonData } from "../../types/pokeTypes/pokemonData";

const PokemonCard = ({ pokeId, type, name, url }: PokemonData) => {
    return (
        <div className="w-[200px] h-[200px] bg-SYSTEM-white flex justify-center items-center">
            <div className="w-[200px] h-[200px] flex justify-center items-center rounded-lg">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-full h-[25px] flex justify-center items-center">
                        <p className="text-[20px]">#{pokeId}</p>
                    </div>
                    <img src={url} className="w-[80px] h-[80px]" />
                    <div className="w-full flex justify-center items-center flex-col ">
                        <div className="w-full rounded-xl flex justify-center items-center">
                            {type.map((poke, idx) => (
                                <div key={idx} className="border-2  rounded-lg">
                                    <p>{poke}</p>
                                </div>
                            ))}
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
