import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import LandingPage from './pages/LandingPage/LandingPage';



function App() {

  useEffect(() => {
    alert("Welcome bang!")
  }, [])

  return (
    <div className="App">
      <LandingPage />
      {/* <CreateProduct /> */}
    </div>
  )

}

export default App
