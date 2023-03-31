import {React,useEffect,useState} from 'react';
import axios from 'axios';
import TemperatureChart from "../../components/chart/TemperatureChart";
import "./TemperHumi.css"



// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
 
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  




function TemperHumi()
{
    // lấy dữ liệu nhiệt độ và độ ẩm từ API 
    const [tempers,setTemper]= useState([]);
    const [humis,setHumi]= useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            axios 
            .get('https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/humidity/data')
            .then(response => setHumi(response.data))
            .catch(error => console.error(error))
            axios 
            .get('https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/temperature/data')
            .then(response => setTemper(response.data))
            .catch(error => console.error(error))
        },10000)

    },[tempers]);
    var clockTemper = tempers.length==0 ? 0 : tempers[0].value;
    var clockHumi= humis.length==0 ? 0 : humis[0].value;
    var colorTemper = clockTemper < 15 || clockTemper > 50 ? "#ff6384" : '#3ecdef';
    var colorHumi = clockHumi < 20 || clockHumi > 80 ? "#ff6384" : '#3ecdef';

    // xử lý dữ liệu đồ thị
    
    var data1 =[]
    var data2 =[]
    if (tempers.length > 0)
    {
      for (var i= 23; i>=0; i--)
      {
        data2.push(humis[i].value);
        data1.push(tempers[i].value);
        
      }
    }
    
    return (
        <div className="temperHumi">
            <div className="temperHumi__left">
                <div className='temperHumi__left-heading'>
                    |
                </div>
                <div className='temperHumi__left-chart'>
                    <TemperatureChart data1={data1} data2={data2}/>
                </div>
               
            </div>
            <div className="temperHumi__right">
                <h2 className='temperHumi__right-heading'>inFormaTion</h2>
                <div className='temperHumi__right-clock'>
                    <div className='clock-temperature'>
                    <CircularProgressbar
                        value={clockTemper}
                        text={`${clockTemper}°C`}
                        strokeWidth={8}
                        styles={buildStyles({
                            
                            pathColor: colorTemper,
                            // {
                            //     if (clockTemper < 15 || clockTemper > 50)  "#ff6384"
                            //     else '#3ecdef'
                            // } ,//`rgba(62, 205, 239, ${percentage * 100})`,
                            textColor: '#f4f3f5',
                            textSize:'25px',
                            trailColor: '#19203b',
                            backgroundColor: 'red',
                            
                          })}
                    />
                  

                    {/* <div>
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g class="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                        </svg>
                    </div> */}

                    </div>
                    <div className='clock-humidity'>
                    <CircularProgressbar
                        value={clockHumi}
                        text={`${clockHumi}%`}
                        strokeWidth={8}
                        styles={buildStyles({
                            
                            pathColor: colorHumi, //`rgba(137, 233, 233, ${percentage / 100})`,
                            textColor: '#f4f3f5',
                            textSize:'25px',
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


export default TemperHumi;