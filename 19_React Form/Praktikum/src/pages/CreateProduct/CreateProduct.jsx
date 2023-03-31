import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import Table from '../../components/Table/Table';
import RandomNumGen from '../../components/RandomNumGen/RandomNumGen';
import { useState } from 'react';


function CreateProduct({setData}) {
  const [tableData, setTableData] = useState([])
  
  setData(tableData)

  return (
    <>
      <Navbar />
      <Header />
      <RandomNumGen />
      <Form setTable={setTableData} />
      <Table tables={tableData} setTable={setTableData} />
      
    </>
      
  )

}

export default CreateProduct
