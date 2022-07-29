import { Link } from "@inertiajs/inertia-react";
export default function Course({
    image,
    name,
    avatar,
    nameMentor,
    lesson,
    routeName,
}) {
    return (
        <div className="px-3 w-[320px]">
            <div className="rounded-xl p-4 pb-5 relative bg-[#0D0D0E]">
                <div className="rounded-xl overflow-hidden w-full h-36">
                    <img
                        src={`/storage/${image}`}
                        className="w-full h-full object-cover object-center"
                        alt=""
                    />
                </div>
                <Link href={routeName}>
                    <h5 className="text-lg truncate font-semibold pt-4 text-white">
                        {name}
                    </h5>
                </Link>
                <div className="pt-3 flex flex-row gap-3">
                    <div className="rounded-full flex items-center">
                        <img
                            src={`/storage/${avatar}`}
                            className="object-cover rounded-full w-[30px] h-[30px]"
                            alt=""
                        />
                    </div>
                    <span className="flex items-center text-sm text-gray-500">
                        {nameMentor}
                    </span>
                </div>
                <div className="pt-[10px] flex justify-end text-white">
                    <span className="text-[15px]">{lesson} Lesson</span>
                </div>
            </div>
        </div>
    );
}
