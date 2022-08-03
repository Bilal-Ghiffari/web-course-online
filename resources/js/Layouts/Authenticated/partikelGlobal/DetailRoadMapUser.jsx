import Course from "./Course";

export default function DetailRoadMapUser({ dataFE, dataBE }) {
    const { pathname } = window.location;
    return (
        <>
            {pathname === "/dashboard/roadmap/Back-End%20Developer" && (
                <div className="container mx-auto px-4 py-[50px]">
                    <div className="text-white text-center mb-10">
                        <h2 className="text-3xl font-semibold">
                            # {dataBE[0]?.category}
                        </h2>
                        <p className="text-lg text-gray-400 mt-4">
                            Panduan langkah demi langkah untuk menjadi
                            <br />
                            pengembang backend modern pada tahun 2022
                        </p>
                    </div>
                    <section class="h-full w-full px-8 py-10 bg-black">
                        <div className="container mx-auto px-4">
                            <div className="content-3-4 flex-wrap justify-start items-center -mx-4 md:flex">
                                {dataBE?.map((be, i) => (
                                    <Course
                                        key={`${be?.name}-${i}`}
                                        routeName={route(
                                            "user.dashboard.course.show",
                                            be?.slug
                                        )}
                                        image={be.thumbnail}
                                        avatar={be?.avatar}
                                        name={be.name}
                                        nameMentor={be?.mentor}
                                        lesson={be?.lesson}
                                        number={i + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            )}

            {pathname === "/dashboard/roadmap/Front-End%20Developer" && (
                <div className="container mx-auto px-4 py-[50px]">
                    <div className="text-white text-center mb-10">
                        <h2 className="text-3xl font-semibold">
                            # {dataFE[0]?.category}
                        </h2>
                        <p className="text-lg text-gray-400 mt-4">
                            Panduan langkah demi langkah untuk menjadi
                            <br />
                            pengembang frontend modern pada tahun 2022
                        </p>
                    </div>
                    <section class="h-full w-full px-8 py-10 bg-black">
                        <div className="container mx-auto px-4">
                            <div className="content-3-4 flex lg:flex-row flex-col items-center lg:justify-start justify-center">
                                <div className="flex-wrap justify-start items-center -mx-4 md:flex">
                                    {dataFE?.map((fe, i) => (
                                        <Course
                                            key={`${fe?.name}-${i}`}
                                            routeName={route(
                                                "user.dashboard.course.show",
                                                fe?.slug
                                            )}
                                            image={fe.thumbnail}
                                            avatar={fe?.avatar}
                                            name={fe.name}
                                            nameMentor={fe?.mentor}
                                            lesson={fe?.lesson}
                                            number={i + 1}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
