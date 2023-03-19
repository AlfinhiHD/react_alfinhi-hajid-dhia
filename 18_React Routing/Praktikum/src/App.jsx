import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateProduct from './pages/CreateProduct/CreateProduct';
import LandingPage from './pages/LandingPage/LandingPage';



function App() {

  // useEffect(() => {
  //   alert("Welcome bang!")
  // }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getstarted" element={<CreateProduct />} />
      </Routes>
    </Router>
  )

}

export default App
