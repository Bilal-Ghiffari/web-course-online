import { useState } from "react";
import { Link } from "@inertiajs/inertia-react";

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
                    <a
                        className="text-lg text-white font-semibold leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative active"
                        href="#"
                    >
                        Home
                    </a>
                    <a
                        className="text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative"
                        href="#"
                    >
                        Feature
                    </a>
                    <a
                        className="text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative"
                        href="#"
                    >
                        Pricing
                    </a>
                    <a
                        className="text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative"
                        href="#"
                    >
                        About Us
                    </a>
                    <a
                        className="text-lg font-light leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative"
                        href="#"
                    >
                        Contact
                    </a>
                    {/* mobile */}
                    <div className="flex items-center justify-end w-full lg:hidden mt-3">
                        <button className="btn-log font-light py-3 px-8 focus:outline-none">
                            Log In
                        </button>
                        <button className="btn-try text-black text-lg py-3 px-8 rounded-xl focus:outline-none box-shadow font-semibold">
                            Try Now
                        </button>
                        <button
                            onClick={() => setToggleMainMenu((prev) => !prev)}
                        >
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
                {/* desktop */}
                <div className="hidden lg:inline-flex">
                    <Link
                        className="btn-log inline-flex text-black font-light text-lg leading-7 py-3 px-8 focus:outline-none"
                        href={route("login")}
                        as="button"
                    >
                        Log In
                    </Link>
                    {/* <button className="btn-log inline-flex text-black font-light text-lg leading-7 py-3 px-8 focus:outline-none">
                        Log In
                    </button> */}
                    <button className="btn-try inline-flex text-black text-lg leading-7 py-3 px-8 rounded-xl focus:outline-none box-shadow font-semibold">
                        Try Now
                    </button>
                </div>
            </div>
        </header>
    );
}
