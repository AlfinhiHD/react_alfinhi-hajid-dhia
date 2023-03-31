import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateProduct from './pages/CreateProduct/CreateProduct';
import LandingPage from './pages/LandingPage/LandingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import DetailProduct from './pages/DetailProduct/DetailProduct';
import ProductsContext from './context/ProductsContext';



function App() {

  // useEffect(() => {
  //   alert("Welcome bang!")
  // }, [])

  const [datas, setDatas] = useState([])
  const value = {datas, setDatas}

  return (
    <ProductsContext.Provider value = {value}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/getstarted" element={<CreateProduct setData={setDatas}  />} />
          <Route path="/detailproduct/:productId" element={<DetailProduct product={datas} />} />
          {/* render={(props) => <DetailProduct productId={props.match.params.productId} */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ProductsContext.Provider>
  )

}

export default App
