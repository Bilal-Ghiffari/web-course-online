import { Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated/index";

export default function Dashboard(props) {
    return (
        <>
            <Authenticated auth={props.auth}>
                <Head title="auth" />
            </Authenticated>
        </>
    );
}
