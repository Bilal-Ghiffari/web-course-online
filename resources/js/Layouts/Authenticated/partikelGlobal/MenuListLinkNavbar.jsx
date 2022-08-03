import { Link } from "@inertiajs/inertia-react";

export default function MenuListLinkNavbar({ link, name, isActive }) {
    return (
        <Link
            href={link ? route(link) : null}
            className={`text-lg font-semibold leading-6 mx-0 lg:mx-5 my-4 lg:my-0 relative ${
                isActive && "text-white active"
            } `}
        >
            {name}
        </Link>
    );
}
