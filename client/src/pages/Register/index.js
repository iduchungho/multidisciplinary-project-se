import "./Register.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
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
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            const type = 'user';
            // const filePath = '../../assets/images/avatar.png';
            // let img = await localFileToObject(filePath)
            // console.log(img)
            let img = "none";
            formData.append('type', type);
            formData.append('id', phonenumber);
            formData.append('firstname', firstname);
            formData.append('lastname', lastname);
            formData.append('username', username);
            formData.append('password', password);
            formData.append('avatar', img);
            let response = await register(formData, dispatch, navigate);
            console.log(response.data); // chuỗi token trả về từ server
            alert('Đăng ký tài khoản thành công');
            navigate('/');
        } catch (error) {
            console.error(error);
            alert('Đăng ký tài khoản thất bại');
            navigate('/register')
        }
    };
    return (
        <div className='register'>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={handleSubmit}>
                            <h2>Sign up</h2>
                            <div className="box-name">
                                <div className="inputbox">
                                    <input type="text" onChange={(event) => setFirstname(event.target.value)} />
                                    <label >First Name</label>
                                </div>
                                <div className="inputbox">
                                    <input type="text" onChange={(event) => setLastname(event.target.value)} />
                                    <label >Lastname</label>
                                </div>
                            </div>
                            <div className="inputbox">
                                <input type="text" onChange={(event) => setPhonenumber(event.target.value)} />
                                <label>Phonenumber</label>
                            </div>
                            <div className="inputbox">
                                <input type="text" onChange={(event) => setUsername(event.target.value)} />
                                <label>Username</label>
                            </div>
                            <div className="inputbox">
                                <input type="password" onChange={(event) => setPassword(event.target.value)} />
                                <label >Password</label>
                            </div>
                            <div className="register-btn-wrap">
                                <button className="sign-up">Sign up</button>
                                <div>
                                    <Link className ="register-link" to="/">Had an account</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Register;