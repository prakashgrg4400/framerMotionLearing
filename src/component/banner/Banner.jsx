import banner from "../../assets/img/banner.png";
import { slideup, slideright } from "../../animation/animate";
import { motion } from "framer-motion";

function Banner() {
    return (
        <div className="container my-14 px-14 grid grid-cols-1 md:grid-cols-2 space-x-2 ">
            <div className="m-auto w-full md:mr-4 ">
                <motion.img
                    variants={slideright(0.5)}
                    initial="initial"
                    whileInView="animate"
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-6 m-auto">
                <motion.h2
                    variants={slideup(0.5)}
                    initial="initial"
                    whileInView="animate"
                    className="text-3xl font-serif font-bold"
                >
                    We Believe that a team makes any project better
                </motion.h2>
                <motion.p
                    variants={slideup(0.7)}
                    initial="initial"
                    whileInView="animate"
                    className="text-gray-500 text-sm"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit earum accusantium tempore nam aliquid
                </motion.p>
                <motion.div
                    variants={slideup(0.9)}
                    initial="initial"
                    whileInView="animate"
                >
                    <a
                        href=""
                        className="primary-btn bg-black text-white shadow-[5px_5px_0_0_gray]"
                    >
                        Discover Now
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export default Banner;
