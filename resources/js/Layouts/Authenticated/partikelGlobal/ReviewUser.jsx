export default function ReviewUser({ nameUser, reviewUser }) {
    return (
        <div className="px-3 w-[320px]">
            <div className="rounded-xl p-4 pb-5 relative bg-[#0D0D0E]">
                <div className="pt-3 flex flex-row gap-3">
                    <div className="rounded-full flex items-center">
                        <img
                            src={"/images/avatar.png"}
                            className="object-cover rounded-full w-[60px] h-[60px]"
                            alt=""
                        />
                    </div>
                    <span className="flex items-center text-lg text-gray-300 font-semibold">
                        {nameUser}
                    </span>
                </div>
                <div className="pt-[27px] text-white">
                    <span className="text-lg">{reviewUser}</span>
                </div>
                <div className="inline-flex items-center pt-5">
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
