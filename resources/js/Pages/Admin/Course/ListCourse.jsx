import Button from "@/Components/Button";
import { Link } from "@inertiajs/inertia-react";
export default function ListCourse({ data }) {
    console.log("data", data);
    return (
        <table className="table-fixed w-full text-center text-white mt-10">
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Avatar</td>
                    <td>Name</td>
                    <td>Video_URL</td>
                    <td>Mentor</td>
                    <td>Price</td>
                    <td>Lesson</td>
                    <td>Description</td>
                    <td colSpan={2}>Action</td>
                </tr>
            </thead>
            <tbody>
                {data.map((course, i) => (
                    <tr className="text-white">
                        <td className={`${course?.name}-${i}`}>
                            <img
                                src={`/storage/${course?.thumbnail}`}
                                className="w-32 rounded-md mb-3 mr-5"
                                alt="thumbnail"
                            />
                        </td>
                        <td className={`${course?.name}-${i}`}>
                            <img
                                src={`/storage/${course?.avatar}`}
                                className="w-[80px] h-[80px] mb-3 mx-5"
                                alt="thumbnail"
                            />
                        </td>
                        <td className="mb-3 mx-5">{course?.name}</td>
                        <td className="mb-3 truncate">{course?.video_url}</td>
                        <td className="mb-3 mx-5">{course?.mentor}</td>
                        <td className="mb-3 mx-5">
                            {course?.price === null ? "free" : course?.price}
                        </td>
                        <td className="mb-3 mx-5">{course?.lesson}</td>
                        <td className="truncate">{course?.body}</td>
                        <td>
                            <Link
                                href={route(
                                    "admin.dashboard.course.edit",
                                    course?.id
                                )}
                            >
                                <Button
                                    type="button"
                                    className="bg-yellow-500 text-white rounded-2xl py-[13px] text-center w-full ml-20"
                                >
                                    Edit
                                </Button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
