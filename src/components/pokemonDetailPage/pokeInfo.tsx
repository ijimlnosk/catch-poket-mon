import LoadingPage from "../commons/loadingPage";
import {
    useGetPokeDetail,
    useGetPokeKorean,
} from "../../hook/useGetPokeDetail";
import TypeButton from "../commons/typeButton";

type PokeType = {
    type: {
        name: string;
    };
};

const PokeInfo: React.FC<{ pokeId: number }> = ({ pokeId }) => {
    const { speciesData, isLoading } = useGetPokeKorean(pokeId);
    const { data } = useGetPokeDetail(pokeId);
    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="w-[80%] h-[250px] flex flex-row justify-center ">
            {speciesData && (
                <div className="w-[300px] h-full  rounded-lg flex flex-col justify-center items-center">
                    <p className="text-lg">{speciesData.names[2].name}</p>
                    {data && (
                        <img
                            src={data.sprites.other.showdown.front_default}
                            className="w-[150px] items-center "
                        />
                    )}
                </div>
            )}
            {data && (
                <div className="w-[50%] h-full bg-POKETYPE-grass rounded-lg flex flex-row p-4">
                    <div className="w-[50%] h-full border-r-2 border-SYSTEM-black">
                        <p className="text-lg">포켓몬 정보</p>
                        <div className="p-4">
                            <p>포켓몬 ID: {data.id}</p>
                            <p>무게 : {data.weight}</p>
                            <p>키 : {data.height}</p>
                            {data.types.map((poke: PokeType, idx) => (
                                <TypeButton key={idx}>
                                    {poke.type.name}
                                </TypeButton>
                            ))}
                        </div>
                    </div>
                    <div className="w-[50%] h-full pl-4">
                        스탯
                        {data.stats.map((item, idx) => (
                            <div key={idx}>
                                {item.stat.name}:{item.base_stat}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokeInfo;
