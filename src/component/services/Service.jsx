import { FaVectorSquare } from "react-icons/fa6";
import { FaPenToSquare } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { slideup } from "../../animation/animate";
import { motion } from "framer-motion";

let services = [
    {
        id: 1,
        title: "Luxury Facilities",
        icon: FaVectorSquare,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        link: "#",
        delay: 0.9,
    },
    {
        id: 2,
        title: "Quality Products",
        icon: FaPenToSquare,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur",
        link: "#",
        delay: 1.1,
    },
    {
        id: 3,
        title: "Affordable Price",
        icon: RiMoneyDollarCircleFill,
        description:
            "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
        link: "#",
        delay: 1.3,
    },
];

function Service() {
    return (
        <div>
            <motion.h2
                variants={slideup(0.5)}
                initial="initial"
                whileInView={"animate"}
                className="text-4xl font-serif font-bold text-center mt-8 mb-4"
            >
                What we Provide
            </motion.h2>
            <motion.p
                variants={slideup(0.7)}
                initial="initial"
                whileInView={"animate"}
                className="text-center w-1/2 mx-auto text-gray-500 "
            >
                Bring your dream home to life with one-on-one design help & hand
                picked products
            </motion.p>
            <div className="container px-14 grid py-10 grid-cols-1 md:grid-cols-3 gap-4 ">
                {services.map((service) => {
                    return (
                        <motion.div
                            variants={slideup(service.delay)}
                            initial="initial"
                            whileInView="animate"
                            key={service.id}
                            className="border border-gray-500 px-6 py-10 flex flex-col gap-4 hover:bg-black hover:text-white transition-all duration-300 hover:shadow-[5px_5px_0_0_gray] "
                        >
                            <div className="">
                                {/* <span className=""> */}
                                <service.icon className="text-2xl border-[1px]  border-black rounded-full p-2 box-content " />
                                {/* </span> */}
                            </div>
                            <p className="text-2xl font-bold font-serif">
                                {service.title}
                            </p>
                            <p className="text-gray-400 text-sm">
                                {service.description}
                            </p>
                            <span>
                                <a
                                    href={service.link}
                                    className="border-b-2 inline-block border-black"
                                >
                                    Learn More
                                </a>
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

export default Service;
