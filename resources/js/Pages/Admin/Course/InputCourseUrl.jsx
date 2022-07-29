import Input from "@/Components/Input";
import Label from "@/Components/Label";

export default function InputCourseUrl({ onHandleChange }) {
    return (
        <>
            <Label
                forInput=" course_video_url1"
                value="Video URL 1"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name=" course_video_url1"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput="course_video_url2"
                value="Video URL 2"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url2"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput="course_video_url3"
                value="Video URL 3"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url3"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput=" course_video_url4"
                value="Video URL 4"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url4"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput=" course_video_url5"
                value="Video URL 5"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url5"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput="course_video_url6"
                value="Video URL 6"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url6"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput="course_video_url7"
                value="Video URL 7"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url7"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput="course_video_url8"
                value="Video URL 8"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url8"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput="course_video_url9"
                value="Video URL 9"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url9"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
            <Label
                forInput="course_video_url10"
                value="Video URL 10"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <Input
                type="url"
                name="course_video_url10"
                variant="primary-outline"
                className={"rounded-2xl py-[13px] px-7 w-full"}
                handleChange={onHandleChange}
                placeholder="Enter the video url of the course"
                // isError={errors.video_url1}
            />
        </>
    );
}
