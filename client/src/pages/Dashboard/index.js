import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import mountain from "../../assets/mountain.jpg";
import water from "../../assets/water.jpg";
import { updatetemperhumid, putmessage } from '../../redux/apiRequest';
import { cameraBtn, setCamera } from '../../redux/cameraAI';

import "./Dashboard.css";
import 'react-toastify/dist/ReactToastify.css';

const showToastTemper = () => {
    toast.error('Nhiệt độ vượt quá ngưỡng cho phép!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};
const showToastHumi = () => {
    toast.error(' Độ ẩm vượt quá ngưỡng cho phép!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
};
// const store1 = new UpdateDataStore(dispatcher);
function Dashboard() {

    const dispatch = useDispatch()
    // công tắc đèn led
    const user = useSelector((state) => state.auth_.login?.currentUser)
    console.log(user)
    const [ledBtn, setLed] = useState(0);
    const clickLed = async () => {
        setLed(!ledBtn);
        let message = {
            content: "",
            type: "1"
        }
        if (ledBtn == 0) {
            message.content = "Tắt đèn"
        }
        else {
            message.content = "Bật đèn"
        }
        await putmessage(message, user.data.id)
    }

    // công tắc đèn fan
    const [fanBtn, setFan] = useState(0);
    const clickFan = async () => {
        setFan(!fanBtn);
        let message = {
            content: "",
            type: "1"
        }
        if (fanBtn == 0) {
            message.content = "Tắt quạt"
        }
        else {
            message.content = "Bật quạt"
        }
        await putmessage(message, user.data.id)
    }

    // công tắc đèn door
    const [doorBtn, setDoor] = useState(0);
    const clickDoor = () => {
        setDoor(!doorBtn);
        let message = {
            content: "",
            type: "1"
        }
        if (doorBtn == 0) {
            message.content = "Đóng cửa"
        }
        else {
            message.content = "Mở cửa"
        }
    }

    // face AI
    const [face, setFace] = useState("");
    if (face == "Bao\n" && doorBtn == 0) {
        setDoor(!doorBtn)
    }
    // Kiểm tra quá ngưỡng
    async function errorTemper (temper) {
        console.log(temper)
        if (temper < 15 || temper > 50) {
            showToastTemper()
            let message = {
                content: "Nhiệt độ quá ngưỡng",
                type: "3"
            }
            await putmessage(message, user.data.id)
        }
    }

    async function errorHumi(humi) {
        console.log(humi)
        if (humi < 20 || humi > 80) {
            showToastHumi()
            let message = {
                content: "Độ ẩm quá ngưỡng",
                type: "3"
            }
            await putmessage(message, user.data.id)
        }
    }
    // list các image room 

    const listImage = ["https://sbshouse.vn/wp-content/uploads/2021/06/bi%E1%BB%87t-th%E1%BB%B1-2-t%E1%BA%A7ng-%C4%91%E1%BA%B9p-4.jpg",
        "https://i.pinimg.com/564x/39/1f/5a/391f5ab7fc3cbc8ea4b8a7b0a094aac5.jpg",
        "https://i.pinimg.com/564x/4e/2b/fb/4e2bfb3e366780228be3e7d78b345427.jpg",
        "https://i.pinimg.com/564x/1b/4f/dd/1b4fdd6bc731b6f270c2f003507b4574.jpg",
        "https://i.pinimg.com/564x/3e/4a/6b/3e4a6b9249d6b415415e0ece0e60b315.jpg"];

    const [img, setImg] = useState(0);

    // lấy dữ liệu 

    const [tempers, setTemper] = useState([]);
    const [humis, setHumi] = useState([]);
    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                let date = new Date()
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let day = date.getDate()
                let temp = `${year}${month}${day}`
                let latest = await updatetemperhumid(dispatch, temp)
                setTemper(latest.temp)
                setHumi(latest.humid)
                await errorTemper(latest.temp)
                await errorHumi(latest.humid)
                console.log("RUN")
            }
            catch (e) {
                console.log("Fail", e)
            }
        }, 5000);
        return () => clearInterval(intervalId);
    }, [tempers]);

    useEffect(()=>{
       
        var data = { value: 0 };  
        if (ledBtn) data.value = 1;
       
        
        fetch( `${process.env.REACT_APP_API_LED}`, {
        method: 'POST',
        headers: {
            'X-AIO-Key': `${process.env.REACT_APP_X_AIO_Key}` ,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => console.log(response.status))
        .catch(error => console.error(error));
    },[ledBtn])

    useEffect(()=>{
       
        var data = { value: 0 };  
        if (fanBtn) data.value = 1;
       
        
        fetch(`${process.env.REACT_APP_API_FAN}`, {
        method: 'POST',
        headers: {
            'X-AIO-Key': `${process.env.REACT_APP_X_AIO_Key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => console.log(response.status))
        .catch(error => console.error(error));
    },[fanBtn])

    useEffect(()=>{
       
        var data = { value: 0 };  
        if (doorBtn) data.value = 1;
       
        
        fetch( `${process.env.REACT_APP_API_DOOR}`, {
        method: 'POST',
        headers: {
            'X-AIO-Key': `${process.env.REACT_APP_X_AIO_Key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => console.log(response.status))
        .catch(error => console.error(error));
    },[doorBtn])




    return (
        <div className="dashBoard">
            <div className="dashBoard__left">
                <ul className="dashBoard__left-heading">
                    <li className="heading__item" style={{ color: img == 0 ? '#b9bccc' : '#394374' }}>
                        Living room
                    </li>
                    <li className="heading__item" style={{ color: img == 1 ? '#b9bccc' : '#394374' }}>
                        Dinning room
                    </li>
                    <li className="heading__item" style={{ color: img == 2 ? '#b9bccc' : '#394374' }}>
                        Bed room
                    </li>
                    <li className="heading__item" style={{ color: img == 3 ? '#b9bccc' : '#394374' }}>
                        Bath room
                    </li>
                    <li className="heading__item" style={{ color: img == 4 ? '#b9bccc' : '#394374' }}>
                        Backyard
                    </li>
                </ul>
                <div className="dashBoard__left-content">
                    <div className="content__img">
                        <img className="image" alt="" src={listImage[img]} />
                        <div className="left-right">
                            <button className="left" onClick={() => setImg(img > 0 ? img - 1 : 4)}>
                                <i className="left-icon fa-solid fa-chevron-left"></i>
                            </button>
                            <button className="right" onClick={() => setImg(img < 4 ? img + 1 : 0)}>
                                <i className="right-icon fa-solid fa-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                    <div className="content__btn">
                        <button className="btn-led btn" style={{ backgroundColor: ledBtn && '#1babfc' }} >
                            <span className='span1'></span>
                            <span className='span2'></span>
                            <span className='span3'></span>
                            <span className='span4'></span>
                            <div className="led-border">
                                <i className="led-btn-icon fa-solid fa-lightbulb"></i>
                            </div>
                            <div className="led-text">
                                <span className="led-infor">LED</span>
                                <span className="led-connect"> {!ledBtn ? "Not Connected" : "Connected"}</span>
                            </div>
                            <label class="switch">
                                <input className="btn-switch" type="checkbox" onClick={clickLed} />
                                <span class="slider">
                                    <ul className="switch__select">
                                        <li className="switch__select-item">Off</li>
                                        <li className="switch__select-item">On</li>
                                    </ul>
                                </span>
                            </label>
                        </button>

                        <button className="btn-fan btn" style={{ backgroundColor: fanBtn && '#1babfc' }} >
                            <span className='span1'></span>
                            <span className='span2'></span>
                            <span className='span3'></span>
                            <span className='span4'></span>
                            <div className="fan-border">
                                <i className="fan-btn-icon fa-solid fa-fan"></i>
                            </div>
                            <div className="fan-text">
                                <span className="fan-infor">FAN</span>
                                <span className="fan-connect"> {!fanBtn ? "Not Connected" : "Connected"}</span>
                            </div>
                            <label class="switch">
                                <input className="btn-switch" type="checkbox" onClick={clickFan} />
                                <span class="slider">
                                    <ul className="switch__select">
                                        <li className="switch__select-item">Off</li>
                                        <li className="switch__select-item">On</li>
                                    </ul>
                                </span>
                            </label>
                        </button>

                        <button className="btn-door btn" style={{ backgroundColor: doorBtn && '#1babfc' }} >
                            <span className='span1'></span>
                            <span className='span2'></span>
                            <span className='span3'></span>
                            <span className='span4'></span>
                            <div className="door-border">
                                <i className="door-btn-icon fa-solid fa-door-closed"></i>
                            </div>
                            <div className="door-text">
                                <span className="door-infor">DOOR</span>
                                <span className="door-connect"> {!doorBtn ? "Not Connected" : "Connected"}</span>
                            </div>
                            <label class="switch">
                                <input className="btn-switch" type="checkbox" onClick={clickDoor} checked={doorBtn} />
                                <span class="slider">
                                    <ul className="switch__select">
                                        <li className="switch__select-item">Off</li>
                                        <li className="switch__select-item">On</li>
                                    </ul>
                                </span>
                            </label>
                        </button>
                    </div>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <div className="dashBoard__right">
                <div className="dashBoard__right-temper">
                    <h3 className="temper__infor">It's hot</h3>
                    <h3 className="temper__text"> {

                        tempers.length > 0 ? tempers : 0
                    }°C</h3>
                    <img src={mountain} className="temper__scene" />
                </div>
                <div className="dashBoard__right-humi">
                    <h3 className="temper__infor">High humidity</h3>
                    <h3 className="temper__text"> {
                        humis.length > 0 ? humis : 0
                    }%</h3>
                    <img src={water} className="temper__scene" />
                </div>





            </div>
        </div>

    );
}


export default Dashboard;