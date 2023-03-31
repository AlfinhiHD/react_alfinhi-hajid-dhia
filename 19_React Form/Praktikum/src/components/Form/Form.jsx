import { useState } from "react";
import Button from "../../elements/Button/Button";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from "../../elements/Input/Input";
import uuid from 'react-uuid';

const Form = ({setTable}) => {

    const initialValues = {
        productId: uuid(),
        productName: "",
        productCathegory: "",
        productImage: "",
        productFreshness: "",
        productDesc: "",
        productPrice: ""
    };
    
    const formik = useFormik({
        initialValues: {
            initialValues
        },
        validationSchema: Yup.object().shape({
            productName: Yup.string()
				.matches(/^[a-zA-Z0-9 ]+$/, 'Name must not contain symbols')
				.max(10, 'Product Name must not exceed 10 characters')
				.required('The product name field must be filled in'),
			productCathegory: Yup.string().required(
				'The product category field must be filled in'
			),
			productImage: Yup.mixed().required(
				'The image of product field must be filled in'
			),
			productFreshness: Yup.string().required(
				'The product freshness field must be filled in'
			),
			productDesc: Yup.string()
				.matches(/^[a-zA-Z0-9 ]+$/, 'Description must not contain symbols')
				.required('The additional description field must be filled in'),
			productPrice: Yup.number().required(
				'The product price field must be filled in'
			),
		}),
        onSubmit : (values, actions) => {
            console.log(values);
            const newValues = { ...values, productId: uuid() };
            setTable((prev) => ([...prev, newValues]))
            // actions.resetForm();
        },
    })

    // const formData = {
    //     productId: uuid(),
    //     productName: "",
    //     productCathegory: "",
    //     productImage: "",
    //     productFreshness: "",
    //     productDesc: "",
    //     productPrice: ""
    // }

    // const formErrors = {
    //     productName: "",
    //     productCathegory: "",
    //     productImage: "",
    //     productFreshness: "",
    //     productDesc: "",
    //     productPrice: ""
    // }

    // const [data, setData] = useState(formData)
    // const [errors, setErrors] = useState(formErrors)
    // // const [errorMessage, setErrorMessage] = useState('');
    // const error = {};

    // const handleInput = e => {
    //     const name = e.target.name;
    //     const value = e.target.value;

    //     setData((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))

    //     if (name === "productName") {
    //         if (value.length > 10) {
    //             error.productName = "Please input a valid product name";
    //         }
    //         else {
    //             error.productName = ""
    //         }
    //         setErrors(error);
    //     }
    // }

    // const handleSubmit = e => {
        
    //     e.preventDefault();

    //     if (!data.productName) {
    //         error.productName = "Name is required";
    //     }
    //     if (!data.productCathegory) {
    //         error.productCathegory= "Category is required";
    //     }
    //     if (!data.productImage) {
    //         error.productImage= "Image is required";
    //     }
    //     if (!data.productDesc) {
    //         error.productDesc= "Desc is required";
    //     }
    //     if (!data.productPrice) {
    //         error.productPrice = "Price is required";
    //     }

    //     if (!data.productFreshness) {
    //         error.productFreshness = "Freshness is required";
    //     }

    //     setErrors(error);

    //     if (Object.keys(error).length === 0) {
    //         setTable((prev) => ([...prev, data]))
    //         setData(prev => ({...prev, productId: uuid()}))
    //         alert('Form submitted succesfully')
    //     }
        
    // }

    
    return (
        <form onSubmit={formik.handleSubmit} className="container mt-5 w-50" id="productForm">
            <h2>Detail Product</h2>
            <div className="mb-4 mt-4 w-50">
                <label className="form-label has-success" htmlFor="productName">
                    Product Name
                </label>
                <Input
                    type="text"
                    name='productName'
                    id='productName'
                    value={formik.values.productName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                        formik.errors.productName && formik.touched.productName
                            ? 'form-control mt-1 is-invalid'
                            : 'form-control mt-1'
                    }
                />
                {formik.errors.productName && formik.touched.productName && (
                        <small className='text-danger'>{formik.errors.productName}</small>
                )}
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productCathegory">
                    Product Cathegory
                </label>
                <select
                    name="productCathegory"
                    value={formik.values.productCathegory}
                    aria-label="Default select example"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                        formik.errors.productCathegory && formik.touched.productCathegory
                            ? 'form-control mt-1 is-invalid'
                            : 'form-control mt-1'
                    }
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
                {formik.errors.productCathegory && formik.touched.productCathegory && (
                        <small className='text-danger'>{formik.errors.productCathegory}</small>
                )}
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productImage">
                    Image of Product
                </label>
                <input 
                name="productImage" 
                value={formik.values.productImage} 
                type="file" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                className={
                    formik.errors.productImage && formik.touched.productImage
                        ? 'form-control mt-1 is-invalid'
                        : 'form-control mt-1'
                }
                />
                {formik.errors.productImage && formik.touched.productImage && (
                        <small className='text-danger'>{formik.errors.productImage}</small>
                )}
            </div>
            <div className="mb-4">
                <label className="form-label" htmlFor="productFreshness">
                    Product Freshness
                </label>
                <div className="form-check">
                    <input
                        id="productFreshness"
                        name="productFreshness"
                        className="form-check-input"
                        type="radio"
                        value="Brand New"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label className="form-check-label" htmlFor="new">Brand New</label>
                </div>
                <div className="form-check">
                    <input
                        id="productFreshness"
                        name="productFreshness"
                        className="form-check-input"
                        type="radio"
                        value="Second Hand"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <label className="form-check-label" htmlFor="second">Second Hand</label>
                </div>
                <div className="form-check">
                    <input
                        id="productFreshness"
                        name="productFreshness"
                        className="form-check-input"
                        type="radio"
                        value="Refurbished"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        
                    />
                    <label className="form-check-label" htmlFor="refurbished">Refurbished</label>
                </div>
                {formik.errors.productFreshness && formik.touched.productFreshness && (
                        <small className='text-danger'>{formik.errors.productFreshness}</small>
                )}
            </div>
            <div className="mb-4">
                <label className="form-label" htmlFor="productDesc">
                    Additional Description
                </label>
                <textarea
                    rows={5}
                    name="productDesc"
                    value={formik.values.productDesc}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={
                        formik.errors.productDesc && formik.touched.productDesc
                            ? 'form-control mt-1 is-invalid'
                            : 'form-control mt-1'
                    }
                />
                {formik.errors.productDesc && formik.touched.productDesc && (
                        <small className='text-danger'>{formik.errors.productDesc}</small>
                )}
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productPrice">
                    Product Price
                </label>
                <input 
                type="number" 
                // className={`form-control ${errors.productPrice ? "is-invalid" : ""}`} 
                name="productPrice" 
                value={formik.values.productPrice} 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                className={
                    formik.errors.productPrice && formik.touched.productPrice
                        ? 'form-control mt-1 is-invalid'
                        : 'form-control mt-1'
                }
                />
                {formik.errors.productPrice && formik.touched.productPrice && (
                        <small className='text-danger'>{formik.errors.productPrice}</small>
                )}
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