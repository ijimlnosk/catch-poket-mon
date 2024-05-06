const PokeInfo: React.FC = () => {
    return (
        <div className="w-[80%] h-[250px] flex flex-row justify-center">
            <div className="w-[300px] h-full rounded-lg flex flex-col justify-center items-center ">
                <p className="text-lg">#pokeId</p>
                <p className="text-lg">#pokeName</p>
                <img
                    src="https://i.ibb.co/cQbSy50/image-11.png"
                    className="w-[200px]"
                />
            </div>
            <div className="w-[50%] h-full bg-POKETYPE-grass rounded-lg flex flex-row p-4 ">
                <div className="w-[50%] h-full border-r-2 border-SYSTEM-black">
                    <p>기본 정보</p>
                    <div className="p-4">
                        <p>키 : </p>
                        <p>무게 : </p>
                        <p>능력치 : </p>
                        <p>타입 : </p>
                    </div>
                </div>
                <div className="w-[50%] h-full pl-4">
                    스탯
                    <div className=" w-[full] h-[200px] flex justify-center items-center">
                        스탯
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PokeInfo;
