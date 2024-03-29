import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated/parts/Navbar";
import Footer from "@/Layouts/Authenticated/parts/Footer";
import DetailCourse from "./parts/DetailCourse";
export default function Show({ auth, course }) {
    return (
        <>
            <Head title={`Kelas Online Gratis | ${course?.name}`} />
            <section className="h-full w-full border-box transition: 0.3s; transition-all duration-500 linear bg-black">
                <div className="header-2-4">
                    <Navbar authName={auth?.user} />
                    <div className="ml-[100px] pr-[80px] overflow-hidden">
                        <div className="py-[70px] flex flex-col gap-[50px]">
                            <DetailCourse course={course} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-full pt-20 pb-12 lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-500 linear bg-[#000000]">
                <Footer />
            </section>
        </>
    );
}
