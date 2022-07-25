export default function ListMenuFooter() {
    return (
        <div className="lg:pb-24 pb-16 mx-auto">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 lg:gap-0 gap-y-6">
                <div className="">
                    <div className="mb-5">
                        <img
                            src="http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header2/Header-2-4.png"
                            alt=""
                        />
                    </div>
                    <nav className="list-none list-footer space-y-5">
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Features</a>
                        </li>
                        <li>
                            <a>Pricing</a>
                        </li>
                        <li>
                            <a>Testimonial</a>
                        </li>
                        <li>
                            <a>Help</a>
                        </li>
                    </nav>
                </div>
                <div className="">
                    <h2 className="title-font font-semibold text-2xl mb-5 text-white">
                        Product
                    </h2>
                    <nav className="list-none list-footer space-y-5">
                        <li>
                            <a>Real Time Analytic</a>
                        </li>
                        <li>
                            <a>Easy to Operate</a>
                        </li>
                        <li>
                            <a>Full Secured</a>
                        </li>
                        <li>
                            <a>Analytic Tool</a>
                        </li>
                        <li>
                            <a>Story</a>
                        </li>
                    </nav>
                </div>
                <div className="">
                    <h2 className="title-font font-semibold text-2xl mb-5 text-white">
                        Company
                    </h2>
                    <nav className="list-none list-footer space-y-5">
                        <li>
                            <a>Contact Us</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Culture</a>
                        </li>
                        <li>
                            <a>Security</a>
                        </li>
                    </nav>
                </div>
                <div className="">
                    <h2 className="title-font font-semibold text-2xl mb-5 text-white">
                        Support
                    </h2>
                    <nav className="list-none list-footer space-y-5">
                        <li>
                            <a>Getting Started</a>
                        </li>
                        <li>
                            <a>Help Center</a>
                        </li>
                        <li>
                            <a>Server Status</a>
                        </li>
                    </nav>
                </div>
            </div>
        </div>
    );
}
