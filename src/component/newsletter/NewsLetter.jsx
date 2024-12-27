function NewsLetter() {
    return (
        <div className="flex flex-col items-center gap-6 py-10">
            <h1 className="text-2xl font-bold font-serif">
                Subscribe to our NewsLetter
            </h1>
            <p className="text-xs text-gray-400 max-w-[300px] ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
                libero doloremque ab eum!
            </p>
            <form action="">
                <div className="border">
                    <input
                        type="email"
                        name=""
                        id=""
                        className="border p-2 border-gray-300"
                    />
                    <button className="uppercase px-4 py-2 bg-black text-white">
                        Subscribe
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewsLetter;
