import React from "react";

export default function FastCourse() {
    return (
        <div className="lg:px-24 md:px-16 sm:px-8 px-4 pb-20 pt-12 mx-auto mt-14">
            <div className="flex lg:flex-row flex-col -m-4">
                <div className="p-4 w-full">
                    <div className="card-header h-full flex lg:flex-row flex-col p-7 rounded-xl lg:space-x-3.5 md:space-x-3.5 space-x-0">
                        <div className="text-center mx-auto">
                            <img
                                src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content2/Content-2-1%20(1).png"
                                alt=""
                            />
                        </div>
                        <div className="flex-grow my-auto lg:text-left lg:w-3/4 w-full lg:text-left text-center lg:my-auto md:my-auto py-6">
                            <h4 className="text-2xl font-semibold mb-2.5 text-white">
                                Fast Business Management in 30 minutes
                            </h4>
                            <p className="text-base font-light tracking-wide w-full text-gray">
                                Our tools for business analysis helps an
                                organization understand
                                <br className="lg:block hidden" /> market or
                                business development.
                            </p>
                        </div>
                        <a className="inline-block items-center my-auto text-center">
                            <button className="btn-fill font-bold text-black text-base py-4 lg:w-full md:w-full sm:w-2/3 w-full rounded-xl mb-4 md:mb-5 lg:mb-5 focus:outline-none">
                                Buy Now
                            </button>
                            <button className="btn-outline font-normal text-black font-normal text-base py-4 lg:w-full md:w-full sm:w-2/3 w-full px-6 rounded-xl focus:outline-none bg-transparent rounded hover:border-transparent">
                                Demo Version
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
