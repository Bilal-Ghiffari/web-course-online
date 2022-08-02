import { useForm } from "@inertiajs/inertia-react";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import TextArea from "@/Components/TextArea";

export default function Review({ course }) {
    // console.log("ctn", course);
    const { data, setData, post, reset, errors, processing } = useForm({
        comment: "",
    });

    const handleInputValue = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        reset("comment");
        post(route("user.dashboard.course.show.store", course?.slug));
    };
    return (
        <form onSubmit={submit}>
            <Label
                forInput="comment"
                value="Add a comment"
                className={"mt-4 text-white text-base block mb-2"}
            />
            <TextArea
                name={"comment"}
                value={data.comment}
                id={"comment"}
                handleChange={handleInputValue}
                // isError={errors.body}
            ></TextArea>
            <Button
                type="submit"
                processing={processing}
                className="btn-try inline-flex font-semibold text-black text-base py-4 px-6 rounded-xl mb-4 lg:mb-0 md:mb-0 focus:outline-none box-shadow mt-5"
            >
                Rate Polly Pratt
            </Button>
        </form>
    );
}
