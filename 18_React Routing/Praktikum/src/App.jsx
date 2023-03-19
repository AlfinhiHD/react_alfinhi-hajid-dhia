import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import RandomNumGen from './components/RandomNumGen/RandomNumGen';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    alert("Welcome bang!")
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <RandomNumGen />
      <Form setTable={setTableData} />
      <Table tables={tableData} setTable={setTableData} />
    </div>
  )

}

export default App
