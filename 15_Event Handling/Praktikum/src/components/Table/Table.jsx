
const Table = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">List Product</h2>
            <table className="table table-striped w-75" id="data-table">
            <thead>
                <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Image of Product</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
                <th scope="col">Product Price</th>
                </tr>
            </thead>
            <tbody></tbody>
            </table>
            <input
            type="text"
            id="inputCari"
            placeholder="Search by Product Name"
            className="form-control w-25"
            />
            <div className="mt-3">
                <button type="button" className="btn btn-primary" >
                    Deletion
                </button>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                >
                    Search
                </button>
            </div>
        </div>
    );
}

export default Table;