import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
function Footer() {
    return (
     <div className="footer">
        <div className="socialMedia"> 
        <a href='https://www.instagram.com/' target="_blank" rel=""><InstagramIcon/> </a>
            <a href='https://twitter.com/SukhNagra91' target="_blank" rel=""> <TwitterIcon/></a>
            <a href='https://www.facebook.com/sukhjinder.k.nagra' target="_blank" rel=""><FacebookIcon/> </a>
            <a href='https://www.linkedin.com/in/sukh-nagra-b72342272/' target="_blank" rel=""> <LinkedInIcon/> </a>
        </div>
        <p>&copy; 2023 Portfolio</p>

     </div>
      );
}
export default Footer;