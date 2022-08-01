import { Link } from "@inertiajs/inertia-react";
import { UserMenu } from "./LinkMenu";
import MenuListLink from "./MenuListLink";
export default function ListMenuNavbar({
    toggleMainMenu,
    setToggleMainMenu,
    handleTriggerOpen,
    dropDownTarget,
}) {
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
            {UserMenu.map((item, index) => (
                <MenuListLink
                    key={`${item.linkName}-${index}`}
                    name={item.linkName}
                    link={item.link}
                    isActive={item.link && route().current(item.link)}
                />
            ))}
            {/* mobile */}
            <div className="flex items-center justify-end w-full lg:hidden mt-3">
                <div className="collapsible-dropdown xl:hidden flex flex-col gap-2 relative">
                    <div
                        className="outline outline-2 outline-gray-700 p-[5px] rounded-full w-[60px] dropdown-button cursor-pointer"
                        onClick={handleTriggerOpen}
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </div>
                    <div
                        className="bg-gray-800 rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
                        ref={dropDownTarget}
                    >
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </a>
                        <Link
                            href={"#"}
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </Link>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Sign Out
                        </Link>
                    </div>
                </div>
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
