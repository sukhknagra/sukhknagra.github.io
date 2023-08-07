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
             <img className="img" src= {profile} alt='img'></img>
             <h2> Hi, My Name is Sukhjinder Kaur</h2> <br/> <br/>
            </div> 
            <div className='prompt'>
             <p> A developer with a passion for learning and creating. I am a team player and seeking opportunities to grow.</p>
                                 
             <a href='https://github.com/sukhknagra' target="_blank" rel="noreferrer"><GithubIcon/></a>
             <a href='https://www.linkedin.com/in/sukhjinder-kaur-b72342272/' target="_blank" rel="noreferrer"><LinkedInIcon/></a>
             
            </div>
        </div>
        <div className='skills'> 
            <h1>Skills</h1>
            <ol className='list'>
            <li className='item'>
              ●	Proficient in React.js, HTML5, CSS3, PHP, and JavaScript. 
            
            </li>
            <br/>
            <li className='item'>
              ●	Strong understanding of database (MySQL).
            
            </li>
            <br/>
            <li className='item'>
              ●	Experience with CMS platforms such as WordPress
            
            </li>
            <br/>
            <li className='item'>
              ●	Ability to develop and implement Firebase Authentication
            
            </li>
            <br/>
            <li className='item'>
              ●	Excellent problem-solving and analytical skills
            
            </li>
            <br/>
            <li className='item'>
              ●	Understanding with version control systems such as Git.
            
            </li>
            <br/>
            <li className='item'>
              ●	Strong communication and interpersonal skills.
            
            </li>
            <br/>
            <li className='item'>
              ●	Passionate about learning new technologies and programming languages.
            
            </li>
            <br/>
            <li className='item'>
               
              ●	Team Management
            </li>
            <br/>


           </ol>
        </div>
    </div>
    );
}
export default Home;