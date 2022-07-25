import { useEffect } from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import Button from "@/Components/Button";

export default function Login() {
    const { data, setData, post, processing, reset, errors } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleInputValue = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submitForm = (e) => {
        e.preventDefault();
        post(route("login"));
    };
    return (
        <section className="h-full w-full border-box transition-all duration-500 linear bg-[#232130]">
            <div className="content-3-6">
                <div className="flex flex-col items-center h-full lg:flex-row">
                    <div className="relative hidden lg:block h-full width-left">
                        <img
                            className="absolute object-fill centered"
                            src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-6.png"
                            alt=""
                        />
                    </div>
                    <div className="flex w-full h-full px-8 width-right sm:px-16 py-32 lg:mx-0 mx-auto items-left justify-left bg-medium-black-1">
                        <div className="w-full sm:w-7/12 md:w-8/12 lg:w-9/12 xl:w-7/12 mx-auto lg:mx-0">
                            <div className="items-center justify-center lg:hidden flex">
                                <img
                                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Empty%20State/EmptyState3/Empty-3-6.png"
                                    alt=""
                                />
                            </div>
                            <h3 className="text-3xl font-semibold mb-3 text-medium-white">
                                Log In to continue
                            </h3>
                            <p className="leading-7 text-sm text-gray">
                                Please log in using that account has
                                <br />
                                registered on the website.
                            </p>
                            <form className="mt-6" onSubmit={submitForm}>
                                <div className="mb-7">
                                    <Label
                                        className={
                                            "block text-lg font-medium text-medium-white"
                                        }
                                        forInput={"email"}
                                        value={"Email"}
                                    />
                                    <div className="flex w-full px-5 py-2 mt-3 text-base font-light rounded-xl input">
                                        <svg
                                            className="mr-4 icon"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5 5C3.34315 5 2 6.34315 2 8V16C2 17.6569 3.34315 19 5 19H19C20.6569 19 22 17.6569 22 16V8C22 6.34315 20.6569 5 19 5H5ZM5.49607 7.13174C5.01655 6.85773 4.40569 7.02433 4.13168 7.50385C3.85767 7.98337 4.02427 8.59422 4.50379 8.86823L11.5038 12.8682C11.8112 13.0439 12.1886 13.0439 12.4961 12.8682L19.4961 8.86823C19.9756 8.59422 20.1422 7.98337 19.8682 7.50385C19.5942 7.02433 18.9833 6.85773 18.5038 7.13174L11.9999 10.8482L5.49607 7.13174Z"
                                                fill="#4E4B62"
                                            />
                                        </svg>
                                        <Input
                                            type="email"
                                            name={"email"}
                                            value={data.email}
                                            className={
                                                "w-full focus:outline-none text-base font-light bg-medium-black-2"
                                            }
                                            placeholder={"Your Email Address"}
                                            handleChange={handleInputValue}
                                            isFocused={true}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Label
                                        className={
                                            "block text-lg font-medium text-medium-white"
                                        }
                                        forInput={"password"}
                                        value={"Password"}
                                    />
                                    <div className="flex items-center w-full px-5 py-2 mt-3 text-base font-light rounded-xl input">
                                        <svg
                                            className="mr-4 icon"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.81592 4.25974C7.12462 5.48872 7 6.95088 7 8H6C4.34315 8 3 9.34315 3 11V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V11C21 9.34315 19.6569 8 18 8L17 7.99998C17 6.95087 16.8754 5.48871 16.1841 4.25973C15.829 3.62845 15.3194 3.05012 14.6031 2.63486C13.8875 2.22005 13.021 2 12 2C10.979 2 10.1125 2.22005 9.39691 2.63486C8.68058 3.05012 8.17102 3.62845 7.81592 4.25974ZM9.55908 5.24026C9.12538 6.01128 9 7.04912 9 8H15C15 7.04911 14.8746 6.01129 14.4409 5.24027C14.2335 4.87155 13.9618 4.57488 13.6 4.36514C13.2375 4.15495 12.729 4 12 4C11.271 4 10.7625 4.15495 10.4 4.36514C10.0382 4.57488 9.76648 4.87155 9.55908 5.24026ZM14 14C14 14.7403 13.5978 15.3866 13 15.7324V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V15.7324C10.4022 15.3866 10 14.7403 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14Z"
                                                fill="#4E4B62"
                                            />
                                        </svg>
                                        <Input
                                            type="password"
                                            name={"password"}
                                            value={data.password}
                                            className={
                                                "w-full focus:outline-none text-base font-light bg-medium-black-2"
                                            }
                                            placeholder={"Your Password"}
                                            handleChange={handleInputValue}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mt-3 text-right">
                                    <a
                                        href="#"
                                        className="forgot-password text-sm italic"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <Button
                                    type="submit"
                                    processing={processing}
                                    className={
                                        "btn-fill block w-full px-4 py-3 mt-9 font-medium text-xl text-white transition duration-500 ease-in-out transform rounded-xl hover:bg-gray-800 hover:to-black focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
                                    }
                                >
                                    Log In To My Account
                                </Button>
                            </form>
                            <p className="mt-8 text-center text-sm text-gray">
                                Don't have an account yet?
                                <Link
                                    href={route("register")}
                                    className="font-medium hover:underline text-green"
                                >
                                    Register Here
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
