export function ToolHtmlCss() {
    return (
        <div className="px-3 w-[250px]">
            <div className="bg-[#0D0D0E] h-[300px] w-[220px] rounded-xl p-4">
                <div className="pt-3 flex flex-col gap-3">
                    <img
                        src="/images/vs.png"
                        className="w-[70px] h-[70px]"
                        alt=""
                    />
                    <div className="pt-4">
                        <h4 className="text-white text-xl">
                            Visual Studio Code
                        </h4>
                    </div>
                    <a
                        className="btn-tools mt-4 py-4 px-6 rounded-full text-base text-center w-full"
                        href="https://code.visualstudio.com/"
                        target={"_blank"}
                    >
                        Download
                    </a>
                </div>
            </div>
        </div>
    );
}

export function ToolPhpWebDevelopment() {
    return (
        <>
            <div className="flex flex-row gap-2">
                <ToolHtmlCss />
                <div className="px-3 w-[250px]">
                    <div className="bg-[#0D0D0E] h-[300px] w-[220px] rounded-xl p-4">
                        <div className="pt-3 flex flex-col gap-3">
                            <img
                                src="/images/icon-php.png"
                                className="w-[70px] h-[70px]"
                                alt=""
                            />
                            <div className="pt-4">
                                <h4 className="text-white text-xl">PHP</h4>
                            </div>
                            <a
                                className="btn-tools mt-4 py-4 px-6 rounded-full text-base text-center w-full"
                                href="https://www.php.net/"
                                target={"_blank"}
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </div>
                <div className="px-3 w-[250px]">
                    <div className="bg-[#0D0D0E] h-[300px] w-[220px] rounded-xl p-4">
                        <div className="pt-3 flex flex-col gap-3">
                            <img
                                src="/images/icon-xampp.png"
                                className="w-[70px] h-[70px]"
                                alt=""
                            />
                            <div className="pt-4">
                                <h4 className="text-white text-xl">XAMPP</h4>
                            </div>
                            <a
                                className="btn-tools mt-4 py-4 px-6 rounded-full text-base text-center w-full"
                                href="https://www.apachefriends.org/index.html"
                                target={"_blank"}
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function ToolJavascriptDevelopment() {
    return (
        <>
            <div className="flex flex-row gap-2">
                <ToolHtmlCss />
                <div className="px-3 w-[250px]">
                    <div className="bg-[#0D0D0E] h-[300px] w-[220px] rounded-xl p-4">
                        <div className="pt-3 flex flex-col gap-3">
                            <img
                                src="/images/icon-node-js.png"
                                className="w-[70px] h-[70px]"
                                alt=""
                            />
                            <div className="pt-4">
                                <h4 className="text-white text-xl">Node Js</h4>
                            </div>
                            <a
                                className="btn-tools mt-4 py-4 px-6 rounded-full text-base text-center w-full"
                                href="https://nodejs.org/en/"
                                target={"_blank"}
                            >
                                Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
