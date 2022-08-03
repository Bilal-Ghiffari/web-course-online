import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "@inertiajs/inertia-react";
import CourseContent from "./CourseContent";
import Review from "./Review";

export default function DetailCourse({ course }) {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (i) => {
        setToggleState(i);
    };
    const video_url = JSON.parse(course?.video_url);

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
                </div>
                <div className="mt-5 flex flex-row gap-10">
                    <div
                        className={`px-4 py-2 w-[140px] rounded-full cursor-pointer ${
                            toggleState === 1
                                ? "bg-gray-700"
                                : "border-4 border-gray-700"
                        }`}
                        onClick={() => toggleTab(1)}
                    >
                        <h4 className="text-white text-center">About</h4>
                    </div>
                    <div
                        className={`px-4 py-2 w-[140px] rounded-full ml-5 cursor-pointer ${
                            toggleState === 2
                                ? "bg-gray-700"
                                : "border-4 border-gray-700"
                        }`}
                        onClick={() => toggleTab(2)}
                    >
                        <h4 className="text-white text-center">Review</h4>
                    </div>
                </div>
                <div className={`${toggleState === 1 ? "block" : "hidden"}`}>
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
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="text-xl text-white font-semibold">
                            Description
                        </div>
                        <p className="max-w-[700px] mt-[10px] text-stream-gray text-base text-gray-300 leading-8">
                            {course?.body}
                        </p>
                    </div>
                    <div className="text-white mt-10">
                        <h2 className="text-2xl font-semibold">
                            Course'S Content
                        </h2>
                    </div>
                    <div className="h-[700px] w-full overflow-auto">
                        {video_url
                            .filter((val) => val !== null)
                            .map((_, i) => (
                                <CourseContent key={i} id={i} course={course} />
                            ))}
                    </div>
                </div>
                <div className={`${toggleState === 2 ? "block" : "hidden"}`}>
                    <Review course={course} />
                </div>
            </div>
        </div>
    );
}
