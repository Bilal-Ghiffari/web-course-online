export default function Course({ image, name, avatar, nameMentor, lesson }) {
    return (
        <div className="px-3 w-[320px]">
            <div className="rounded-xl p-4 pb-5 relative bg-white">
                <div className="rounded-xl overflow-hidden w-full h-36">
                    <img
                        src={`/storage/${image}`}
                        className="w-full h-full object-cover object-center"
                        alt=""
                    />
                </div>
                <h5 className="text-lg truncate font-semibold pt-4 text-black">
                    {name}
                </h5>
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
                <div className="pt-[10px] flex justify-end">
                    <span className="text-[15px]">{lesson} Lesson</span>
                </div>
            </div>
        </div>
    );
}
