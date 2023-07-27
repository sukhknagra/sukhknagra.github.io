import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"
import profile from "../assets/profile.jpg";
function Home() {
    return (
    <div className="home">
        <div className="about">
            <div className='profile'>
             <img className="img" src= {profile}></img>
             <h2> Hi, My Name is Sukhjinder Kaur</h2> <br/> <br/>
            </div> 
            <div className='prompt'>
             <p> A sotware developer with a passion for learning and creating.</p>
             <a href='https://www.linkedin.com/in/sukh-nagra-b72342272/' target="_blank" rel=""> 
             <LinkedInIcon/> </a> 
                    
             <a href='https://github.com/sukhknagra' target="_blank" rel=""><GithubIcon/></a>
            </div>
        </div>
        <div className='skills'> 
            <h1>Skills</h1>
            <ol className='list'>
            <li className='item'>
                
            <span> HTML, CSS, React <br/></span>
             
            <span> MySql, DB <br/> </span>
            
            
            <span>JavaScript, PHP, Wordpress </span>
            </li>

           </ol>
        </div>
    </div>
    );
}
export default Home;