import { useState, useRef } from "react";
import ListMenuNavbar from "./partikel/ListMenuNavbar";
import LinkMenuDropdown from "./partikel/LinkMenuDropdown";

export default function Navbar({ authName }) {
    const [toggleMainMenu, setToggleMainMenu] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(true);

    const dropDownTarget = useRef(null);
    const handleTriggerOpen = () => {
        if (!dropDownOpen) {
            dropDownTarget.current &&
                dropDownTarget.current.classList.add("hidden");
        } else {
            dropDownTarget.current &&
                dropDownTarget.current.classList.remove("hidden");
        }
        setDropDownOpen(!dropDownOpen);
    };
    return (
        <header>
            <div className="mx-auto flex py-12 lg:px-24 md:px-16 sm:px-8 px-8 items-center justify-between lg:justify-start">
                <a href="#">
                    <img
                        src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-4.png"
                        alt=""
                    />
                </a>
                <div className="flex mr-0 lg:hidden cursor-pointer">
                    <button onClick={() => setToggleMainMenu((prev) => !prev)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="#E7E7E8"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div
                    className={`bg-screen bg-black fixed w-full h-full top-0 left-0 z-30 bg-opacity-60 ${
                        !toggleMainMenu ? "hidden" : ""
                    }
                    `}
                ></div>
                <ListMenuNavbar
                    toggleMainMenu={toggleMainMenu}
                    setToggleMainMenu={() => setToggleMainMenu((prev) => !prev)}
                    handleTriggerOpen={handleTriggerOpen}
                    dropDownTarget={dropDownTarget}
                />
                {/* desktop */}
                <div className="hidden lg:inline-flex">
                    <span className="text-white text-sm font-medium my-3 mr-5">
                        Welcome, {authName?.name}
                    </span>
                </div>
                <div
                    className={`collapsible-dropdown xl:flex hidden flex-col gap-2 relative`}
                >
                    <div
                        className="outline outline-2 outline-gray-800 hover:outline-gray-600 p-[5px] rounded-full w-[60px] dropdown-button cursor-pointer"
                        onClick={handleTriggerOpen}
                    >
                        <img
                            src="/images/user-login.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                        />
                    </div>
                    <LinkMenuDropdown dropDownTarget={dropDownTarget} />
                </div>
            </div>
        </header>
    );
}
