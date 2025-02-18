import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { Card, Typography, Button, Spin } from 'antd'
import classes from "./UsersPage.module.scss"
import "../../index.css"


const API = "https://jsonplaceholder.typicode.com/users"
const UsersPage = () => {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)


    const getUsers = async () => {
        setLoading(true)
        const response = await axios.get(API)
        const data = await response.data
        setUsers(data)
        setLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, [])




    return (
        <>
        {loading && (
            <div className="spin">
                <Spin size="large"/>
            </div>
        )}
            <Button color='cyan' variant='filled' onClick={() => navigate('/')}>Create User</Button>
            <div className={classes.user_card}>
                {
                    users.map((user) => (
                    <Card title="Card title" variant="borderless" style={{ width: 300 }} key={user.id}>
                        <Link to={`/users/${user.id}`}>Name: {user.name}</Link>
                        <Typography>ID: {user.id}</Typography>
                        <Typography>Email: {user.email}</Typography>
                    </Card>
                    ))
                }
            </div>
        </>
    )
}

export default UsersPage
