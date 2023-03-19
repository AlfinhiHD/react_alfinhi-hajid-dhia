import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateProduct from './pages/CreateProduct/CreateProduct';
import LandingPage from './pages/LandingPage/LandingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';



function App() {

  // useEffect(() => {
  //   alert("Welcome bang!")
  // }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/getstarted" element={<CreateProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )

}

export default App
