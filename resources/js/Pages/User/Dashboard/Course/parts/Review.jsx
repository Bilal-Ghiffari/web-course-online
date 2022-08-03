import { useForm } from "@inertiajs/inertia-react";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";
import Input from "@/Components/Input";

export default function Review({ course }) {
    // console.log("ctn", course);
    const { data, setData, post, reset, errors, processing } = useForm({
        name: "",
        rating: 1,
        comment: "",
    });

    const handleInputValue = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        reset("comment", "name", "rating");
        // console.log(data);
        post(route("user.dashboard.course.show.store", course?.slug));
    };
    return (
        <form onSubmit={submit}>
            <Label
                forInput="comment"
                value="Name"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <div className="w-1/2">
                <Input
                    type={"text"}
                    name={"name"}
                    value={data.name}
                    className={
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    handleChange={handleInputValue}
                />
            </div>
            <Label
                forInput={"rating"}
                value={"Rating"}
                className={"mt-4 text-white text-base block mb-2"}
            />
            <div className="w-1/2">
                <Input
                    type={"number"}
                    name={"rating"}
                    value={data.rating}
                    className={
                        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    }
                    handleChange={handleInputValue}
                />
            </div>
            <Label
                forInput="comment"
                value="Add a comment"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <div className="w-1/2">
                <TextArea
                    name={"comment"}
                    value={data.comment}
                    id={"comment"}
                    handleChange={handleInputValue}
                    // isError={errors.body}
                ></TextArea>
            </div>
            <Button
                type="submit"
                processing={processing}
                className="btn-try inline-flex font-semibold text-black text-base py-3 px-2 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none box-shadow mt-5"
            >
                Rate Polly Pratt
            </Button>
        </form>
    );
}
