import { Head } from "@inertiajs/inertia-react";
import Unauthenticated from "@/Layouts/Guest/index";

export default function HomePage({ course }) {
    // console.log("course", course);
    return (
        <Unauthenticated course={course}>
            <Head title="guest" />
        </Unauthenticated>
    );
}
