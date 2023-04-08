import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateProduct from './pages/CreateProduct/CreateProduct';
import LandingPage from './pages/LandingPage/LandingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import ProductsContext from './context/ProductsContext';
import LoginPage from './pages/LoginPage/loginPage';



function App() {

  // useEffect(() => {
  //   alert("Welcome bang!")
  // }, [])

  const [products, setProducts] = useState([])
  const value = {products, setProducts}

  return (
    <ProductsContext.Provider value = {value}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/getstarted" element={<CreateProduct />} />
          <Route path="/detailproduct/:productId" element={<DetailProduct />} />
          <Route path="/login" element={<LoginPage />} />
          {/* render={(props) => <DetailProduct productId={props.match.params.productId} */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ProductsContext.Provider>
  )

}

export default App
