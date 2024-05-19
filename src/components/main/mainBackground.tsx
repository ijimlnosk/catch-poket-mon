import { ReactNode } from "react";

const MainBackgorund = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <div className="bg-MAIN-yellow h-[700px] flex justify-center items-center w-full lg:h-[800px]">
                <div className="bg-main-background w-2/3 h-[500px] lg:h-[600px] bg-auto bg-no-repeat bg-center flex items-center justify-center ">
                    {children}
                </div>
            </div>
        </>
    );
};
export default MainBackgorund;
