import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
function Footer() {
    return (
     <div className="footer">
        <div className="socialMedia"> 
            <a href='https://github.com/sukhknagra' target="_blank" rel="noreferrer"><GithubIcon/></a>
            <a href='https://www.linkedin.com/in/sukhjinder-kaur-b72342272/' target="_blank" rel="noreferrer"> <LinkedInIcon/> </a>
        </div>
        <p>&copy; 2023 Portfolio</p>

     </div>
      );
}
export default Footer;