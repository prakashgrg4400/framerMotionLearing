import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Hero from "./component/hero/Hero";
import Brand from "./component/brand/Brand";
import Service from "./component/services/Service";
import Banner from "./component/banner/Banner";
import Banner2 from "./component/banner/Banner2";
import Testimonials from "./component/testimonials/Testimonials";
import NewsLetter from "./component/newsletter/NewsLetter";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Brand />
            <Service />
            <Banner />
            <Banner2 />
            <Testimonials />
            <NewsLetter />
        </div>
    );
}

export default App;
