import ReactPlayer from "react-player";
import { Link } from "@inertiajs/inertia-react";
import CourseContent from "./CourseContent";

export default function DetailCourse({ course }) {
    const video_url = JSON.parse(course?.video_url);
    console.log(video_url);
    return (
        <div className="flex gap-14 items-start">
            <Link href={route("user.dashboard.index")}>
                <img src="/images/ic_arrow-left-normal.svg" alt="" />
            </Link>
            <div className="flex flex-col gap-10">
                <div className="w-full relative overflow-hidden group">
                    <ReactPlayer
                        url={course?.video_url}
                        controls
                        width={"900px"}
                        height={"500px"}
                    />
                    {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <img src="/images/ic_play.svg" width="80" alt="" />
                    </div> */}
                    {/* <a href="#" className="inset-0 absolute z-50"></a> */}
                </div>
                <div className="flex items-center justify-between">
                    <div>
                        <div className="text-white font-medium text-[28px] capitalize">
                            {course?.name}
                        </div>
                        <div className="flex flex-row gap-3 mt-8">
                            <div className="rounded-full flex items-center">
                                <img
                                    src={`/storage/${course?.avatar}`}
                                    className="rounded-full object-cover w-[50px] h-[50px]"
                                    alt=""
                                />
                            </div>
                            <span className="flex items-center text-lg text-gray-500">
                                {course?.mentor}
                            </span>
                        </div>
                        {/* <p className="text-stream-gray text-base mt-[6px] text-white">
                            Action •
                        </p> */}
                    </div>
                    <div className="inline-flex items-center gap-[6px]">
                        <img src="/images/ic_star.svg" alt="" />
                        <img src="/images/ic_star.svg" alt="" />
                        <img src="/images/ic_star.svg" alt="" />
                        <img src="/images/ic_star.svg" alt="" />
                        <img src="/images/ic_star.svg" alt="" />
                        <div className="text-base text-white ml-[6px] mt-1">
                            18,049
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-xl text-white">Description</div>
                    <p className="max-w-[700px] mt-[10px] text-stream-gray text-base text-white leading-8">
                        {course?.body}
                    </p>
                </div>
                <div className="text-white mt-10">
                    <h2 className="text-2xl font-semibold">Course'S Content</h2>
                </div>
                <div className="h-[700px] w-full overflow-auto">
                    {video_url.map((_, i) => (
                        <CourseContent key={i} id={i} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
