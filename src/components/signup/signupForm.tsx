import { useForm } from "react-hook-form";
import { useSignupMutation } from "../../hook/useSignup";
import CustomButton from "../commons/button";
import Input from "../commons/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema } from "../../constants/schema";
import logo from "../../assets/imgs/logo.png";

interface FormValues {
    userId: string;
    password: string;
    nickname: string;
}
const SignupForm = () => {
    const mutation = useSignupMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(SignupSchema),
    });
    const onSubmit = (data: FormValues) => {
        mutation.mutate(data);
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
                    <label className="pt-5">Nickname</label>
                    <Input
                        name="nickname"
                        placeholder="닉네임을 입력하세요"
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
        </div>
    );
};
export default SignupForm;
