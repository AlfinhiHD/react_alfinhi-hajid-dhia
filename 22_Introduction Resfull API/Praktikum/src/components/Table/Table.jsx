import { Link } from "react-router-dom";
import Button from "../../elements/Button/Button";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/ProductsContext";
import TableItem from "./TableItem";
import { useSelector } from "react-redux";
import axios from "axios"

const Table = () => {
    // const { products, setProducts } = useContext(ProductsContext)
    const products = useSelector((state) => state.products)

    const [fakedata, setFakeData] = useState([])

    //get from mock API
    const url = "https://64318b893adb1596516ee16e.mockapi.io/products"

    // axios.get(url)
    // .then(response => (
    //     setFakeData(response.data)
    //     // console.log(fakedata)
    // ))
    // .catch(error => console.error(error))


    const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setFakeData(response.data);
        } catch (error) {
          console.error(error);
        }
    };
      useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">List Product</h2>
            <table className="table table-striped w-75" id="data-table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Category</th>
                        <th scope="col">Product Freshness</th>
                        <th scope="col">Product Price</th>
                        <th scope="col" colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {fakedata?.map((table) => (
                        <TableItem key={table.productId} table={table} />
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;