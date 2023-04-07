import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../elements/Button/Button"
import ProductsContext from "../../context/ProductsContext"
import { useDispatch } from "react-redux"
import { deleteProduct, editProduct } from "../../redux/products/productsSlice"

const TableItem = ({ table }) => {
    // const { products, setProducts } = useContext(ProductsContext)

    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false)
    const [tempdata, setTempData] = useState({})


    const editHandler = (table) => {
        setIsEditing(true)
        setTempData(table)
    }

    const saveHandler = () => {
        setIsEditing(false)
        dispatch(editProduct(tempdata))
    }

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            dispatch(deleteProduct(id))
        }
    }

    return (
        <tr className={isEditing && "bg-primary"}>
            <td>
                <Link
                    className={isEditing && "text-white border-2 border-danger"}
                    to={`/detailproduct/${table.id}`}
                >
                    {table.id}
                </Link>
            </td>
            <td
                className={isEditing && "text-white"}
                suppressContentEditableWarning={true}
                onInput={(e) => setTempData(prev => ({ ...prev, productName: e.target.textContent }))}
                contentEditable={isEditing} >
                {table.name}
            </td>
            <td
                className={isEditing && "text-white"}
                suppressContentEditableWarning={true}
                onInput={(e) => setTempData(prev => ({ ...prev, productCathegory: e.target.textContent }))}
                contentEditable={isEditing} >
                {table.category}
            </td>
            <td>
                <img
                    style={{ width: '300px', height: '200px' }}
                    src={table.image}
                    alt="image.jpg"
                />
            </td>
            <td
                className={isEditing && "text-white"}
                suppressContentEditableWarning={true}
                onInput={(e) => setTempData(prev => ({ ...prev, productFreshness: e.target.textContent }))}
                contentEditable={isEditing} >
                {table.freshness}
            </td>
            <td
                className={isEditing && "text-white"}
                suppressContentEditableWarning={true}
                onInput={(e) => setTempData(prev => ({ ...prev, productPrice: e.target.textContent }))}
                contentEditable={isEditing} >
                {table.price}
            </td>
            <td>
                {isEditing ?
                    (<Button
                        onClick={() => saveHandler()}
                        className="btn btn-success"
                        label="Save" />)
                    :
                    (<Button
                        onClick={() => editHandler(table)}
                        className="btn btn-warning"
                        label="Edit" />)
                }
            </td>
            <td>
                <Button
                    onClick={() => deleteHandler(table.productId)}
                    className="btn btn-danger"
                    label="Delete" />
            </td>

        </tr>
    )
}

export default TableItem