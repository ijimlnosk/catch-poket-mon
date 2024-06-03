/**
 * footer
 * author : Wendy
 * @returns {JSX.Element}
 */

const Footer = () => {
    return (
        <footer className="bg-SYSTEM-white text-SYSTEM-black py-4 text-center fixed bottom-0 w-full">
            <div className="container mx-auto">
                <p>&copy; Catch PoketMon 'in your poke'</p>
                <p>
                    Team Project |
                    <a
                        href="https://github.com/mobi-projects/mobi-3rd-2-typescript"
                        className="ml-1 text-POKETYPE-normal hover:underline"
                        target="_blank"
                    >
                        GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
};
export default Footer;
