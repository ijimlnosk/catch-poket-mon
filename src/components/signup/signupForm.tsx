import { useForm } from "react-hook-form";
import { useSignupMutation } from "../../hook/useSignup";
import CustomButton from "../commons/button";
import Input from "../commons/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "../../constants/schema";
import logo from "../../assets/imgs/logo.png";
import { SignupRequest } from "../../libs/axios/userAPI";
import Modal from "../commons/modal";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
    const navigate = useNavigate();
    const { mutate, isOpen, toggleModal, modalContent, isSuccess } =
        useSignupMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupRequest>({
        resolver: zodResolver(SignupSchema),
    });
    const onSubmit = (data: SignupRequest) => {
        mutate(data);
    };
    const handleModalClose = () => {
        toggleModal();
        if (isSuccess) {
            navigate("/signin"); // 성공했을 때 로그인 페이지로 이동
        }
    };
    return (
        <div className="w-[400px] h-[400px] flex items-center justify-center flex-col rounded-xl">
            <div>
                <img src={logo} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center justify-center flex-col">
                    <label className="pt-5">ID</label>
                    <Input
                        name="userId"
                        placeholder="아이디를 입력하세요"
                        register={register}
                        errors={errors}
                    />
                    <label className="pt-5">Password</label>
                    <Input
                        name="password"
                        placeholder="비밀번호를 입력하세요"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                    <label className="pt-5">NickName</label>
                    <Input
                        name="data.nickName"
                        placeholder="닉네임을 입력해주세요"
                        register={register}
                        errors={errors}
                    />
                    <div className="pt-[15px]">
                        <CustomButton
                            variant="common"
                            shape="roundedSquare"
                            size="small"
                        >
                            가입하기
                        </CustomButton>
                    </div>
                </div>
            </form>
            <Modal
                title={modalContent}
                isOpen={isOpen}
                onClose={toggleModal}
                onClick={handleModalClose}
                buttonText="확인"
            />
        </div>
    );
};
export default SignupForm;
