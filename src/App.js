import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
       
        <Routes>
          <Route path='/' element={<Home/>}/>
          
          

        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
