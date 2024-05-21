import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import monsterball from "../../assets/imgs/monsterball.png";
import { useQueryClient } from "react-query";

/**
 * header
 * author : wendy
 * @returns {JSX.Element}
 */

const Header = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const onMoveMyInfo = () => {
        navigate("/myInfo");
        queryClient.invalidateQueries("pokemon");
    };
    const onClickLogo = () => {
        navigate("/");
        queryClient.invalidateQueries("pokeData");
    };
    const onMovePokedex = () => {
        navigate("/pokedex");
    };
    return (
        <header className="flex items-center justify-between p-4  bg-SYSTEM-whte h-[140px] w-[100%]">
            <div
                className="flex items-center space-x-4 flex-grow cursor-pointer"
                onClick={onClickLogo}
            >
                <img src={monsterball} className="h-12" />
                <img src={logo} className="h-12" />
            </div>
            <nav>
                <ul className="flex space-x-4 flex-grow p-6 ">
                    <li
                        className="text-SYSTEM-red text-bg hover:text-SYSTEM-black hover:cursor-pointer"
                        onClick={onMovePokedex}
                    >
                        포켓몬도감
                    </li>
                    <li
                        className="text-COMMON-dark_gray text-bg hover:text-SYSTEM-black hover:cursor-pointer "
                        onClick={onMoveMyInfo}
                    >
                        마이페이지
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
