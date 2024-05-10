type PokeMon = {
    pokeId: number;
    type: string[];
    name: string;
    url: string;
    background: string;
};

const PokemonCard = ({ pokeId, type, name, url, background }: PokeMon) => {
    console.log(background);
    return (
        <div className="w-[300px] h-[300px] bg-SYSTEM-white flex justify-center items-center">
            <div className="w-[250px] h-[250px] flex justify-center items-center rounded-lg bg-COMMON-dark_gray">
                <div className="w-full flex justify-center items-center flex-col">
                    <div className="w-full h-[25px] flex justify-center items-center">
                        <p className="text-[25px]">#{pokeId}</p>
                    </div>
                    <img src={url} className="w-[160px] h-[160px]" />
                    <div className="w-full flex justify-center items-center flex-col ">
                        <div className="w-full rounded-xl flex justify-center items-center">
                            {type.map((poke, idx) => (
                                <p key={idx}>{poke}</p>
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
