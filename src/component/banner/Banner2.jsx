import banner2 from "../../assets/img/banner2.png";
function Banner() {
    return (
        <div className="container py-10 my-14 px-14 grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-x-2  ">
            <div className="flex flex-col gap-6 m-auto">
                <h2 className="text-3xl font-serif font-bold">
                    Simple way to make stylish living room
                </h2>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit earum accusantium tempore nam adipisicing elit.
                    Suscipit earum accusantium tempore nam aliquid
                </p>
                <div className="grid grid-cols-3 md:gap-4 mr-20 md:mr-14">
                    <div className="flex flex-col">
                        <p className="text-2xl font-serif font-bold">15</p>
                        <p className="text-gray-500 text-sm">
                            Years of Experience
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-2xl font-serif font-bold">350</p>
                        <p className="text-gray-500 text-sm">Happy Clients</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-2xl font-serif font-bold">34</p>
                        <p className="text-gray-500 text-sm">Award Gained</p>
                    </div>
                </div>
                <div>
                    <a
                        href=""
                        className="primary-btn bg-black text-white shadow-[5px_5px_0_0_gray]"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="m-auto w-full md:mr-4 ">
                <img
                    src={banner2}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default Banner;
