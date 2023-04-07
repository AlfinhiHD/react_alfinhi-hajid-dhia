import { useParams } from "react-router-dom"
import ProductsContext from "../../context/ProductsContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import {gql, useMutation, useQuery} from "@apollo/client"
import { useEffect } from "react";


const DetailProduct = () => {

    
    // const {products, setProducts} = useContext(ProductsContext)
    // const products = useSelector((state) => state.products)
    // console.log(products)

    const {productId} = useParams();
    
    // const item = data.Product.find((item) => item.id === productId)

    const GetProductList = gql`
    query MyQuery {
        Product(where: {id: {_eq: "${productId}"}}) {
          category
          description
          id
          image
          name
          price
          freshness
        }
    }`;

    const {data, loading, error} = useQuery(GetProductList, {
        variables: {productId}
    })
    console.log(data)

    return (
        <>
        <div className="container mt-5">
            <h2>Detail Product</h2>
            <h3>{data.Product.id}</h3>
            <h5> Product Name : {data.Product.name}</h5>
            <h5> Product Cathegory : {data.Product.category}</h5>
            <h5> Product Image : {data.Product.image}</h5>
            <h5> Product Freshness : {data.Product.freshness}</h5>
            <h5> Product Description : {data.Product.description}</h5>
            <h5> Product Price : {data.Product.price}</h5>
        </div>
        </>
    )
}

export default DetailProduct