import Bmi from "../assets/bmi.png";
import Cflipper from "../assets/CF.jpg";
import Counter from "../assets/counter.png";
import { Link } from "react-router-dom";
//import BmiCalc from "../pages/BmiCalc";

//import { useNavigate } from "react-router-dom";


  



export const ProjectList = [
    {
        name: "Bmi Calculator",
         image: Bmi ,
        skills:"JavaScript, HTML, CSS",
        link : <Link to="/bmicalc" rel=""> Click here </Link>
        
    },
    {
        name : "Color Flipper",
        image: Cflipper,
        skills: "JavaScript, HTML, CSS",
        
       
    },

    {
        name : "Counter",
        image: Counter,
        skills: "JavaScript, HTML, CSS",
        link :<Link to="/counter" rel="">Click here</Link>
       
    },
];