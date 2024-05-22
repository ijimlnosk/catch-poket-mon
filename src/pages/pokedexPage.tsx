import PokedexList from "../components/pokedex/pokedexList";
import SkeletonPokedex from "../libs/skeleton/pokedexSkeleton";

const PokedexPage = () => {
    return (
        <>
            <PokedexList />
            <SkeletonPokedex />
        </>
    );
};
export default PokedexPage;
