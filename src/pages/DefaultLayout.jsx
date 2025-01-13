import { Outlet } from "react-router-dom";
import Footer from "../components/FooterComponent"
import Header from "../components/HeaderComponent"
import Alert from "../components/Alert";

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <Alert /> 
            <Outlet />
            <Footer />
        </div>
    )
}