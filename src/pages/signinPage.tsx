import { useEffect, useRef, useState } from "react";
import SigninForm from "../components/signin/signinForm";
import SigninScreen from "../components/signin/signinScreen";

/**
 * signin page
 * author : kimjinsol
 * @returns {}
 */

const SigninPage = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
    const transitionRef = useRef<HTMLDivElement>(null);

    const handleSections = () => {
        setShowLoginForm(false);
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    useEffect(() => {
        const ref = transitionRef.current;
        if (ref) {
            const handleTransition = () => {
                if (!isOpen) {
                    setShowLoginForm(true);
                }
            };
            ref.addEventListener("transitionend", handleTransition);
            return () => {
                ref.removeEventListener("transitionend", handleTransition);
            };
        }
    }, [isOpen]);

    return (
        <SigninScreen
            isOpen={isOpen}
            transitionRef={transitionRef}
            handleSections={handleSections}
            showLoginForm={showLoginForm}
        >
            <SigninForm />
        </SigninScreen>
    );
};
export default SigninPage;
