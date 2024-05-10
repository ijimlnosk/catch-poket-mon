type PokeMon = {
    pokeId: number;
    type: string[];
    name: string;
    url: string;
};

const PokemonCard = ({ pokeId, type, name, url }: PokeMon) => {
    return (
        <div className="w-[200px] h-[200px] bg-SYSTEM-white flex justify-center items-center">
            <div className="w-[200px] h-[200px] flex justify-center items-center rounded-lg">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-full h-[25px] flex justify-center items-center">
                        <p className="text-[25px]">#{pokeId}</p>
                    </div>
                    <img src={url} className="w-[100px] h-[100px]" />
                    <div className="w-full flex justify-center items-center flex-col ">
                        <div className="w-full rounded-xl flex justify-center items-center">
                            {type.map((poke, idx) => (
                                <div className="border-2 rounded-lg">
                                    <p key={idx}>{poke}</p>
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
