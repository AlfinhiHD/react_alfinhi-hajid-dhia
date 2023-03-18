import { useState } from "react";
import Button from "../../elements/Button/Button";
import Input from "../../elements/Input/Input";
import uuid from 'react-uuid';

const Form = ({ setTable }) => {

    const formData = {
        productId: uuid(),
        productName: "",
        productCathegory: "",
        productImage: "",
        productFreshness: "",
        productDesc: "",
        productPrice: ""
    }

    const [data, setData] = useState(formData)
    const [errorMessage, setErrorMessage] = useState('');

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        setData((prev) => ({
            ...prev,
            [name]: value
        }))

        if (name === "productName") {
            if (value.length > 10) {
                setErrorMessage("Please input a valid product name")
            }
            else {
                setErrorMessage("")
            }
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        setTable((prev) => ([...prev, data]))
        setData(prev => ({...prev, productId: uuid()}))
    }

    const validClass = !errorMessage ? null : 'is-invalid';


    return (
        <form onSubmit={handleSubmit} className="container mt-5 w-50" id="productForm">
            <h2>Detail Product</h2>
            <div className="mb-4 mt-4 w-50">
                <label className="form-label has-success" htmlFor="productName">
                    Product Name
                </label>
                <Input
                    type="text"
                    name="productName"
                    className={`form-control ${validClass}`}
                    value={data.productName}
                    onChange={handleInput}
                />
                <small id="nameError" className="text-danger">
                    {errorMessage}
                </small>
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productCathegory">
                    Product Cathegory
                </label>
                <select
                    name="productCathegory"
                    value={data.productCathegory}
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
                <small id="cathegoryError" className="text-danger" />
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productImage">
                    Image of Product
                </label>
                <input className="form-control" name="productImage" value={data.productImage} type="file" onChange={handleInput} />
                <small id="imageError" className="text-danger" />
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
                <small id="freshnessError" className="text-danger" />
            </div>
            <div className="mb-4">
                <label className="form-label" htmlFor="productDesc">
                    Additional Description
                </label>
                <textarea
                    rows={5}
                    className="form-control"
                    name="productDesc"
                    value={data.productDesc}
                    onChange={handleInput}
                />
                <small id="descError" className="text-danger" />
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productPrice">
                    Product Price
                </label>
                <input type="number" className="form-control" name="productPrice" value={data.productPrice} onChange={handleInput} />
                <small id="priceError" className="text-danger" />
            </div>
            <Button
                type="submit"
                className="btn btn-primary w-100 mt-5"
                label="Submit"
            />
        </form>
    );
}

export default Form;