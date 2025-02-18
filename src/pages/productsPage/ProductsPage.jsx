import { useEffect, useState } from "react"
import axios from "axios"
import classes from "./ProductsPage.module.scss"
import { Card, Typography, Spin, Image } from 'antd'
import "../../index.css"
import { Link } from "react-router-dom"


const API = "https://fakestoreapi.com/products"

const ProductsPage = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const getProducts = async () => {
        setLoading(true)
        const response = await axios.get(API)
        const data = await response.data
        setProducts(data)
        setLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <>
            {loading && (
                <div className="spin">
                    <Spin size="large"/>
                </div>
            )}
            <div className={classes.product_card}>
                {
                    products.map((product) => (
                        <Card
                            key={product.id}
                            hoverable
                            style={{
                            width: 240,
                            }}
                            cover={<Image width={230} height={240} alt="error" src={product.image} />}>
                            <Link to={`/products/${product.id}`}>Title: {product.title}</Link>
                            <Typography><strong>Price: </strong> {product.price}</Typography>
                            <Typography><strong>Category: </strong> {product.category}</Typography>
                        </Card>
                    ))
                }
            </div>
        </>
    )
}

export default ProductsPage
