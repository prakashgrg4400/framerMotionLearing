import brand1 from "../../assets/img/brand/1.png";
import brand2 from "../../assets/img/brand/2.png";
import brand3 from "../../assets/img/brand/3.png";
import brand4 from "../../assets/img/brand/4.png";
import brand5 from "../../assets/img/brand/5.png";
import { slideleft } from "../../animation/animate";
import { motion } from "framer-motion";

let brandImages = [
    {
        id: 1,
        img: brand1,
        delay: 0.5,
    },
    {
        id: 2,
        img: brand2,
        delay: 0.7,
    },
    {
        id: 3,
        img: brand3,
        delay: 0.9,
    },
    {
        id: 4,
        img: brand4,
        delay: 1.1,
    },
    {
        id: 5,
        img: brand5,
        delay: 1.3,
    },
];

function brand() {
    return (
        <div className="container py-20 px-20 flex justify-center md:justify-around flex-wrap  gap-4">
            {brandImages.map((brand) => {
                return (
                    <motion.img
                        variants={slideleft(brand.delay)}
                        initial="initial"
                        whileInView="animate"
                        src={brand.img}
                        alt=""
                        key={brand.id}
                        className=""
                    />
                );
            })}
        </div>
    );
}

export default brand;
