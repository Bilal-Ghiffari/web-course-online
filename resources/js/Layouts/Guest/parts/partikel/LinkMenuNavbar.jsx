import { UserMenu } from "@/Layouts/Authenticated/partikelGlobal/LinkMenuNavbar";
import MenuListLinkNavbar from "@/Layouts/Authenticated/partikelGlobal/MenuListLinkNavbar";

export default function LinkMenuNavbar({ toggleMainMenu, setToggleMainMenu }) {
    return (
        <nav
            className={`navigation lg:mr-auto lg:flex flex-col text-base justify-center z-50 fixed top-8 left-3 right-3 p-8 rounded-md shadow-md bg-white lg:flex lg:flex-row lg:relative lg:top-0 lg:shadow-none bg-popup lg:bg-transparent lg:p-0 lg:items-center items-start ${
                toggleMainMenu ? "flex" : "hidden"
            }
            `}
        >
            <a href="#">
                <img
                    className="m-0 lg:hidden mb-3"
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-4.png"
                    alt=""
                />
            </a>
            {UserMenu.map((item, i) => (
                <MenuListLinkNavbar
                    key={`${item?.linkName}-${i}`}
                    link={item?.link}
                    name={item?.linkName}
                    isActive={item?.link && route().current(item?.link)}
                />
            ))}
            {/* mobile */}
            <div className="flex items-center justify-end w-full lg:hidden mt-3">
                <button className="btn-log font-light py-3 px-8 focus:outline-none">
                    Log In
                </button>
                <button className="btn-try text-black text-lg py-3 px-8 rounded-xl focus:outline-none box-shadow font-semibold">
                    Try Now
                </button>
                <button onClick={setToggleMainMenu}>
                    <svg
                        className="w-6 h-6 absolute top-4 right-4 lg:hidden cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
            </div>
        </nav>
    );
}
