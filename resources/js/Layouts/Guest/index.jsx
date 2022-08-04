import { Head } from "@inertiajs/inertia-react";
import Navbar from "./parts/Navbar";
import Header from "../Authenticated/partikelGlobal/Header";
import Content from "./parts/Content";
import Footer from "./parts/Footer";
import Course from "../Authenticated/partikelGlobal/Course";
import ReviewUser from "../Authenticated/partikelGlobal/ReviewUser";

export default function GuestUser({ course, review }) {
    return (
        <>
            <Head title="Belajar Online">
                <link
                    rel="icon"
                    type="image/png"
                    href="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-4.png"
                />
            </Head>
            <section className="h-full w-full border-box transition: 0.3s; transition-all duration-500 linear bg-black">
                <div className="header-2-4">
                    <Navbar />
                    <Header />
                </div>
            </section>
            <section className="h-full w-full border-box bg-black">
                <div className="container mx-auto px-4 py-[50px]">
                    <div className="text-white text-center mb-10">
                        <h2 className="text-3xl font-semibold">
                            Jelajahi Kursus Terbaik Kami
                        </h2>
                    </div>
                    <div className="flex-wrap justify-start items-center -mx-4 md:flex">
                        {course.map((item, i) => (
                            <Course
                                key={`${item?.name}-${i}`}
                                routeName={route("login")}
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
                <div className="container mx-auto px-4 py-[50px]">
                    <div className="text-white mb-5 mt-10">
                        <h2 className="text-3xl font-semibold">Testimoni</h2>
                        <p className="text-[17px] mt-3">
                            Cerita mereka yang sudah mengikuti kelas
                        </p>
                    </div>
                    <div className="flex-wrap justify-start items-center -mx-4 md:flex mt-10">
                        {review?.map((item, i) => (
                            <ReviewUser
                                key={`${item?.name}-${i}`}
                                nameUser={item?.name}
                                reviewUser={item?.comment}
                                rating={item?.rating}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <section className="h-full pt-20 pb-12 lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-500 linear bg-black">
                <Footer />
            </section>
        </>
    );
}
