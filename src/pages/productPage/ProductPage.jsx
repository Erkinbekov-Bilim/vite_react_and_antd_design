import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Typography, Image, Button, Flex } from 'antd'

const ProductPage = () => {

    const [product, setProduct] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()


    const getProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const data = await response.data
        setProduct(data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <Card
                hoverable
                style={{
                width: 240,
                }}
                cover={<Image width={230} height={240} alt="error" src={product.image} />}>
                <Flex gap="middle" vertical>
                    <Typography><strong>Title:</strong> {product.title}</Typography>
                    <Typography><strong>Price: </strong> {product.price}</Typography>
                    <Typography><strong>Category: </strong> {product.category}</Typography>
                    <Button color='cyan' variant='filled' onClick={() => navigate(-1)}>Back to products</Button>
                </Flex>
            </Card>
        </>
    )
}

export default ProductPage
