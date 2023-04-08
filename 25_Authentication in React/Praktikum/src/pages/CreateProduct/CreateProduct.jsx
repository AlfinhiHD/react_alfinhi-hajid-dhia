import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';
import RandomNumGen from '../../components/RandomNumGen/RandomNumGen';
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from 'react';
import ProductsContext from "../../context/ProductsContext";


function CreateProduct() {

  // get toke existing
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  // handle logout process
  const handleLogout = () => {
    if (token) {
      //remove token from localStorage
      localStorage.removeItem('token')

      // redirect to login page
      navigate('/login')
    }
  }

  return (
    <>
      <Navbar />
      <Header />
      <RandomNumGen />

      <div className="container d-flex flex-column mt-5">
        <div className="d-inline-flex mx-auto">
          <p>Logout disini :</p>
        </div>
        <div className="d-inline-flex mx-auto">
          <button className=' btn btn-danger' onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <Form />
      <Table />

    </>

  )

}

export default CreateProduct
