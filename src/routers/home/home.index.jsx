import Navbar from "../../components/home/navbar";
import Footer from "../../components/home/footer";
import Index from "../../components/home/pages/home";
function HomeIndex() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <Index/>
            <Footer/>
        </div>
    );
}

export default HomeIndex;