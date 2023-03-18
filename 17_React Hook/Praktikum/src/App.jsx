import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import RandomNumGen from './components/RandomNumGen/RandomNumGen';
import { useEffect } from 'react';


function App() {

  // useEffect(() => {
  //   alert("Welcome bang!")
  // }, [])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <RandomNumGen />
      <Form />
      <Table />
    </div>
  )

}

export default App
