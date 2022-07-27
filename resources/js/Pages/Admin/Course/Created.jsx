import { Link, Head, useForm } from "@inertiajs/inertia-react";
import Navbar from "@/Layouts/Authenticated/parts/Navbar";
import Footer from "@/Layouts/Authenticated/parts/Footer";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import TextArea from "@/Components/TextArea";
import ValidationErrors from "@/Components/ValidationErrors";

export default function Created({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        mentor: "",
        video_url: "",
        thumbnail: "",
        avatar: "",
        price: "",
        lesson: "",
        body: "",
    });

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "file" ? e.target.files[0] : e.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.dashboard.course.store"));
    };

    return (
        <>
            <Head title="created" />
            <div className="h-full w-full bg-black">
                <div className="header-2-4">
                    <Navbar authName={auth?.user} />
                    <div className="px-24">
                        <h1 className="text-xl text-white">
                            Insert a new movie
                        </h1>
                        <ValidationErrors errors={errors} />
                        <form encType="multipart/form-data" onSubmit={submit}>
                            <Label
                                forInput="name"
                                value="Name Course"
                                className={
                                    "text-white mt-4 text-base block mb-2"
                                }
                            />
                            <Input
                                type="text"
                                name="name"
                                variant="primary-outline"
                                className={"rounded-2xl py-[13px] px-7 w-full"}
                                handleChange={onHandleChange}
                                placeholder="Enter the name of the movie"
                                isError={errors.name}
                            />
                            <Label
                                forInput="mentor"
                                value="Mentor"
                                className={
                                    "mt-4 text-white text-base block mb-2"
                                }
                            />
                            <Input
                                type="text"
                                name="mentor"
                                variant="primary-outline"
                                className={"rounded-2xl py-[13px] px-7 w-full"}
                                handleChange={onHandleChange}
                                placeholder="Enter the category of the movie"
                                isError={errors.mentor}
                            />
                            <Label
                                forInput="video_url"
                                value="Video URL"
                                className={
                                    "mt-4 text-white text-base block mb-2"
                                }
                            />
                            <Input
                                type="url"
                                name="video_url"
                                variant="primary-outline"
                                className={"rounded-2xl py-[13px] px-7 w-full"}
                                handleChange={onHandleChange}
                                placeholder="Enter the video url of the movie"
                                isError={errors.video_url}
                            />
                            <Label
                                forInput="thumbnail"
                                value="Thumbnail"
                                className={
                                    "mt-4 text-white text-base block mb-2"
                                }
                            />
                            <Input
                                type="file"
                                name="thumbnail"
                                variant="primary-outline"
                                className={
                                    "rounded-2xl py-[13px] px-7 w-full cursor-pointer"
                                }
                                handleChange={onHandleChange}
                                placeholder="Insert thumbnail of the movie"
                                isError={errors.thumbnail}
                            />
                            <Label
                                forInput="avatar"
                                value="Profile Mentor"
                                className={
                                    "mt-4 text-white text-base block mb-2"
                                }
                            />
                            <Input
                                type="file"
                                name="avatar"
                                variant="primary-outline"
                                className={
                                    "rounded-2xl py-[13px] px-7 w-full cursor-pointer"
                                }
                                handleChange={onHandleChange}
                                placeholder="Insert thumbnail of the movie"
                                isError={errors.avatar}
                            />
                            <Label
                                forInput="price"
                                value="Price"
                                className={
                                    "mt-4 text-white text-base block mb-2"
                                }
                            />
                            <Input
                                type="number"
                                name="price"
                                variant="primary-outline"
                                className={"rounded-2xl py-[13px] px-7 w-full"}
                                handleChange={onHandleChange}
                                placeholder="Enter the ranting of the movie"
                                isError={errors.price}
                            />
                            <Label
                                forInput="lesson"
                                value="Lesson"
                                className={
                                    "mt-4 text-white text-base block mb-2"
                                }
                            />
                            <Input
                                type="number"
                                name="lesson"
                                variant="primary-outline"
                                className={"rounded-2xl py-[13px] px-7 w-full"}
                                handleChange={onHandleChange}
                                placeholder="Enter the ranting of the movie"
                                isError={errors.lesson}
                            />
                            <Label
                                forInput="body"
                                value="Description"
                                className={
                                    "mt-4 text-white text-base block mb-2"
                                }
                            />
                            {/* <Input
                                type="hidden"
                                name="body"
                                id={"body"}
                                variant="primary-outline"
                                className={"rounded-2xl py-[13px] px-7 w-full"}
                                handleChange={onHandleChange}
                                // isError={errors.ranting}
                            /> */}
                            <TextArea
                                name={"body"}
                                id={"body"}
                                handleChange={onHandleChange}
                                isError={errors.body}
                            ></TextArea>

                            <Button
                                type="submit"
                                processing={processing}
                                className="btn-try inline-flex font-semibold text-black text-base py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none box-shadow"
                            >
                                Save
                            </Button>
                        </form>
                    </div>
                    {/* <hr className="mb-4" /> */}
                </div>
            </div>
            <div className="h-full pt-20 pb-12 lg:px-24 md:px-16 sm:px-8 px-4 transition-all duration-500 linear bg-[#000000]">
                <Footer />
            </div>
        </>
    );
}
