import { useForm } from "react-hook-form";
import CustomButton from "../commons/button";
import Input from "../commons/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninSchema } from "../../constants/schema";
import { useSigninMutation } from "../../hook/useSignin";
import logo from "../../assets/imgs/logo.png";
import { useNavigate } from "react-router-dom";
import Modal from "../commons/modal";
import { UserRequest } from "../../libs/axios/userAPI";

const SigninForm = () => {
    const { mutate, isOpen, toggleModal, modalContent } = useSigninMutation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserRequest>({
        resolver: zodResolver(SigninSchema),
    });

    const onSubmit = (data: UserRequest) => {
        mutate(data);
    };
    const handleNavSignup = () => {
        navigate("/signup");
    };
    return (
        <div className="w-[400px]  flex items-center justify-center flex-col pb-20 rounded-xl">
            <div>
                <img src={logo} />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center flex-col">
                    <label className="pt-7">ID</label>
                    <Input
                        name="userId"
                        placeholder="아이디를 입력하세요"
                        className="border-2 border-COMMON-light-gray p-2 "
                        register={register}
                        errors={errors}
                    />
                    <label className="pt-7">Password</label>
                    <Input
                        name="password"
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        className="border-2 border-COMMON-light-gray p-2 "
                        register={register}
                        errors={errors}
                    />
                    <div className="pt-[15px]">
                        <CustomButton
                            variant="common"
                            size="small"
                            shape="roundedSquare"
                        >
                            로그인
                        </CustomButton>
                    </div>
                </div>
            </form>
            <Modal
                title={modalContent}
                isOpen={isOpen}
                onClick={toggleModal}
                onClose={toggleModal}
                buttonText="확인"
            />

            <div className="flex flex-row">
                <p className="p-4 text-ti text-POKETYPE-rock">
                    아직도 회원이 아니신가요?
                </p>
                <button onClick={handleNavSignup} className="text-ti">
                    가입하러가기
                </button>
            </div>
        </div>
    );
};
export default SigninForm;
