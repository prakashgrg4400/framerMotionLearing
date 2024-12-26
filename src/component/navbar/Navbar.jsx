import logo from "../../assets/img/Logo.png";

let NavItems = [
    {
        id: 1,
        link: "About",
    },
    {
        id: 2,
        link: "Services",
    },
    {
        id: 3,
        link: "Project",
    },
    {
        id: 4,
        link: "Contact",
    },
];

function Navbar() {
    return (
        <div className="px-8">
            <nav className="py-5 container flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="" className="h-10" />
                    <h2 className="text-2xl font-bold">Interior</h2>
                </div>
                <ul className="md:flex md:gap-16 md:text-lg hidden ">
                    {NavItems.map((item) => {
                        return (
                            <li className="font-semibold" key={item.id}>
                                {item.link}
                            </li>
                        );
                    })}
                </ul>
                <button className="primary-btn">Try For Free</button>
            </nav>
        </div>
    );
}

export default Navbar;
