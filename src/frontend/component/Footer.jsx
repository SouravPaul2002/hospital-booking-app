import { Link } from "react-router-dom";
import '../css/footer.css';
import {
    FaHeartPulse,
} from "react-icons/fa6";
function Footer(){
    return <>
        <div className='footer'>
                <div className="footer-top">
                    <Link to={'/'} className="logo"><FaHeartPulse style={{ fontSize: "2.8rem" }} />medcare</Link>
                    <div className="footer-txt">
                    Our online platform simplifies the process of reserving hospital beds swiftly and efficiently, ensuring timely access to critical medical resources.
                    Experience hassle-free hospital bed reservations through our online service, designed for ease and accessibility during urgent times.
                    We strive to make securing hospital beds a seamless experience by offering a user-friendly online platform, making healthcare accessibility a priority.
                    Our online hospital bed booking service connects patients with the right care swiftly, providing a stress-free solution for medical bed reservations.
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="company-col footer-link-col">
                        <h2>Company</h2>
                        <ul>
                            <li>About Company</li>
                            <li>Customer's Speak</li>
                            <li>In the News</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="shopping-col footer-link-col">
                        <h2>Shopping</h2>
                        <ul>
                            <li>Browse by Manufacturers</li>
                            <li>Health Articles</li>
                            <li>Offers / Coupons</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                    <div className="link-col footer-link-col">
                        <h2>Useful Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
}

export default Footer