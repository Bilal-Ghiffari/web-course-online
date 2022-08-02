import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated/index";

export default function Dashboard({ auth, course, review }) {
    return (
        <Authenticated auth={auth} course={course} review={review}>
            <Head title="auth" />
        </Authenticated>
    );
}
