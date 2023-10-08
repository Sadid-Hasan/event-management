import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import Navigation from "../pages/shared/navigation/Navigation";
import Banner from "../pages/shared/banner/Banner";

const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;