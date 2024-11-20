import { PokemonData } from "../../types/pokeTypes/pokemonData";
import PokemonCard from "../commons/pokemonCard";
import CustomButton from "../commons/button";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { useState } from "react";
import PokeReleaseButton from "./pokeReleaseButton";
import Overlay from "../commons/overlay";
import PoketMonDetailPage from "../../pages/poketMonDetailPage";

type PokemonBasketProps = {
    data: PokemonData[] | undefined;
};

const PokemonBasket = ({ data }: PokemonBasketProps) => {
    const [selectedPokemon, setSelectedPokemon] = useState<PokemonData | null>(
        null
    );
    const [isOpen, setIsOpen] = useState(false);
    const toggleOverlay = () => setIsOpen(!isOpen);

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const handleMoreCatch = () => {
        navigate("/");
        queryClient.invalidateQueries("pokeData");
    };
    const handlePokeClick = (poke: PokemonData) => {
        setSelectedPokemon(poke);
        toggleOverlay();
    };

    const pokemonData = data || [];

    return (
        <div className="w-full p-[20px] flex items-center justify-center flex-col ">
            <div className="w-full max-w-[940px] bg-SYSTEM-white rounded-xl flex items-center justify-center flex-col pb-8 ">
                <div className="w-full flex justify-center flex-col items-center pt-4 ">
                    <p className="text-xl  p-2 rounded-xl ">포켓몬 장바구니</p>
                    <div className="w-full flex justify-end">
                        <p className="text-lg p-8 pr-[7.5%]">최대 30마리</p>
                    </div>
                    <div className="w-full flex justify-start items-center pl-[7.5%] pb-2">
                        <CustomButton
                            variant={"common"}
                            shape={"roundedSquare"}
                            size={"small"}
                            onClick={handleMoreCatch}
                        >
                            더 잡으러가기
                        </CustomButton>
                    </div>
                </div>
                <div className="max-w-[90%] h-[600px] overflow-y-auto border-2 border-COMMON-light-gray rounded-xl grid grid-cols-1 ti:grid-cols-2 sm:grid-cols-3 bg:grid-cols-4">
                    {pokemonData.length > 0 ? (
                        pokemonData.map((poke, idx) => (
                            <div
                                className="flex justify-center items-center flex-col"
                                key={idx}
                            >
                                <PokemonCard
                                    id={poke.id}
                                    poke_id={poke.poke_id || 0}
                                    name={poke.name}
                                    type={poke.type}
                                    url={poke.url}
                                    onClick={() => handlePokeClick(poke)}
                                />
                                <PokeReleaseButton poke={poke} />

                                <Overlay
                                    isOpen={isOpen}
                                    onClose={() => setIsOpen(false)}
                                    widthCss={"max-w-3xl"}
                                    heightCss={"h-[300px]"}
                                >
                                    {selectedPokemon && (
                                        <PoketMonDetailPage
                                            poke={selectedPokemon}
                                        />
                                    )}
                                </Overlay>
                            </div>
                        ))
                    ) : (
                        <p>포켓몬 데이터를 불러오지 못했습니다.</p>
                    )}
                </div>
            </div>
        </div>
    );
};
export default PokemonBasket;
