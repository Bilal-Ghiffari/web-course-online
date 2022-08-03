export default function ReviewUser({ nameUser, reviewUser, rating }) {
    const starRating = () => {
        if (rating === 1) {
            return <img src="/images/ic_star.svg" alt="" />;
        } else if (rating === 2) {
            return (
                <>
                    <img src="/images/ic_star.svg" alt="" className="px-3" />
                    <img src="/images/ic_star.svg" alt="" />
                </>
            );
        } else if (rating === 3) {
            return (
                <>
                    <img src="/images/ic_star.svg" alt="" className="px-3" />
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" className="px-3" />
                </>
            );
        } else if (rating === 4) {
            return (
                <>
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" className="px-3" />
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" className="px-3" />
                </>
            );
        } else if (rating === 5) {
            return (
                <>
                    <img src="/images/ic_star.svg" alt="" className="px-3" />
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" className="px-3" />
                    <img src="/images/ic_star.svg" alt="" />
                    <img src="/images/ic_star.svg" alt="" className="px-3" />
                </>
            );
        }
    };
    return (
        <div className="px-3 w-[320px]">
            <div className="rounded-xl p-4 pb-5 relative bg-[#0D0D0E] h-[320px]">
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
                <div className="py-5">
                    <div className="pt-[27px] text-white">
                        <span className="text-lg">{reviewUser}</span>
                    </div>

                    <div className="flex pt-[30px]">{starRating()}</div>
                </div>
            </div>
        </div>
    );
}
