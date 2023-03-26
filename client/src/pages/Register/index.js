import "./Register.css";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
async function localFileToObject(filePath) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', filePath, true);
        xhr.responseType = 'blob';
        xhr.onload = function (event) {
            if (xhr.status !== 200) {
                console.error('Không thể tải nội dung từ đường dẫn:', filePath, xhr.statusText);
                reject(xhr.statusText);
            } else {
                const blob = new Blob([xhr.response]);
                const file = new File([blob], filePath.split('/').pop(), { type: blob.type });
                resolve(file);
            }
        };
        xhr.onerror = function () {
            reject(xhr.statusText);
        }
        xhr.send();
    });
}
function Register() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [phonenumber, setPhonenumber] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            const type = 'user';
            const filePath = '../../assets/images/avatar.png';
            let img = await localFileToObject(filePath)
            console.log(img)
            formData.append('type', type);
            formData.append('id', phonenumber);
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('avatar', img);
            console.log(formData);
            let response = await axios.post('http://localhost:8080/api/user/new', formData);
            console.log(response.data); // chuỗi token trả về từ server
            alert('Đăng ký tài khoản thành công');
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div class='register'>
            <section>
                <div class="form-box">
                    <div class="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign up</h2>
                            <div className="box-name">
                                <div class="inputbox">
                                    <input type="text" onChange={(event) => setFirstname(event.target.value)} />
                                    <label >First Name</label>
                                </div>
                                <div class="inputbox">
                                    <input type="text" onChange={(event) => setLastname(event.target.value)} />
                                    <label >Lastname</label>
                                </div>
                            </div>
                            <div class="inputbox">
                                <input type="text" onChange={(event) => setPhonenumber(event.target.value)} />
                                <label>Phonenumber</label>
                            </div>
                            <div class="inputbox">
                                <input type="text" onChange={(event) => setUsername(event.target.value)} />
                                <label>Username</label>
                            </div>
                            <div class="inputbox">
                                <input type="password" onChange={(event) => setPassword(event.target.value)} />
                                <label >Password</label>
                            </div>
                            <div class="forget">
                                <label for=""><input type="checkbox" />Remember Me <a
                                    href="#">Forget Password</a></label>
                            </div>
                            <button className="sign-up">Sign up</button>
                        </form>
                    </div>
                </div>
            </section>
            <script type="module"
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script noModule
                src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}
export default Register;