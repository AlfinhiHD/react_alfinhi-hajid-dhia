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
    })

    if (loading) {
        return <div>Loading...</div>;
    } if (error) {
        return <div>Error: {error.message}</div>;
    } if (!data?.Product?.length) {
        return <div>Product not found</div>;
    }

    console.log(data)

    const product = data.Product[0];

    return (
        <>
        <div className="container mt-5">
            <h2>Detail Product</h2>
            <h3>{product.id}</h3>
            <h5> Product Name : {product.name}</h5>
            <h5> Product Cathegory : {product.category}</h5>
            <h5> Product Image : {product.image}</h5>
            <h5> Product Freshness : {product.freshness}</h5>
            <h5> Product Description : {product.description}</h5>
            <h5> Product Price : {product.price}</h5>
        </div>
        </>
    )
}

export default DetailProduct