import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Sukhjinder Kaur</h2> <br/> <br/>
                <div className='prompt'>
                    <p> A sotware developer with a passion for learning and creating.</p>
                    <a href='https://www.linkedin.com/in/sukh-nagra-b72342272/' target="_blank" rel=""> 
                    <LinkedInIcon/> </a> 
                    <EmailIcon/>
                    <a href='https://github.com/sukhknagra' target="_blank" rel=""><GithubIcon/></a>
                    </div>
                     </div>
             <div className='skills'> 
             <h1>Skills</h1>
              <ol className='list'>
             <li className='item'>
                <h2> Front-End</h2>
                <span> HTML, CSS, React</span>
             </li>
             <li className='item'>
                <h2> Back-End</h2>
                <span> My Sql, NodeJS</span>
            </li>
            <li className='item'>
                <h2> Languages</h2>
                <span>JavaScript, PHP </span>
            </li>

          </ol>
          </div>
          </div>
    );
}
export default Home;