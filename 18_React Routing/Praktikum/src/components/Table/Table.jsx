import Button from "../../elements/Button/Button";

const Table = ({ tables, setTable }) => {

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            const filteredTable = tables.filter(table => table.productId != id)
            setTable([...filteredTable])
          }
    }

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
                    {tables.map((table) => (
                        <tr key={table.productId}>
                            <td>{table.productId}</td>
                            <td>{table.productName}</td>
                            <td>{table.productCathegory}</td>
                            <td>{table.productFreshness}</td>
                            <td>{table.productPrice}</td>
                            <td>
                                <Button
                                className="btn btn-warning" 
                                label="Edit"/>
                            </td>
                            <td>
                                <Button 
                                onClick={() => deleteHandler(table.productId)}
                                className="btn btn-danger" 
                                label="Delete"/>
                            </td>
                        </tr>
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