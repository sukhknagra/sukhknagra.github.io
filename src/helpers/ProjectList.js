import Bmi from "../assets/bmi.png";
import Cflipper from "../assets/CF.jpg";
import Counter from "../assets/counter.png";
//import BmiCalc from "../pages/BmiCalc";

//import { useNavigate } from "react-router-dom";


  



export const ProjectList = [
    {
        name: "Bmi Calculator",
         image: Bmi ,
        skills:"JavaScript, HTML, CSS",
        link : <a href="/bmicalc" rel=""> Click me </a>
        
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
       
    },
];