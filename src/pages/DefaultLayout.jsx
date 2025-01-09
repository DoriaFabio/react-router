import { Outlet } from "react-router-dom";
import Footer from "../components/FooterComponent"
import Header from "../components/HeaderComponent"

export default function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}