import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import LinkMenuNavbar from "./partikel/LinkMenuNavbar";

export default function Navbar() {
    const [toggleMainMenu, setToggleMainMenu] = useState(false);
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
                <LinkMenuNavbar
                    toggleMainMenu={toggleMainMenu}
                    setToggleMainMenu={() => setToggleMainMenu((prev) => !prev)}
                />
                {/* desktop */}
                <div className="hidden lg:inline-flex">
                    <Link
                        className="btn-log inline-flex text-black font-light text-lg leading-7 py-3 px-8 focus:outline-none"
                        href={route("login")}
                        as="button"
                    >
                        Log In
                    </Link>
                    <button className="btn-try inline-flex text-black text-lg leading-7 py-3 px-8 rounded-xl focus:outline-none box-shadow font-semibold">
                        Try Now
                    </button>
                </div>
            </div>
        </header>
    );
}
