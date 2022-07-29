import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated/index";

export default function Dashboard({ auth, course }) {
    return (
        <Authenticated auth={auth} course={course}>
            <Head title="auth" />
        </Authenticated>
    );
}
