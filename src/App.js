import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import BmiCalc from './pages/BmiCalc';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './pages/Education';
import Counter from './pages/Counter';
import CounterLogin from "./pages/CounterLogin";
import ShoppingList from "./pages/ShoppingList";
import Carousel from "./pages/Carousel";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/project/:id' element={<ProjectDisplay/>}/>
          <Route path='/bmicalc' element={<BmiCalc/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path="/counterlogin" element = {<CounterLogin/>} />
          <Route path="/shoppinglist" element = {<ShoppingList/>}/>
          <Route path="carousel" element = {<Carousel/>}/>
          <Route path='/education' element={<Education/>}/>          
          <Route path='/experience' element={<Experience/>}/>
          

        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
