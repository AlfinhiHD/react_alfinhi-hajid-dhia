import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Button from "../../elements/Button/Button"
import ProductsContext from "../../context/ProductsContext"
import { useDispatch } from "react-redux"
import { deleteProduct, editProduct } from "../../redux/products/productsSlice"
import { gql, useMutation } from "@apollo/client"

const TableItem = ({ table }) => {

    // const { products, setProducts } = useContext(ProductsContext)
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false)
    const [tempdata, setTempData] = useState({})

    // console.log(tempdata)

    const UpdateProduct = gql`
    mutation MyMutation($id: String!, $object: Product_set_input!) {
        update_Product_by_pk(pk_columns: {id: $id}, 
        _set: $object) {
          id
          name
          price
        }
      }
    `;

    const GetProductList = gql`
    query ProductQuery {
        Product {
        id
        name
        price
        category
        description
        image
        freshness
        }
    }
    `;

    const HapusProduct = gql`
        mutation MyQuery($id: String!) {
        delete_Product_by_pk(id: $id) {
            id
        }
        }
    `;

    const [hapusProduct] = useMutation(HapusProduct, {
        refetchQueries: [{ query: GetProductList}],
    });

    const [updateProduct] = useMutation(UpdateProduct, {
        refetchQueries: [{ query: GetProductList}],
    });


    const editHandler = (table) => {
        setIsEditing(true)
        setTempData(table)
    }

    const saveHandler = () => {
        setIsEditing(false)
        console.log(tempdata)
        dispatch(editProduct(tempdata))
        updateProduct({
            variables: {
                id: tempdata.id,
                object: {
                    name: tempdata.name,
                    price: tempdata.price,
                    freshness: tempdata.freshness,
                    category: tempdata.category
                }
            },
        });

    }

    const deleteHandler = (id) => {

        console.log(id)

        if (window.confirm('Are you sure you want to delete this item?')) {
            dispatch(deleteProduct(id))

            hapusProduct({
                variables: {
                    id: id
                }
            })

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
                onInput={(e) => setTempData(prev => ({ ...prev, name: e.target.textContent }))}
                contentEditable={isEditing} >
                {table.name}
            </td>
            <td
                className={isEditing && "text-white"}
                suppressContentEditableWarning={true}
                onInput={(e) => setTempData(prev => ({ ...prev, category: e.target.textContent }))}
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
                onInput={(e) => setTempData(prev => ({ ...prev, freshness: e.target.textContent }))}
                contentEditable={isEditing} >
                {table.freshness}
            </td>
            <td
                className={isEditing && "text-white"}
                suppressContentEditableWarning={true}
                onInput={(e) => setTempData(prev => ({ ...prev, price: e.target.textContent }))}
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
                    onClick={() => deleteHandler(table.id)}
                    className="btn btn-danger"
                    label="Delete" />
            </td>

        </tr>
    )
}

export default TableItem