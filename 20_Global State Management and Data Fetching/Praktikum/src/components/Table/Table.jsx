import { Link } from "react-router-dom";
import Button from "../../elements/Button/Button";
import { useContext, useState } from "react";
import ProductsContext from "../../context/ProductsContext";
import TableItem from "./TableItem";

const Table = () => {
    const { products, setProducts } = useContext(ProductsContext)

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
                    {products?.map((table) => (
                        <TableItem key={table.productId} table={table} />
                    ))
                    }
                </tbody>
            </table>
            <input
                type="text"
                id="inputCari"
                placeholder="Search by Product Name"
                className="form-control w-25"
            />
            <div className="mt-3">
                <Button
                    type="button"
                    className="btn btn-primary"
                    label="Deletion"
                />
                <Button
                    type="button"
                    className="btn btn-outline-primary"
                    label="Search"
                />
            </div>
        </div>
    );
}

export default Table;