import { Link } from "@inertiajs/inertia-react";

export default function CourseContent({ course, id }) {
    return (
        <div className="mt-5 w-3/5">
            <div className="rounded-xl p-2 pb-2 bg-[#0D0D0E]">
                <div className="flex flex-row gap-8">
                    <div className="rounded-lg w-[150px] h-[150px] flex items-center">
                        <img
                            src={`/storage/${course?.thumbnail}`}
                            className="rounded-lg object-cover object-center"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col">
                        <div className="pt-10">
                            <Link
                                href={route(
                                    "user.dashboard.course.show.content",
                                    [course?.slug, id]
                                )}
                            >
                                <h3 className="font-semibold text-white">
                                    {course?.name}
                                </h3>
                            </Link>
                            <h3 className="text-sm text-gray-400">
                                {course?.category}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
