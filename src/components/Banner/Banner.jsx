import './Banner.css'
import bg from '../../assets/food-bg.png'

const Banner = () => {
    return (
        <section>
            <div className="container">
                <div className="description">
                    <h1>Experience food <br></br><span>Delivery</span> like no other</h1>
                    <p>We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.</p>
                </div>
                <div className="image">
                    <img src={bg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;