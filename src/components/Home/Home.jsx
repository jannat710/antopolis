
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Footer from '../Footer/Footer';
import GetUs from '../GetUs/GetUs';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (      
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Categories></Categories>
            <GetUs></GetUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;