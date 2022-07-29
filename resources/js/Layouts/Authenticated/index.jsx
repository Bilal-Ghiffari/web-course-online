import React from "react";
import Navbar from "./parts/Navbar";
import Header from "./parts/Header";
import Content from "./parts/Content";
import Footer from "./parts/Footer";
import Course from "./partikelGlobal/Course";

export default function Authenticated({ auth, course }) {
    console.log("auth", auth);
    console.log("course", course);
    return (
        <>
            <section className="h-full w-full border-box transition: 0.3s; transition-all duration-500 linear bg-black">
                <div className="header-2-4">
                    <Navbar authName={auth?.user} />
                    <Header />
                </div>
            </section>
            <section class="h-full w-full px-8 py-20 bg-black">
                <div className="container mx-auto px-4 py-[50px]">
                    <div className="text-white text-center mb-10">
                        <h2 className="text-3xl font-semibold">
                            Jelajahi Kursus Terbaik Kami
                        </h2>
                    </div>
                    <div className="flex-wrap justify-start items-center -mx-4 md:flex">
                        {course.map((item) => (
                            <Course
                                key={`${item?.name}-${item?.id}`}
                                routeName={route(
                                    "user.dashboard.course.show",
                                    item?.slug
                                )}
                                image={item.thumbnail}
                                avatar={item?.avatar}
                                name={item.name}
                                nameMentor={item?.mentor}
                                lesson={item?.lesson}
                            />
                        ))}
                    </div>
                </div>
                <Content />
            </section>
            <section className="h-full pt-20 pb-12 lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-500 linear bg-[#000000]">
                <Footer />
            </section>
        </>
    );
}
