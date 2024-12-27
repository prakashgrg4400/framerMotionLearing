let testimonials = [
    {
        id: 1,
        image: "https://i.pravatar.cc/300?img=1",
        name: "John Dee",
        title: "Designer",
        testimony:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        image: "https://i.pravatar.cc/300?img=2",
        name: "Alex",
        title: "Developer",
        testimony:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 1,
        image: "https://i.pravatar.cc/300?img=3",
        name: "George",
        title: "Manager",
        testimony:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

function Testimonials() {
    return (
        <div className="mb-20">
            <div className="text-center py-10 flex flex-col gap-5">
                <h2 className=" text-3xl font-serif font-bold">
                    Words from our coustomers
                </h2>
                <p className="max-w-[350px] mx-auto text-gray-500 text-sm">
                    Bring your dream home to life with one-on-one design help &
                    hand picked products
                </p>
            </div>
            <div className="bg-black">
                <div className="container px-14 grid grid-cols-1 md:grid-cols-3 py-10 gap-4  ">
                    {testimonials.map((testimonial) => {
                        return (
                            <div
                                className="border border-gray-300 flex flex-col py-8 px-5 group hover:bg-white transition duration-300  "
                                key={testimonial.id}
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt=""
                                        className="h-[60px] rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold text-md group-hover:text-black text-white">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-gray-500 group-hover:text-black">
                                            {testimonial.title}
                                        </p>
                                        <p className="text-xs">⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                                <div className="border-t-2 border-gray-500 mt-5 pt-5">
                                    <p className="text-xs text-white group-hover:text-black ">
                                        {testimonial.testimony}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;