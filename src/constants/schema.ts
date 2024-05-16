import { z } from "zod";

export const SigninSchema = z.object({
    userId: z.string().min(1, { message: "ID를 입력해주세요" }).optional(),
    password: z
        .string()
        .regex(/^(?=.*[!@#$%^&*])(.{8,})$/, {
            message: "특수문자 포함 8글자 이상 입력해주세요",
        })
        .min(8)
        .optional(),
});

export const SignupSchema = z.object({
    userId: z.string().min(1, { message: "ID를 입력해주세요" }).optional(),
    password: z
        .string()
        .regex(/^(?=.*[!@#$%^&*])(.{8,})$/, {
            message: "특수문자 포함 8글자 이상 입력해주세요",
        })
        .min(8)
        .optional(),
    data: z.object({
        nickName: z
            .string()
            .min(1, { message: "닉네임을 입력해주세요" })
            .max(6, { message: "최대 6글자까지 입력 가능합니다" }),
    }),
});
