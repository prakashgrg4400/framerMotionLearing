import brand1 from "../../assets/img/brand/1.png";
import brand2 from "../../assets/img/brand/2.png";
import brand3 from "../../assets/img/brand/3.png";
import brand4 from "../../assets/img/brand/4.png";
import brand5 from "../../assets/img/brand/5.png";

let brandImages = [
    {
        id: 1,
        img: brand1,
    },
    {
        id: 2,
        img: brand2,
    },
    {
        id: 3,
        img: brand3,
    },
    {
        id: 4,
        img: brand4,
    },
    {
        id: 5,
        img: brand5,
    },
];

function brand() {
    return (
        <div className="container py-20 flex justify-center md:justify-around flex-wrap  gap-4">
            {brandImages.map((brand) => {
                return (
                    <img
                        src={brand.img}
                        alt=""
                        key={brand.id}
                        className="w-1/5"
                    />
                );
            })}
        </div>
    );
}

export default brand;
