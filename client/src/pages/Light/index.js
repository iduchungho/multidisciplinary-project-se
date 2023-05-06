import { React, useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { putmessage } from "../../redux/apiRequest";
import { ToastContainer, toast } from 'react-toastify';
import {updatelight} from "../../redux/apiRequest"
import LightChart from "../../components/chart/LightChart"
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";



import "react-circular-progressbar/dist/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import "./Light.css"








const showToastLight = () => {
    toast.error(' Độ sáng vượt quá ngưỡng cho phép!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
};


async function errorLight(lights,id)
{
  
    var dataLight = lights.length==0 ? 0 : lights[0].value; 
    if (dataLight < 20 || dataLight > 400)
    {
        showToastLight()
        let message ={
            content:"độ sáng vượt quá ngưỡng cho phép !",
            type:"3"
        }
        putmessage(message,id)
    }
    
    

}

function putMessageFilter(id)
{
    let message = {
        content: "filter",
        type: "1"
    }
    putmessage(message,id)
}


function Light() {


    const user = useSelector((state) => state.auth_.login?.currentUser)

    // lấy dữ liệu nhiệt độ và độ ẩm từ API 
    const dispatch = useDispatch()
    let light = useSelector((state)=>state.IoT.light)
    const [lights, setLight] = useState([]);
    useEffect(() => {
        const intervalId = setInterval(async () => {
            try
            {
                await updatelight(dispatch)
                await setLight(light)
            }
            catch(e) {
               
                console.log(e)
            }
            setTimeout(()=>console.log(),10000)
            errorLight(lights, user.data.id)

          }, 5000);
          return () => clearInterval(intervalId);
    }, [lights]);
    var clockLight = lights.length == 0 ? 0 : lights[0].value;
    console.log(clockLight/200*100)
    var colorLight = "rgb(236, 241, 50)";

    // xử lý dữ liệu đồ thị
    var data = []
    if (lights.length > 0) {
        for (var i = 23; i >= 0; i--) {
            data.push(lights[i].value);
        }
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
                            value={clockLight/500*100}
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
                    autoClose={5000}
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

                    <input className='filter__input' type="date" />
                    <button className='filter__btn' onClick={putMessageFilter}>
                        <i className="filter__icon fa-solid fa-filter"></i>
                    </button>

                </div>
            </div>
        </div>
    )
}
export default Light;