import Skeleton from "react-loading-skeleton";

const SkeletonPokedex = () => {
    return (
        <div className="pokemon-card">
            <div className="pokemon-image">
                <Skeleton height={150} />
            </div>
            <div className="pokemon-details">
                <Skeleton height={20} width={100} />
                <Skeleton height={20} width={80} />
                <Skeleton height={20} width={60} />
            </div>
        </div>
    );
};

export default SkeletonPokedex;
