import React from 'react'
//import LinkedInIcon from "@material-ui/icons/LinkedIn";
//import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css"
import profile from "../assets/profile.jpg";
function Home() {
    return (
    <div className="home">
        <div className="about">
            <div className='profile'>
             <img className="img" src= {profile} alt='img'></img>
             <h2> Hi, My Name is Sukhjinder Kaur</h2> <br/> <br/>
            </div> 
            <div className='prompt'>
             <p> A developer with a passion for learning and creating. I am a team player and seeking opportunities to grow.</p>
             
                    
             <a href='https://github.com/sukhknagra' target="_blank" rel="noreferrer"><GithubIcon/></a>
            </div>
        </div>
        <div className='skills'> 
            <h1>Skills</h1>
            <ol className='list'>
            <li className='item'>
                HTML 
            
            </li>
            <li className='item'>
                CSS
            
            </li>
            <li className='item'>
               JavaScript
            
            </li>
            <li className='item'>
                React
            
            </li>
            <li className='item'>
                PHP
            
            </li>
            <li className='item'>
                WordPress
            
            </li>
            <li className='item'>
                MySql
            
            </li>
            <li className='item'>
               Firebase 
            
            </li>


           </ol>
        </div>
    </div>
    );
}
export default Home;