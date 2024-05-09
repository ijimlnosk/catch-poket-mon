import { z } from "zod";

export const Schema = z.object({
    userId: z.string().min(1, { message: "ID를 입력해주세요" }).optional(),
    password: z
        .string()
        .regex(/^(?=.*[!@#$%^&*])(.{8,})$/, {
            message: "특수문자를 하나 이상 포함해주세요",
        })
        .min(8, { message: "8글자 이상 입력해주세요" })
        .optional(),
});
