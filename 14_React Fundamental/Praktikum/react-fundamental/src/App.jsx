import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Table/Table';



function App() {

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Form />
      <Table />
    </div>
  )

}

export default App
