import { useParams } from "react-router-dom"


const DetailProduct = ({product}) => {

    const {productId} = useParams();
    const item = product.find((item) => item.productId === productId)

    return (
        <>
        <div className="container mt-5">
            <h2>Detail Product</h2>
            <h3>{productId}</h3>
            <h5> Product Name : {item.productName}</h5>
            <h5> Product Cathegory : {item.productCathegory}</h5>
            <h5> Product Image : {item.productImage}</h5>
            <h5> Product Freshness : {item.productFreshness}</h5>
            <h5> Product Description : {item.productDesc}</h5>
            <h5> Product Price : {item.productPrice}</h5>
        </div>
        </>
    )
}

export default DetailProduct