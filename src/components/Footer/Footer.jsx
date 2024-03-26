import './Footer.css'
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
    return (
        <div className="footer-section">
            <div>
                <div className='f-col'>
                    <div>
                        <h1>Taste Now</h1>
                        <div className='f-icons'>
                            <FaFacebookSquare className='f-icon' />
                            <ImInstagram className='f-icon' />
                            <FaTwitter className='f-icon' />
                            <IoLogoYoutube className='f-icon' />
                        </div>
                    </div>
                    <div className='f-col-one'>
                        <div>
                            <p>Seslendirme ve Alt Jazz</p>
                            <p>Media MarketGillie</p>
                            <p>Gilli</p>
                            <p>Size Last</p>
                        </div>
                        <div>
                            <p>Self betimes</p>
                            <p>Yatirimci Iliskileri</p>
                            <p>Basal Himmler</p>
                        </div>
                    </div>
                    <div className='f-col-one'>
                        <div>
                            <p>Ward Market</p>
                            <p>is imkalnari</p>
                            <p>Car Tercihleri</p>
                        </div>
                        <div>
                            <p>Hedge karla</p>
                            <p>Mullein kosullari</p>
                            <p>Autumnal Bulgier</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;