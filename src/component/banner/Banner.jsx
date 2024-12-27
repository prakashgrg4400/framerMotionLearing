import banner from "../../assets/img/banner.png";
function Banner() {
    return (
        <div className="container my-14 px-14 grid grid-cols-1 md:grid-cols-2 space-x-2 ">
            <div className="m-auto w-full md:mr-4 ">
                <img
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-6 m-auto">
                <h2 className="text-3xl font-serif font-bold">
                    We Believe that a team makes any project better
                </h2>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit earum accusantium tempore nam aliquid
                </p>
                <div>
                    <a
                        href=""
                        className="primary-btn bg-black text-white shadow-[5px_5px_0_0_gray]"
                    >
                        Discover Now
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Banner;
