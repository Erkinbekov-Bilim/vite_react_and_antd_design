import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Typography, Button, Flex } from 'antd'

const UserPage = () => {

    const [user, setUser] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()


    const getUser = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.data
        setUser(data)
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div>
            <Card title="Card title" variant="borderless" style={{ width: 300 }} key={user.id}>
                <Flex gap="middle" vertical>
                    <Typography>Name: {user.name}</Typography>
                    <Typography>ID: {user.id}</Typography>
                    <Typography>Email: {user.email}</Typography>
                    <Button color='cyan' variant='filled' onClick={() => navigate(-1)}>Back to users</Button>
                </Flex>
            </Card>
        </div>
    )
}

export default UserPage
