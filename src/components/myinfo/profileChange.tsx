import { BsPlusLg } from "react-icons/bs";

const ProfileChange = () => {
    return (
        <div className="w-[300px] h-[300px] flex flex-col ">
            <div className="h-[260px] bg-SYSTEM-white rounded-xl flex justify-center items-center">
                <BsPlusLg size={150} color="#ccc" />
            </div>
            <button className="p-4">프로필 변경</button>
        </div>
    );
};
export default ProfileChange;
