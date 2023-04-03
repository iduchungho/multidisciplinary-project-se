import './Login.css'
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        try {
            let response = await axios.post('http://localhost:8080/api/user/login', {
                username: username,
                password: password,
            });
            console.log(response.data); // chuỗi token trả về từ server
            let data = response.data.data;
            let fullname = data.firstname + data.lastname
            let user = {
                username: fullname,
                avatar: data.avatar
            }
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Đăng nhập thất bại')
            navigate('/login');
        }
    };
    return (
        <div className='login'>
            <section>
                <div className="form-loginbox">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Login</h2>
                            <div className="inputbox">
                                <input type="text" onChange={(event) => setUsername(event.target.value)} />
                                <label>Email</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" onChange={(event) => setPassword(event.target.value)} />
                                <label>Password</label>
                            </div>
                            <button type="submit" className='login-btn'>Log in</button>
                            <div className="register-block">
                                <p>Don't have an account <a href="/register">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login;