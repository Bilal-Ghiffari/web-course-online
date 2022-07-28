import { Link } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated/parts/Navbar";
import Footer from "@/Layouts/Authenticated/parts/Footer";
import Button from "@/Components/Button";
import ListCourse from "./ListCourse";

export default function Course({ auth, course }) {
    return (
        <>
            <section className="h-full w-full border-box transition: 0.3s; transition-all duration-500 linear bg-black">
                <div className="header-2-4">
                    <Navbar authName={auth?.user} />
                    <div className="px-24">
                        <Link href={route("admin.dashboard.course.create")}>
                            <Button
                                type="button"
                                className="btn-try inline-flex font-semibold text-black text-base py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none box-shadow"
                            >
                                Insert new Course
                            </Button>
                        </Link>
                    </div>
                    <ListCourse data={course} />
                </div>
            </section>
            <section className="h-full pt-20 pb-12 lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-500 linear bg-[#000000]">
                <Footer />
            </section>
        </>
    );
}
