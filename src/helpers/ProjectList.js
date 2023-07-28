import Bmi from "../assets/bmi.png";
import Carousel from "../assets/carousel.jpg";
import Counter from "../assets/counter.png";
import ShoppingList from "../assets/shopping_list.png";
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
        name : "Carousel",
        image: Carousel,
        skills: "JavaScript, HTML, CSS",
        link : <Link to="/carousel" rel=""> Click here </Link>
        
       
    },

    {
        name : "Counter",
        image: Counter,
        skills: "JavaScript, HTML, CSS",
        link :<Link to="/counterlogin" rel="">Click here</Link>
       
    },

    {
        name : "Shopping List",
        image: ShoppingList,
        skills: "JavaScript, HTML, CSS",
        link :<Link to="/shoppinglist" rel="">Click here</Link>
       
    },
];