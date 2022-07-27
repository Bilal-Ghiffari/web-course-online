import React from "react";
import Navbar from "./parts/Navbar";
import Header from "./parts/Header";
import Content from "./parts/Content";
import Footer from "./parts/Footer";

export default function Authenticated({ auth }) {
    console.log("auth", auth);
    return (
        <>
            <section className="h-full w-full border-box transition: 0.3s; transition-all duration-500 linear bg-black">
                <div className="header-2-4">
                    <Navbar authName={auth?.user} />
                    <Header />
                </div>
            </section>
            <section class="h-full w-full px-8 py-20 bg-black">
                <Content />
            </section>
            <section className="h-full pt-20 pb-12 lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-500 linear bg-[#000000]">
                <Footer />
            </section>
        </>
    );
}
