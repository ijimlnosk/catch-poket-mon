import UserInfo from "../components/myinfo/userInfo";
import ProfileChange from "../components/myinfo/profileChange";
import PokemonBasket from "../components/myinfo/pokemonBasket";
import { getSessionUserInfo } from "../utils/storageUtils";
import { useQuery } from "react-query";
import { getData } from "../libs/axios/dataAPI";
import LoadingPage from "../components/commons/loadingPage";

const MyInfoPage = () => {
    const userInfo = getSessionUserInfo();

    const { data, error, isLoading, isFetching } = useQuery(
        ["pokemon", 1, 3],
        () => getData(1, 3),
        {
            keepPreviousData: true,
        }
    );

    if (isLoading || isFetching) return <LoadingPage />;
    if (error) return <div>error</div>;
    if (!data) return <div>no data</div>;

    return (
        <div className="w-full bg-MAIN-purple flex items-center justify-cneter flex-col pb-8">
            <div className="w-full p-[20px] flex items-center justify-center flex-row">
                <ProfileChange />
                <UserInfo
                    nickName={userInfo.nickName}
                    userId={userInfo.userId}
                />
            </div>
            <PokemonBasket data={data} />
        </div>
    );
};
export default MyInfoPage;
