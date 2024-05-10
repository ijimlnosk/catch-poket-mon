import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../../libs/tailwindCss/tailwindUtils";

/**
 * TypeButton Component
 * author: Wendy
 * @property {string} [variant] - 버튼의 스타일 변형 (common, whiteButton 등)
 * @property {string} [shape] - 버튼의 모양 (roundedSquare, full 등)
 * @property {string} [size] - 버튼의 크기 (tiny, small, medium, large, xlarge 등)
 * @property {React.ReactNode} [children] - 버튼 내용
 * @property {...ButtonHTMLAttributes<HTMLButtonElement>} [...props] - HTML 버튼 속성
 */

export const TypeButtonVariants = cva(
    `
     active:scale-95  w-fit h-fit rounded-full
    `,
    {
        variants: {
            pokeType: {
                rock: "bg-POKETYPE-rock  text-SYSTEM-black",
                grass: "bg-POKETYPE-grass",
                ice: "bg-POKETYPE-ice",
                fire: "bg-POKETYPE-fire",
                normal: "bg-POKETYPE-normal",
                poison: "bg-POKETYPE-poison",
                ground: "bg-POKETYPE-ground",
                electric: "bg-POKETYPE-electric",
                flying: "bg-POKETYPE-flying",
                water: "bg-POKETYPE-water",
                steel: "bg-POKETYPE-steel",
                ghost: "bg-POKETYPE-ghost",
                bug: "bg-POKETYPE-bug",
                dragon: "bg-POKETYPE-dragon",
                dark: "bg-POKETYPE-dark",
                fairy: "bg-POKETYPE-fairy",
                psychic: "bg-POKETYPE-psychic",
                fighting: "bg-POKETYPE-fighting",
                shadow: "bg-POKETYPE-shadow",
                unknown: "bg-POKETYPE-unknown",
            },
            size: {
                xtiny: "text-md ",
                tiny: "text-sm w-[70px] ", //포켓몬 장바구니용
                small: "text-md  px-5",
            },
        },
        defaultVariants: {
            pokeType: "unknown",
            size: "small",
        },
    }
);
interface TypeButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof TypeButtonVariants> {
    pokeType?:
        | "rock"
        | "grass"
        | "ice"
        | "fire"
        | "normal"
        | "poison"
        | "ground"
        | "electric"
        | "flying"
        | "water"
        | "steel"
        | "ghost"
        | "bug"
        | "dragon"
        | "dark"
        | "fairy"
        | "psychic"
        | "fighting"
        | "shadow"
        | "unknown"
        | null
        | undefined;
    children?: React.ReactNode;
}

const TypeButton: React.FC<TypeButtonProps> = ({
    pokeType,
    size,
    children,
    ...props
}: TypeButtonProps) => {
    return (
        <button
            className={cn(TypeButtonVariants({ pokeType, size }))}
            {...props}
        >
            {children}
        </button>
    );
};
export default TypeButton;
