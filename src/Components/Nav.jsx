import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faInstagram, faXTwitter, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
const Nav = () => {
    return ( 
        <div className="nav">
            <div className="nav-sec">
                 <ul>
                <li><FontAwesomeIcon icon={faInstagram}onClick={() => {window.open("https://www.instagram.com/astanovachrono002/", "blank")}}/></li>
                <li><FontAwesomeIcon icon={faXTwitter} onClick={() => {window.open("https://x.com/Ahmeddolieb31", "blank")}} /></li>
                <li><FontAwesomeIcon icon={faFacebook} onClick={() => {window.open("https://www.facebook.com/AhmedSafy01/", "blank")}} /></li>
                </ul>
                <p>Where To Find Me 👇</p>
            </div>
        </div>
     );
}
 
export default Nav;