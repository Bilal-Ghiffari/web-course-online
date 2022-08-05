import { Link } from "@inertiajs/inertia-react";

export default function RoadMapUser({
    frontend,
    name,
    image,
    classAvailableFE,
    classAvailableBE,
}) {
    return (
        <>
            {!frontend && (
                <div className="px-3 w-[270px]">
                    <div className="rounded-xl p-4 pb-5 relative bg-[#0D0D0E]">
                        <div className="rounded-xl pt-3 overflow-hidden w-full h-36">
                            <img
                                src={image}
                                className="object-cover object-center w-[70px] h-[70px]"
                                alt=""
                            />
                        </div>
                        <Link
                            href={route("user.dashboard.roadmap.journey", name)}
                        >
                            <h5 className="text-lg truncate flex justify-center font-semibold text-white">
                                {name}
                            </h5>
                        </Link>
                        <div className="pt-[10px] flex justify-center text-white">
                            <span className="text-[15px]">
                                Tersedia {classAvailableBE} Kelas
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {frontend && (
                <div className="px-3 w-[270px]">
                    <div className="rounded-xl p-4 pb-5 relative bg-[#0D0D0E]">
                        <div className="rounded-xl pt-3 overflow-hidden w-full h-36">
                            <img
                                src={image}
                                className="object-cover object-center w-[70px] h-[70px]"
                                alt=""
                            />
                        </div>
                        <Link
                            href={route("user.dashboard.roadmap.journey", name)}
                        >
                            <h5 className="text-lg truncate flex justify-center font-semibold text-white">
                                {name}
                            </h5>
                        </Link>
                        <div className="pt-[10px] flex justify-center text-white">
                            <span className="text-[15px]">
                                Tersedia {classAvailableFE} Kelas
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
