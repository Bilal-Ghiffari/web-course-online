import { Link } from "@inertiajs/inertia-react";

export default function LinkMenuDropdown({ dropDownTarget }) {
    return (
        <div
            className="bg-gray-700 rounded-2xl text-white font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
            ref={dropDownTarget}
        >
            {/* <Link href={"#"} className="transition-all hover:bg-gray-500 p-4">
                Dashboard
            </Link>
             */}
            {/* <Link href={"#"} className="transition-all hover:bg-gray-500 p-4">
                Settings
            </Link> */}
            <Link
                href={route("logout")}
                method="post"
                as="button"
                className="transition-all hover:bg-gray-500 p-4"
            >
                Sign Out
            </Link>
        </div>
    );
}
