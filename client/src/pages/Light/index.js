import { React, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updatelight, getlight } from "../../redux/apiRequest"
import LightChart from "../../components/chart/LightChart"
import "./Light.css"
import { useSelector, useDispatch } from "react-redux"
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";







const showToastLight = () => {
    toast.error(' Ánh sáng vượt quá ngưỡng cho phép!', {
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


async function errorLight(light) {
    if (light.value < 20 || light.value > 400) {
        showToastLight()
    }
}

function Light() {
    // lấy dữ liệu nhiệt độ và độ ẩm từ API 
    const dispatch = useDispatch()
    let getlights = useSelector((state) => state.IoT.light)
    const [lights, setLights] = useState(getlights)
    const [light, setLight] = useState(0);
    const [filter,setFilter]= useState(0);
    const [selectdate, setSelectdate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                let date = new Date()
                let year = date.getFullYear()
                let month = date.getMonth() + 1
                let day = date.getDate()
                let temp = `${year}${month}${day}`
                let latest = await updatelight(dispatch, temp)
                setLight(latest)
                if (filter == 0) {
                    setLights(getlights)
                    console.log("Run")
                }
                errorLight(latest) 
                console.log("Run1")
            }
            catch (e) {
                console.log(e)
            }
        }, 5000);
        return () => clearInterval(intervalId);
    }, [lights]);
    var clockLight = light==0?0:light.value;
    var colorLight = "rgb(236, 241, 50)";

    // xử lý dữ liệu đồ thị
    var data = []
    if (lights.length > 0) {
        for (var i = 0; i <= 23; i++) {
            data.push(lights[i].value);
        }
    }
    const handlefilter = async () => {
        let date = new Date(selectdate)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let temp = `${year}${month}${day}`
        let currentday = new Date().getDate()
        if (currentday == day) setFilter(0)
        else setFilter(1)
        let newlights = await getlight(temp)
        setLights(newlights)
    }
    return (
        <div className="Light">
            <div className="Light__left">
                <div className='Light__left-heading'>
                    |
                </div>
                <div className='Light__left-chart'>
                    <LightChart data={data} />
                </div>

            </div>
            <div className="Light__right">
                <h2 className='Light__right-heading'>Clock</h2>
                <div className='Light__right-clock'>
                    <div className='clock-temperature'>
                        <CircularProgressbar
                            value={clockLight / 500 * 100}
                            text={`${clockLight}%`}
                            strokeWidth={8}
                            styles={buildStyles({
                                pathColor: colorLight,
                                textColor: '#f4f3f5',
                                textSize: '25px',
                                trailColor: '#19203b',
                                backgroundColor: 'red',
                            })}
                        />
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
                <div className='filter'>
                    <input className='filter__input' type="date" onChange={(e) => {setSelectdate(e.target.value)}} />
                    <button className='filter__btn' onClick={handlefilter}>
                        <i className="filter__icon fa-solid fa-filter"></i>
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Light;