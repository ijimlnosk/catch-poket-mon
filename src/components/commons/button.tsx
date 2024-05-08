import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../libs/tailwindCss/tailwindUtils";

/**
 * Button Component
 * author: Wendy
 * @property {string} [variant] - 버튼의 스타일 변형 (common, whiteButton 등)
 * @property {string} [shape] - 버튼의 모양 (roundedSquare, full 등)
 * @property {string} [size] - 버튼의 크기 (tiny, small, medium, large, xlarge 등)
 * @property {React.ReactNode} [children] - 버튼 내용
 * @property {...ButtonHTMLAttributes<HTMLButtonElement>} [...props] - HTML 버튼 속성
 */

export const ButtonVariants = cva(
    `
     active:scale-95  w-fit h-fit
    `,
    {
        variants: {
            variant: {
                common: "bg-MAIN-gray text-SYSTEM-black ",
                whiteButton: "bg-SYSTEM-white text-SYSEM-black",
            },
            shape: {
                roundedSquare: "rounded-md",
                full: "rounded-full",
            },
            size: {
                tiny: "text-sm ",
                small: "text-sm  px-24",
                medium: "text-md py-4 px-6",
                large: "text-bg py-3 px-8",
                xlarge: "text-lg py-4 px-10",
            },
        },
        defaultVariants: {
            variant: "common",
            shape: "roundedSquare",
            size: "medium",
        },
    }
);
interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>, //button요소에서 사용되는 속성들 포함
        VariantProps<typeof ButtonVariants> {
    children?: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({
    variant,
    shape,
    size,
    children,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(ButtonVariants({ variant, shape, size }))}
            {...props}
        >
            {children}
        </button>
    );
};
export default CustomButton;
