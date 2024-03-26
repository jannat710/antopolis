import './GetUs.css'
import g1 from '../../assets/get-1.jpg'
import g2 from '../../assets/gett-2.jpg'

const GetUs = () => {
    return (
        <div className='get-section'>
            <div className='get-header'>
                <h2>Get to know <span>us</span></h2>
            </div>

            <div>
                {/* 1st div */}
                <div className='get-card'>
                    <div >
                        <img className='get-card-image' src={g2} alt="" />
                    </div>
                    <div className='get-card-details'>
                        <h1 className='get-description'><span>Teamwork</span> is the key to<br></br> our sucess </h1>
                        <p  className='get-descript'>At TasteNow we make sure that every decision is determined by a team of us. Everyones opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
                    </div>
                </div>

            </div>
            <div>
                {/* 2nd div */}
                <div className='get-card-two'>

                    <div >
                        <img className='get-card-image-two' src={g1} alt="" />
                    </div>
                    <div className='get-card-details-two'>
                        <h1 className='get-description'>We are all in for the<br></br> <span>enviroment</span></h1>
                        <p className='get-descript'>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyones help, we can make a better world. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GetUs;