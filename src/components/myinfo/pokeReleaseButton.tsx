import { useState } from "react";
import { Pokemon } from "../../types/pokeTypes/pokemonData";
import { deleteData } from "../../libs/axios/dataAPI";
import { useQueryClient } from "react-query";
import CustomButton from "../commons/button";
import Modal from "../commons/modal";

type PokemonReleaseButtonProps = {
    poke: Pokemon;
};

interface ModalState {
    message: string;
    buttonText: string;
    buttonAction: () => void;
}

const PokeReleaseButton = ({ poke }: PokemonReleaseButtonProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalState, setModalState] = useState<ModalState>({
        message: "",
        buttonText: "놓아준다",
        buttonAction: () => {},
    });
    const queryClient = useQueryClient();

    const handleDeletePoke = async () => {
        try {
            await deleteData(poke.id);
            queryClient.setQueryData<Pokemon[]>("pokeData", (oldData) => {
                return oldData ? oldData.filter((p) => p.id !== poke.id) : [];
            });
            setModalState({
                message: "포켓몬을 놓아주었습니다!",
                buttonText: "확인",
                buttonAction: closeConfirmModal,
            });
        } catch (error) {
            setModalState({
                message: "놓아주던 중 문제가 발생했습니다!",
                buttonText: "확인",
                buttonAction: closeConfirmModal,
            });
        }
        setIsModalOpen(true);
    };

    const openConfirmModal = () => {
        setModalState({
            message: "이 포켓몬을 놓아주시겠습니까?",
            buttonText: "놓아준다",
            buttonAction: handleDeletePoke,
        });
        setIsModalOpen(true);
    };

    const closeConfirmModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <CustomButton
                variant={"common"}
                size={"small"}
                shape={"roundedSquare"}
                onClick={openConfirmModal}
            >
                놓아주기
            </CustomButton>
            <Modal
                title={modalState.message}
                buttonText={modalState.buttonText}
                onClick={modalState.buttonAction}
                secondButtonText={
                    isModalOpen && modalState.buttonText === "놓아준다"
                        ? "취소"
                        : undefined
                }
                onSecondClick={closeConfirmModal}
                isOpen={isModalOpen}
                onClose={closeConfirmModal}
            />
        </>
    );
};

export default PokeReleaseButton;
