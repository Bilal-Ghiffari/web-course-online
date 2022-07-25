import { Head } from "@inertiajs/inertia-react";
import Unauthenticated from "@/Layouts/Guest/index";

export default function HomePage() {
    return (
        <Unauthenticated>
            <Head title="guest" />
        </Unauthenticated>
    );
}
