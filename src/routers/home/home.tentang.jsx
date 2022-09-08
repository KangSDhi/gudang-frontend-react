import Navbar from '../../components/home/navbar';
import Footer from '../../components/home/footer';
import Tentang from '../../components/home/pages/tentang';

function HomeTentang (){
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <Tentang/>
            <Footer/>
        </div>
    );
}

export default HomeTentang;