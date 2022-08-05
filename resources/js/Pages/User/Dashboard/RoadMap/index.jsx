import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated/parts/Navbar";
import Footer from "@/Layouts/Authenticated/parts/Footer";
import RoadMapUser from "@/Layouts/Authenticated/partikelGlobal/RoadMapUser";
import { ListRoadMap } from "@/Layouts/Authenticated/partikelGlobal/ListRoadMap";

export default function RoadMap({
    auth,
    course,
    classAvailableFE,
    classAvailableBE,
}) {
    return (
        <>
            <Head title="Alur Belajar | Roadmap" />
            <section className="h-full w-full border-box transition: 0.3s; transition-all duration-500 linear bg-black">
                <div className="header-2-4">
                    <Navbar authName={auth?.user} />
                    <div className="text-white text-center mb-10">
                        <h2 className="text-3xl font-semibold">RoadMap</h2>
                        <p className="text-lg text-gray-400 mt-4">
                            Panduan langkah demi langkah untuk menjadi
                            <br />
                            developer dan designer yang sudah kami buat
                        </p>
                    </div>
                    <div className="container mx-auto px-4 py-[50px]">
                        <div className="flex-wrap justify-start items-center -mx-4 md:flex">
                            {ListRoadMap?.map((roadmap, i) => (
                                <RoadMapUser
                                    key={i}
                                    name={roadmap?.name}
                                    image={roadmap?.image}
                                    classAvailableFE={classAvailableFE?.length}
                                    classAvailableBE={classAvailableBE?.length}
                                    frontend={
                                        course?.category ===
                                        "Front-End Developer"
                                    }
                                />
                            ))}
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
