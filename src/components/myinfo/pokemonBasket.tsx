import { Pokemon } from "../../types/pokeTypes/pokemonData";
import PokemonCard from "../commons/pokemonCard";

type PokemonBasketProps = {
    data: {
        data: Pokemon[];
    };
};

const PokemonBasket = ({ data }: PokemonBasketProps) => {
    return (
        <div className="w-full p-[20px] flex items-center justify-center flex-col ">
            <div className="w-[57%] bg-SYSTEM-white rounded-xl flex items-center justify-center flex-col pb-8">
                <div className="w-full flex justify-center flex-col items-center pt-4 ">
                    <p className="text-xl  p-2 rounded-xl ">포켓몬 장바구니</p>
                    <div className="w-full flex justify-end ">
                        <p className="text-lg p-8">최대 30마리</p>
                    </div>
                </div>
                <div className="w-[90%] h-[600px] overflow-y-auto border-2 border-COMMON-light-gray rounded-xl grid grid-cols-1 bg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.data.map((poke, idx) => (
                        <div className="flex justify-center" key={idx}>
                            <PokemonCard
                                pokeId={poke.data.pokeId}
                                name={poke.data.name}
                                type={poke.data.type}
                                url={poke.data.url}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default PokemonBasket;
