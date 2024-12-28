import logo from "../../assets/img/Logo.png";
function Footer() {
    return (
        <div className="container px-14 ">
            <div className="  grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 py-10">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 font-bold">
                        <img src={logo} alt="" className="h-[25px]" />
                        <p>Interior</p>
                    </div>
                    <p className="text-sm font-semibold">
                        Srijana Chowk , Pokhara , Gandaki , Nepal
                    </p>
                    <p className="text-sm font-semibold">
                        @ 2024 TCJ All rights reserved
                    </p>
                </div>
                <div className="flex gap-52 md:gap-7">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">About Us</h2>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="" className="text-xs">
                                    Our Story
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-xs">
                                    Designer
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-xs">
                                    Craftmanship
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-xs">
                                    Sustainability
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">Support</h2>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href="" className="text-xs">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-xs">
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-xs">
                                    Care Guide
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-xs">
                                    Guaranty
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-bold">Contact Us</h2>
                    <ul className="flex flex-col gap-2">
                        <li className="flex gap-2 items-center text-sm font-semibold">
                            <span>phone</span>
                            <span>+977 9806120955</span>
                        </li>
                        <li className="flex gap-2 items-center text-sm font-semibold">
                            <span>email</span>
                            <span>Email</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t-2 pt-4 text-center pb-10 font-semibold text-sm ">
                <p>© 2023 TCJ. All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;
