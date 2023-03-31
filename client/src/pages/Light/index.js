import { React, useEffect, useState } from 'react';
import axios from 'axios';
import LightChart from "../../components/chart/LightChart";
import "./Light.css"
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles

} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Light() {
    // lấy dữ liệu nhiệt độ và độ ẩm từ API 
    const [lights, setLight] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            axios
                .get('https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/light/data')
                .then(response => setLight(response.data))
                .catch(error => console.error(error))
        }, 3000)

    }, [lights]);
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