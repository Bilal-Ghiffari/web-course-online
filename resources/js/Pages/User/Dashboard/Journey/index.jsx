import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated/parts/Navbar";
import Footer from "@/Layouts/Authenticated/parts/Footer";
import DetailRoadMapUser from "@/Layouts/Authenticated/partikelGlobal/DetailRoadMapUser";

export default function Jouney({ auth, frontEnd, backEnd }) {
    const { pathname } = window.location;
    return (
        <>
            {pathname === "/dashboard/roadmap/Back-End%20Developer" && (
                <Head title="Alur Belajar | Back End Developer" />
            )}
            {pathname === "/dashboard/roadmap/Front-End%20Developer" && (
                <Head title="Alur Belajar | Front End Developer" />
            )}
            <section className="h-full w-full border-box transition: 0.3s; transition-all duration-500 linear bg-black">
                <div className="header-2-4">
                    <Navbar authName={auth?.user} />
                    <DetailRoadMapUser dataFE={frontEnd} dataBE={backEnd} />
                </div>
            </section>
            <section className="h-full pt-20 pb-12 lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-500 linear bg-[#000000]">
                <Footer />
            </section>
        </>
    );
}
