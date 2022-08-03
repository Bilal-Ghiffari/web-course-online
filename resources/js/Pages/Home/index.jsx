import { Head } from "@inertiajs/inertia-react";
import Unauthenticated from "@/Layouts/Guest/index";

export default function HomePage({ course, review }) {
    console.log("review", review);
    return (
        <Unauthenticated course={course} review={review}>
            <Head title="guest" />
        </Unauthenticated>
    );
}
