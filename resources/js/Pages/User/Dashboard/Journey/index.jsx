import Navbar from "@/Layouts/Authenticated/parts/Navbar";
import Footer from "@/Layouts/Authenticated/parts/Footer";
import DetailRoadMapUser from "@/Layouts/Authenticated/partikelGlobal/DetailRoadMapUser";

export default function Jouney({ auth, frontEnd, backEnd, course }) {
    console.log("fe", frontEnd);
    console.log("be", backEnd);
    return (
        <>
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
