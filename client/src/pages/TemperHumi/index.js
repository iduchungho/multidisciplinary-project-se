import { React, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TemperatureChart from "../../components/chart/TemperatureChart";
import "./TemperHumi.css"
import { useSelector, useDispatch } from "react-redux"
import { updatetemperhumid, gettemper, gethumid } from '../../redux/apiRequest';
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles

} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


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




async function errorTemper(temper) {
    if (temper < 15 || temper > 50) {
        showToastTemper()
    }
}

async function errorHumi(humi) {

    if (humi < 20 || humi > 80)
        showToastHumi()
}

function TemperHumi() {
    // lấy dữ liệu nhiệt độ và độ ẩm từ API 
    const dispatch = useDispatch()
    let gettempers = useSelector((state) => state.IoT.temperature)
    let gethumids = useSelector((state) => state.IoT.humidity)
    const [tempers, setTempers] = useState(gettempers);
    const [humis, setHumis] = useState(gethumids);
    const [temper, setTemper] = useState(0);
    const [humid, setHumid] = useState(0);
    const [filter, setFilter] = useState(0);
    const [selectdate, setSelectdate] = useState(new Date());
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
                setHumid(latest.humid)
                if (filter == 0) {
                    setTempers(gettempers)
                    setHumis(gethumids)
                    console.log("Run + Filter", filter)
                }
                console.log("Run1", filter)
                errorTemper(temper)
                errorHumi(humid)
            }
            catch (e) {
                console.log("Fail", e)
            }
        }, 5000);
        return () => clearInterval(intervalId);
    }, [tempers, humis]);


    var clockTemper = temper == 0 ? 0 : temper
    var clockHumi = humid == 0 ? 0 : humid
    var colorTemper = clockTemper < 15 || clockTemper > 50 ? "#ff6384" : '#3ecdef';
    var colorHumi = clockHumi < 20 || clockHumi > 80 ? "#ff6384" : '#3ecdef';


    // xử lý dữ liệu đồ thị

    var data1 = []
    var data2 = []
    if (tempers.length > 0) {
        for (var i = 0; i <= 23; i++) {
            data1.push(tempers[i].value);
        }
    }
    if (humis.length > 0) {
        for (var i = 0; i <= 23; i++) {
            data2.push(humis[i].value);
        }
    }
    const handlefilter = async () => {
        let date = new Date(selectdate)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let temp = `${year}${month}${day}`
        let newtemper = await gettemper(temp)
        let newhumid = await gethumid(temp)
        let currentday = new Date().getDate()
        if (currentday == day) setFilter(0)
        else setFilter(1)
        setHumis(newhumid)
        setTempers(newtemper)
        console.log("Result1", temp)
        console.log("Result2", newtemper, newhumid)
        console.log("Filter", filter)
    }
    return (
        <div className="temperHumi">
            <div className="temperHumi__left">
                <div className='temperHumi__left-heading'>
                    |
                </div>
                <div className='temperHumi__left-chart'>
                    <TemperatureChart data1={data1} data2={data2} />
                </div>

            </div>
            <div className="temperHumi__right">
                <h2 className='temperHumi__right-heading'>Clock</h2>
                <div className='temperHumi__right-clock'>
                    <div className='clock-temperature'>
                        <CircularProgressbar
                            value={clockTemper}
                            text={`${clockTemper}°C`}
                            strokeWidth={8}
                            styles={buildStyles({

                                pathColor: colorTemper,
                                textColor: '#f4f3f5',
                                textSize: '25px',
                                trailColor: '#19203b',
                                backgroundColor: 'red',

                            })}
                        />

                    </div>
                    <div className='clock-humidity' >
                        <CircularProgressbar

                            value={clockHumi}
                            text={`${clockHumi}%`}
                            strokeWidth={8}
                            styles={buildStyles({

                                pathColor: colorHumi, //`rgba(137, 233, 233, ${percentage / 100})`,
                                textColor: '#f4f3f5',
                                textSize: '25px',
                                trailColor: '#19203b',
                                backgroundColor: 'red',

                            })}
                        />
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
                {/* Same as */}

                <div className='filter'>
                    {/* <h2 className='filter'>Filter </h2> */}
                    <input className='filter__input' type="date" onChange={(e) => { setSelectdate(e.target.value) }} />
                    <button className='filter__btn' onClick={handlefilter}>
                        <i className="filter__icon fa-solid fa-filter"></i>
                    </button>

                </div>
            </div>
        </div>
    )
}


export default TemperHumi;