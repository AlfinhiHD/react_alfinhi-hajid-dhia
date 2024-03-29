import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../elements/Button/Button"
import ProductsContext from "../../context/ProductsContext"
import { useDispatch } from "react-redux"
import { deleteProduct, editProduct } from "../../redux/products/productsSlice"
import axios from "axios";

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

        const urlEdit = `https://64318b893adb1596516ee16e.mockapi.io/products/${tempdata.productId}`
        axios.put(urlEdit, {
            productName: tempdata.productName,
            productCathegory: tempdata.productCathegory,
            productImage: tempdata.productImage,
            productFreshness: tempdata.productFreshness,
            productDesc: tempdata.productDesc,
            productPrice: tempdata.productPrice
        })
        .then((response) => (
            console.log(response.data)
        ))
        .catch((error) => console.log(error))
    }

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            dispatch(deleteProduct(id))

            const urlDelete = `https://64318b893adb1596516ee16e.mockapi.io/products/${id}`

            axios.delete(urlDelete)
            .then((response) => {
            console.log(response)
            })
            .catch((error) => console.log(error))
        }
    }

    return (
        <tr className={isEditing && "bg-primary"}>
            <td>
                <Link 
                    className={isEditing && "text-white border-2 border-danger"} 
                    to={`/detailproduct/${table.productId}`}
                >
                    {table.productId}
                </Link>
            </td>
            <td 
                className={isEditing && "text-white"} 
                suppressContentEditableWarning={true} 
                onInput={(e) => setTempData(prev => ({ ...prev, productName: e.target.textContent }))} 
                contentEditable={isEditing} >
                    {table.productName}
            </td>
            <td 
                className={isEditing && "text-white"} 
                suppressContentEditableWarning={true} 
                onInput={(e) => setTempData(prev => ({ ...prev, productCathegory: e.target.textContent }))} 
                contentEditable={isEditing} >
                    {table.productCathegory}
            </td>
            <td 
                className={isEditing && "text-white"} 
                suppressContentEditableWarning={true} 
                onInput={(e) => setTempData(prev => ({ ...prev, productFreshness: e.target.textContent }))} 
                contentEditable={isEditing} >
                    {table.productFreshness}
            </td>
            <td 
                className={isEditing && "text-white"} 
                suppressContentEditableWarning={true} 
                onInput={(e) => setTempData(prev => ({ ...prev, productPrice: e.target.textContent }))} 
                contentEditable={isEditing} >
                    {table.productPrice}
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