
const Form = () => {            
    return (
        <form className="container mt-5 w-50" id="productForm">
            <h2>Detail Product</h2>
            <div className="mb-4 mt-4 w-50">
                <label className="form-label has-success" htmlFor="productName">
                    Product Name
                </label>
                <input type="text" id="productName" className="form-control nama" />
                <small id="nameError" className="text-danger" />
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productCathegory">
                    Product Cathegory
                </label>
                <select
                    id="productCathegory"
                    className="form-select"
                    aria-label="Default select example">
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
                <label className="form-label" htmlFor="imageProduct">
                    Image of Product
                </label>
                <input className="form-control" id="imageProduct" type="file" />
                <small id="imageError" className="text-danger" />
            </div>
            <div className="mb-4">
                    <label className="form-label" htmlFor="productFreshness">
                        Product Freshness
                    </label>
                <div className="form-check">
                    <input
                    id="new"
                    name="freshness"
                    className="form-check-input"
                    type="radio"
                    defaultValue="Brand New"
                    />
                    <label className="form-check-label">Brand New</label>
                </div>
                <div className="form-check">
                    <input
                    id="second"
                    name="freshness"
                    className="form-check-input"
                    type="radio"
                    defaultValue="Second Hand"
                    />
                    <label className="form-check-label">Second Hand</label>
                </div>
                <div className="form-check">
                    <input
                    id="refurbished"
                    name="freshness"
                    className="form-check-input"
                    type="radio"
                    defaultValue="Refurbished"
                    />
                    <label className="form-check-label">Refurbished</label>
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
                    id="productDesc"
                    defaultValue={""}
                />
                <small id="descError" className="text-danger" />
            </div>
            <div className="mb-4 w-50">
                <label className="form-label" htmlFor="productPrice">
                    Product Price
                </label>
                <input type="number" className="form-control" id="productPrice" />
                <small id="priceError" className="text-danger" />
            </div>
            <button
            type="submit"
            id="submitButton"
            className="btn btn-primary w-100 mt-5"
            >
            Submit
            </button>
        </form>
    );
}

export default Form;