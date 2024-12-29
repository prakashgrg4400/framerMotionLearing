import banner2 from "../../assets/img/banner2.png";
import { slideleft, slideup } from "../../animation/animate";
import { motion } from "framer-motion";

function Banner() {
    return (
        <div className="container py-10 my-14 px-14 grid grid-cols-1 md:grid-cols-2 space-y-8 md:space-x-2  ">
            <div className="flex flex-col gap-6 m-auto">
                <motion.h2
                    variants={slideup(0.5)}
                    initial="initial"
                    whileInView={"animate"}
                    className="text-3xl font-serif font-bold"
                >
                    Simple way to make stylish living room
                </motion.h2>
                <motion.p
                    variants={slideup(0.7)}
                    initial="initial"
                    whileInView="animate"
                    className="text-gray-500 text-sm"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit earum accusantium tempore nam adipisicing elit.
                    Suscipit earum accusantium tempore nam aliquid
                </motion.p>
                <motion.div
                    variants={slideup(0.9)}
                    initial="initial"
                    whileInView="animate"
                    className="grid grid-cols-3 md:gap-4 mr-20 md:mr-14"
                >
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
                </motion.div>
                <div>
                    <motion.a
                        variants={slideup(1.1)}
                        initial="initial"
                        whileInView={"animate"}
                        href=""
                        className="primary-btn bg-black text-white shadow-[5px_5px_0_0_gray]"
                    >
                        Contact Us
                    </motion.a>
                </div>
            </div>
            <div className="m-auto w-full md:mr-4 ">
                <motion.img
                    variants={slideleft(0.5)}
                    initial="initial"
                    whileInView={"animate"}
                    src={banner2}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default Banner;
