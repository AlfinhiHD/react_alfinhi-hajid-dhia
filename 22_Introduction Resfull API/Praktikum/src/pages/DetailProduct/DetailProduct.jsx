import { useParams } from "react-router-dom"
import ProductsContext from "../../context/ProductsContext";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";


const DetailProduct = () => {

    // const {products, setProducts} = useContext(ProductsContext)
    const products = useSelector((state) => state.products)

    const { productId } = useParams();

    const url = `https://64318b893adb1596516ee16e.mockapi.io/products/${productId}`;

    const [fakedata, setFakeData] = useState({});

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setFakeData(response.data);
            })
            .catch((error) => console.error(error));
    }, [url, productId, fakedata]);

    // const item = products.listProduct.find((item) => item.productId === productId)

    return (
        <>
            <div className="container mt-5">
                <h2>Detail Product</h2>
                <h3>{productId}</h3>
                <h5> Product Name : {fakedata.productName}</h5>
                <h5> Product Cathegory : {fakedata.productCathegory}</h5>
                <h5> Product Image : {fakedata.productImage}</h5>
                <h5> Product Freshness : {fakedata.productFreshness}</h5>
                <h5> Product Description : {fakedata.productDesc}</h5>
                <h5> Product Price : {fakedata.productPrice}</h5>
            </div>
        </>
    )
}

export default DetailProduct