/** @type {import('tailwindcss').Config} */

import { COLORS } from "./src/libs/tailwindCss/designToken/color";
import { FONT_SIZE } from "./src/libs/tailwindCss/designToken/fontSize";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ...COLORS,
            },
            fontSize: {
                ...FONT_SIZE,
            },
            backgroundImage:{
                'main-background' : "url('/src/assets/imgs/mainBackground.png')"
            },
        },
        fontFamily: {
            DungGeunMo: ["DungGeunMo"],
        },

    },
    plugins: [],
};
