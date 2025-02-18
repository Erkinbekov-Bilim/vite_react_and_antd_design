import axios from "axios"
import { useState } from "react"
import { Button, Form, Input, Flex} from "antd"
import { Alert } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 32 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 32 },
        sm: { span: 14 },
    },
};

const onClose = (e) => {
    console.log(e, 'I was closed.');
};

const MainPage = () => {


    const [form] = Form.useForm();
    const variant = Form.useWatch('variant', form);
    const [warningMessage, setWarningMessage] = useState(null)


    
    const [newStudent, setNewStudent] = useState({
        name: "",
        username: "",
        email: "",
    })

    

    const inputChange = (event) => {
        const { name, value } = event.target
        setNewStudent({
            ...newStudent,
            [name]: value
        })
        console.log(`${name} - ${value}`);
        
    }


    const postUser = async () => {
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/users", newStudent)
            setNewStudent({
                name: "",
                username: "",
                email: "",
            })
            const data = await response.data
            console.log(data)
            console.log(newStudent);
            setWarningMessage(false)
            
        }catch(error) {
            setWarningMessage(true)
            console.log(error);
            
        }
    }


    return (
        <div>
            {
            warningMessage !== null && (
                    <Alert
                        message={warningMessage ? "Warning" : "Success"}
                        description={warningMessage ? "Please fill in all fields" : "User created successfully."}
                        type={warningMessage ? "warning" : "success"}
                        closable
                        onClose={onClose}
                    />
                )
            }
            <Form
                {...formItemLayout}
                form={form}
                variant={variant || 'filled'}
                style={{ maxWidth: 600 }}
                initialValues={{ variant: 'filled' }}
                onFinish={postUser}
                >
                <Flex gap="middle" vertical>
                    <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name' }]}>
                        <Input onChange={inputChange} name="name" value={newStudent.name}/>
                    </Form.Item>

                    <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username' }]}>
                        <Input onChange={inputChange} name="username" value={newStudent.username}/>
                    </Form.Item>

                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email', type: 'email' }]}>
                        <Input onChange={inputChange} name="email" value={newStudent.email}/>
                    </Form.Item>

                    <Form.Item label={null} name="submit">
                        <Button color="purple" variant="outlined" htmlType="submit">
                            Create user
                        </Button>
                    </Form.Item>
                </Flex>
            </Form>
        </div>
    )
}

export default MainPage
