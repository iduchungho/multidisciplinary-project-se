import { React, useEffect, useState } from 'react';
import {update} from "../../redux/apiRequest"
import LightChart from "../../components/chart/LightChart"
import "./Light.css"
import {useSelector, useDispatch} from "react-redux"
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Light() {
    // lấy dữ liệu nhiệt độ và độ ẩm từ API 
    const dispatch = useDispatch()
    let light = useSelector((state)=>state.IoT.light)
    const [lights, setLight] = useState([]);
    useEffect(() => {
        const intervalId = setInterval(async () => {
            try
            {
                await update(dispatch)
                await setLight(light)
                console.log("Light 1", light)
            }
            catch(e) {
                console.log("Light 2", light)
                console.log(e)
            }
          }, 5000);
          return () => clearInterval(intervalId);
    }, []);
    var clockLight = lights.length == 0 ? 0 : lights[0].value;
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
                <h2 className='Light__right-heading'>Light Information</h2>
                <div className='Light__right-clock'>
                    <div className='clock-temperature'>
                        <CircularProgressbar
                            value={clockLight}
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
                </div>
            </div>
        </div>
    )
}
export default Light;