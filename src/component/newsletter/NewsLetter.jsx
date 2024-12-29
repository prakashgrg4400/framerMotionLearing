import { slideup } from "../../animation/animate";
import { motion } from "framer-motion";

function NewsLetter() {
    return (
        <div className="flex flex-col items-center gap-6 py-10">
            <motion.h1
                variants={slideup(0.5)}
                initial="initial"
                whileInView="animate"
                className="text-2xl font-bold font-serif"
            >
                Subscribe to our NewsLetter
            </motion.h1>
            <motion.p
                variants={slideup(0.7)}
                initial="initial"
                whileInView="animate"
                className="text-xs text-gray-400 max-w-[300px] text-center "
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                libero doloremque ab eum!
            </motion.p>
            <form action="">
                <motion.div
                    variants={slideup(1)}
                    initial="initial"
                    whileInView="animate"
                    className="border"
                >
                    <input
                        type="email"
                        name=""
                        id=""
                        className="border p-2 border-gray-300"
                        placeholder="Enter your email"
                    />
                    <button className="uppercase px-4 py-2 bg-black text-white">
                        Subscribe
                    </button>
                </motion.div>
            </form>
        </div>
    );
}

export default NewsLetter;
