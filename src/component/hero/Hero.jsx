import hero from "../../assets/img/hero.png";
import { motion } from "framer-motion";
import { slideup } from "../../animation/animate";

function Hero() {
    return (
        <div className="container px-8 py-16 grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]  ">
            <div className="space-y-10 m-auto pl-7 ">
                <motion.h1
                    variants={slideup(0.3)}
                    initial="initial"
                    animate="animate"
                    className="text-4xl md:text-left text-center font-bold font-serif "
                >
                    SKETCH LUXURY INTERIOR DESIGN
                </motion.h1>
                <motion.p
                    variants={slideup(0.5)}
                    initial="initial"
                    animate="animate"
                    className="md:text-left text-center md:pr-16 pr-0 opacity-60 text-sm line leading-7 "
                >
                    Bring your dream to life with one-on-one design help & hand
                    picked products tailored to your style, space and budget.
                </motion.p>
                <div className="buttons flex justify-center md:justify-start gap-4">
                    <motion.button
                        variants={slideup(0.8)}
                        initial="initial"
                        animate="animate"
                        className="primary-btn bg-black text-white shadow-[5px_5px_0_0_grey] uppercase "
                    >
                        get started
                    </motion.button>
                    <motion.button
                        variants={slideup(1.2)}
                        initial="initial"
                        animate="animate"
                        className="uppercase primary-btn"
                    >
                        contact us
                    </motion.button>
                </div>
            </div>
            <div className="m-auto w-[70%] md:w-[95%] mt-12 md:mt-auto ">
                <motion.img
                    initial={{ x: 100, opacity: 0 }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 0.5, delay: 0.2 },
                    }}
                    // transition={{ duration: 1 }}
                    src={hero}
                    alt=""
                    className="w-full object-cover"
                />
            </div>
        </div>
    );
}

export default Hero;
