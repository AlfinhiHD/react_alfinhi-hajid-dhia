import { useParams } from "react-router-dom"
import { gql, useMutation, useQuery } from "@apollo/client"
import { useEffect } from "react";
import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import { useState } from "react";


const DetailProduct = () => {

    const formData = {
        productId: "",
        productName: "",
        productCathegory: "",
        productImage: "",
        productFreshness: "",
        productDesc: "",
        productPrice: ""
    }

    const formErrors = {
        productName: "",
        productCathegory: "",
        productImage: "",
        productFreshness: "",
        productDesc: "",
        productPrice: ""
    }

    const [dataEdit, setDataEdit] = useState(formData)
    const [errors, setErrors] = useState(formErrors)

    const errorEdit = {};

    const { productId } = useParams();

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
    
    const { data, loading, error } = useQuery(GetProductList, {
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


    // const item = data.Product.find((item) => item.id === productId)

    setDataEdit({
        productId: product.id,
        productName: product.name,
        productCathegory: product.category,
        productImage: product.image,
        productFreshness: product.freshness,
        productDesc: product.description,
        productPrice: product.price
    })


    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        setDataEdit((prev) => ({
            ...prev,
            [name]: value
        }))
    }

     const handleSubmit = e => {
        e.preventDefault();

        if (!data.productName) {
            errorEdit.productName = "Name is required";
        }
        if (!data.productCathegory) {
            errorEdit.productCathegory= "Category is required";
        }
        if (!data.productImage) {
            errorEdit.productImage= "Image is required";
        }
        if (!data.productDesc) {
            errorEdit.productDesc= "Desc is required";
        }
        if (!data.productPrice) {
            errorEdit.productPrice = "Price is required";
        }

        setErrors(errorEdit);

        if (Object.keys(errorEdit).length === 0) {
            console.log(data)
        }
    }



    return (
        <div className="container">
            {/* <div className="container mt-5">
                <h2>Detail Product</h2>
                <h3>{product.id}</h3>
                <h5> Product Name : {product.name}</h5>
                <h5> Product Cathegory : {product.category}</h5>
                <h5> Product Image : {product.image}</h5>
                <h5> Product Freshness : {product.freshness}</h5>
                <h5> Product Description : {product.description}</h5>
                <h5> Product Price : {product.price}</h5>
            </div> */}
            <form onSubmit={handleSubmit} className="container mt-5 w-50" id="productForm">
                <h2>Detail Product</h2>
                <div className="mb-4 mt-4 w-50">
                    <label className="form-label has-success" htmlFor="productName">
                        Product Name
                    </label>
                    <Input
                        type="text"
                        name="productName"
                        className="form-control"
                        value={dataEdit.productName}
                        onChange={handleInput}
                    />
                    <small id="nameError" className="text-danger">
                        {errorEdit.productName}
                    </small>
                </div>
                <div className="mb-4 w-50">
                    <label className="form-label" htmlFor="productCathegory">
                        Product Cathegory
                    </label>
                    <select
                        name="productCathegory"
                        value={dataEdit.productCathegory}
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleInput}
                    >
                        <option disable="" value="" hidden="">
                            Chose...
                        </option>
                        <option name="category" value="Electronic">
                            Electronic
                        </option>
                        <option name="category" value="Furniture">
                            Furniture
                        </option>
                        <option name="category" value="Tools">
                            Tools
                        </option>
                    </select>
                </div>
                <div className="mb-4 w-50">
                    <label className="form-label" htmlFor="productImage">
                        Image of Product
                    </label>
                    <input
                        className="form-control"
                        name="productImage"
                        // value={product.image}
                        type="file"
                        onChange={handleInput}
                        accept="image/*"
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="productFreshness">
                        Product Freshness
                    </label>
                    <div className="form-check">
                        <input
                            id="new"
                            name="productFreshness"
                            className="form-check-input"
                            type="radio"
                            defaultValue="Brand New"
                            onChange={handleInput}

                        />
                        <label className="form-check-label" htmlFor="new">Brand New</label>
                    </div>
                    <div className="form-check">
                        <input
                            id="second"
                            name="productFreshness"
                            className="form-check-input"
                            type="radio"
                            defaultValue="Second Hand"
                            onChange={handleInput}

                        />
                        <label className="form-check-label" htmlFor="second">Second Hand</label>
                    </div>
                    <div className="form-check">
                        <input
                            id="refurbished"
                            name="productFreshness"
                            className="form-check-input"
                            type="radio"
                            defaultValue="Refurbished"
                            onChange={handleInput}

                        />
                        <label className="form-check-label" htmlFor="refurbished">Refurbished</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="form-label" htmlFor="productDesc">
                        Additional Description
                    </label>
                    <textarea
                        rows={5}
                        className="form-control"
                        name="productDesc"
                        value={dataEdit.productDesc}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-4 w-50">
                    <label className="form-label" htmlFor="productPrice">
                        Product Price
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        name="productPrice"
                        value={dataEdit.productPrice}
                        onChange={handleInput}
                    />
                </div>
                <Button
                    type="submit"
                    className="btn btn-primary w-100 mt-5"
                    label="Submit"
                />
            </form>
        </div>
    )
}

export default DetailProduct