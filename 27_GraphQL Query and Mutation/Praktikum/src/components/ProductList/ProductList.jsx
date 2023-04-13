import './ProductList.css'
import Card from "../Card/Card";

import { gql, useMutation, useQuery } from "@apollo/client"

const GetProductList = gql`
query MyQuery {
    Product {
    category
    name
    id
    image
    price
    freshness
    description
    }
}`;

const ProductList = () => {

    const { data, loading, error } = useQuery(GetProductList)

    return (
        <>
            <section className="productlist mt-3 mb-5">
                <div>
                    <h3>Product List</h3>
                    <p>
                        Berisi list product yang telah di buat di halaman create product.
                    </p>
                    <div className="container mx-auto">
                        <div className="mycard row w-100 justify-content-center">
                            {/* <div className="col-sm-4"> */}
                                {data?.Product.map((card) => (
                                    <Card key={card.id} card={card} />
                                ))
                                }
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductList