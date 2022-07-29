export default function Benefit() {
    return (
        <div className="content-3-4 flex lg:flex-row flex-col items-center">
            <div className="w-full lg:w-1/2 text-center justify-center flex lg:mb-0 mb-12">
                <img
                    id="hero"
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-1.png"
                    alt=""
                />
            </div>
            <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center lg:text-left text-center">
                <h2 className="md:text-4xl text-3xl text-white font-semibold mb-10 tracking-tight">
                    3 Kunci Manfaat
                </h2>
                <ul>
                    <li className="mb-8">
                        <h4 className="font-medium text-2xl text-white mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center">
                            <span className="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 rounded-full">
                                1
                            </span>
                            Mentor Tepercaya
                        </h4>
                        <p className="text-base leading-7 tracking-wide caption">
                            Kami telah menyediakan mentor yang sangat
                            berpengalaman
                            <br className="sm:inline-block hidden" />
                            selama beberapa tahun.
                        </p>
                    </li>
                    <li className="mb-8">
                        <h4 className="font-medium text-2xl text-white mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center">
                            <span className="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 rounded-full">
                                2
                            </span>
                            Akses Selamanya
                        </h4>
                        <p className="text-base leading-7 tracking-wide caption">
                            Apakah Anda sibuk berkuliah dan bekerja sehingga
                            sulit untuk berkonsultasi?
                            <br className="sm:inline-block hidden" />
                            jangan khawatir karena Anda dapat mengakses kapan
                            saja.
                        </p>
                    </li>
                    <li className="mb-16">
                        <h4 className="font-medium text-2xl text-white mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center">
                            <span className="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 rounded-full">
                                3
                            </span>
                            Sangat murah
                        </h4>
                        <p className="text-base leading-7 tracking-wide caption">
                            Kami menyediakan paket hemat bahkan free untuk anda
                            <br className="sm:inline-block hidden" />
                            yang masih sekolah atau pekerja.
                        </p>
                    </li>
                </ul>
                <button className="btn-fill px-10 py-4 text-base text-black font-semibold rounded-xl cursor-pointer focus:outline-none tracking-wide">
                    Learn More
                </button>
            </div>
        </div>
    );
}
