

export const COLORS = {
    SYSTEM: {
        red: "#D93E30",
        black: "#212121",
        white: "#FBFBFB",
    },
    MAIN: {
        purple: "#E4DAFF",
        yellow: "#FFF9C0",
        gray: "#D9D9D9",
    },
    COMMON: {
        red: "#C5312A", //포켓몬볼 색
        dark_gray: "#807E7E", //네비바 호버시
        light_gray: "#e0e0e0", //버튼클릭시
    },
    POKETYPE: {
        rock: "#A1A1A150",
        grass: "#70A83B50",
        ice: "#96D9D650",
        fire: "#F7654550",
        normal: "#A8A77A50",
        poison: "#A974BC50",
        ground: "#9B897B50",
        electric: "#F7C54550",
        flying:"#A2CFF050",
        water:"#6390F050",
        steel:"#B7B7CE50",
        ghost:"#73579750",
        bug:"#A6B91A50",
        dragon:"#6F35FC50",
        dark:"#70574650",
        fairy:"#D685AD50",
        psychic:"#F9558750",
        fighting:"#C22E2850",
        shadow:"#604E8550",
        unknown:"#6A6A6A50"

    },
} as const;

// 디테일 페이지에서 포켓몬 정보 배경색 바꾸기 위한 함수
export const getBackgroundColor = (type: keyof typeof COLORS["POKETYPE"]) => {
    return COLORS.POKETYPE[type] || COLORS.COMMON.red;
};

