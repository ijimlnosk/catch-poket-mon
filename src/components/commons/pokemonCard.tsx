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
        <div className="">
            <div className="">
                <div>
                    <p>#{pokeId}</p>
                </div>
                <img src={url} />
                <div>
                    <div>
                        {type.map((poke, idx) => (
                            <p key={idx}>{poke}</p>
                        ))}
                    </div>
                    <div>
                        <p>{name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PokemonCard;
