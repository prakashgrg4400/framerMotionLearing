import hero from "../../assets/img/hero.png";
function Hero() {
    return (
        <div className="container px-8 py-16 grid grid-cols-1 md:grid-cols-2 md:min-h-[600px]  ">
            <div className="space-y-10 m-auto pl-7 ">
                <h1 className="text-4xl md:text-left text-center font-bold font-serif ">
                    SKETCH LUXURY INTERIOR DESIGN
                </h1>
                <p className="md:text-left text-center md:pr-16 pr-0 opacity-60 text-sm line leading-7 ">
                    Bring your dream to life with one-on-one design help & hand
                    picked products tailored to your style, space and budget.
                </p>
                <div className="buttons flex justify-center md:justify-start gap-4">
                    <button className="primary-btn bg-black text-white shadow-[5px_5px_0_0_grey] uppercase ">
                        get started
                    </button>
                    <button className="uppercase primary-btn">
                        contact us
                    </button>
                </div>
            </div>
            <div className="m-auto w-[70%] md:w-[95%] mt-12 md:mt-auto ">
                <img src={hero} alt="" className="w-full object-cover" />
            </div>
        </div>
    );
}

export default Hero;
