import { useState } from "react";
import {
    PokeDetails,
    usePokeDataInfinite,
} from "../../hook/usePokedexInfinity";
import { getPokemon, getPokemonSpecies } from "../../libs/axios/pokeAPI";
import { Pokemon } from "../../types/pokeTypes/pokemonData";
import LoadingPage from "../commons/loadingPage";
import PokemonCard from "../commons/pokemonCard";
import Overlay from "../commons/overlay";
import PoketMonDetailPage from "../../pages/poketMonDetailPage";
import convertToPokemon, {
    formatType,
} from "../../utils/pokedexConvertToPokemon";
import { useInView } from "react-intersection-observer";

const PokemonInfiniteList = () => {
    const {
        data,
        error,
        fetchNextPage, // 다음페이지의 데이터가져옴
        hasNextPage, // 다음페이지가 있는지 여부를 나타내는 불리언
        isFetchingNextPage, // 다음페이지 데이터를 가져오는 중인지 여부를 나타내는 불리언
        status,
    } = usePokeDataInfinite({
        getPokemonSpecies: getPokemonSpecies,
        getPokemon: getPokemon,
    });
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(
        null
    );
    const [isOpen, setIsOpen] = useState(false);
    const toggleOverlay = () => setIsOpen(!isOpen);

    const handlePokeClick = (pokeDetail: PokeDetails) => {
        const poke = convertToPokemon(pokeDetail);
        setSelectedPokemon(poke);
        toggleOverlay();
    };

    const { ref } = useInView({
        threshold: 0.5,
        onChange: (inView: boolean) => {
            if (inView && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        },
    });
    if (status === "loading") return <LoadingPage />;
    if (status === "error" && error instanceof Error)
        return <div>Error: {error.message}</div>;
    return (
        <div>
            <h1 className="text-lg ">포켓몬 도감</h1>
            <div>
                <div className="w-full h-[600px]  grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-3">
                    {data?.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="contents">
                            {page?.map((poke, idx) => {
                                const isLastElement =
                                    pageIndex === data.pages.length - 1 &&
                                    idx === page.length - 1;
                                return (
                                    <div
                                        key={idx}
                                        className="flex justify-center items-center"
                                        ref={isLastElement ? ref : null}
                                    >
                                        <PokemonCard
                                            key={poke.pokemon.id}
                                            pokeId={poke.pokemon.id}
                                            name={poke.species.names[2].name}
                                            type={formatType(
                                                poke.pokemon.types
                                            )}
                                            url={
                                                poke?.pokemon.sprites.other
                                                    .showdown.front_default
                                            }
                                            onClick={() =>
                                                handlePokeClick(poke)
                                            }
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                <div>{isFetchingNextPage && <LoadingPage />}</div>
                {isOpen && (
                    <Overlay
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        widthCss={"max-w-3xl"}
                        heightCss={"h-1/2"}
                    >
                        {selectedPokemon && (
                            <PoketMonDetailPage poke={selectedPokemon} />
                        )}
                    </Overlay>
                )}
            </div>
        </div>
    );
};
export default PokemonInfiniteList;
