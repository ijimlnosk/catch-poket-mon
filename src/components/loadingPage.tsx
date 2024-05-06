import ball from "../assets/imgs/ball.png";

const LoadingPage: React.FC = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center space-y-8">
            <div>
                <p className="text-lg font-semibold">로딩중...</p>
            </div>
            <div className="w-[200px] h-[200px] relative">
                <img src={ball} className="animate-roll" alt="loading..." />
            </div>
        </div>
    );
};
export default LoadingPage;
