import {React,useEffect,useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TemperatureChart from "../../components/chart/TemperatureChart";
import "./TemperHumi.css"



// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles
 
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const showToastTemper = () => {
    toast.error('Nhiệt độ vượt quá ngưỡng cho phép!', {
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
const showToastHumi = () => {
    toast.error(' Độ ẩm vượt quá ngưỡng cho phép!', {
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




async function errorTemper(tempers)
{
  
    var dataTemper = tempers.length==0 ? 0 : tempers[0].value; 
    if (dataTemper < 15 || dataTemper > 50)
    {
        showToastTemper()
    }
    
    

}

async function errorHumi(humis)
{
   
    var dataHumi= humis.length==0 ? 0 : humis[0].value;
    if (dataHumi < 20 || dataHumi > 80)
    showToastHumi()
  


}

function TemperHumi()
{
    // lấy dữ liệu nhiệt độ và độ ẩm từ API 
    const [tempers,setTemper]= useState([]);
    const [humis,setHumi]= useState([]);
    
    useEffect(()=>{
        setTimeout(()=>{
            axios 
            .get('https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/humidity/data')
            .then(response => 
                {
                    setHumi(response.data)
                   
                    
                })
            .catch(error => console.error(error))
            axios 
            .get('https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/temperature/data')
            .then(response =>{
                setTemper(response.data)
            })
            .catch(error => console.error(error))

          
           
        },5000)

        setTimeout(()=>console.log(),10000)
        errorTemper(tempers)

        setTimeout(()=>console.log(),10000)
        errorHumi(humis)

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
                            textSize:'25px',
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
                            textSize:'25px',
                            trailColor: '#19203b',
                            backgroundColor: 'red',
                            
                          })}
                    />
                    </div>
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
                    {/* Same as */}

                <div className='filter'>
                    {/* <h2 className='filter'>Filter </h2> */}
                    <input className='filter__input' type="date" />
                    <button className='filter__btn'>
                        <i className="filter__icon fa-solid fa-filter"></i>
                    </button>
                   
                </div>
            </div>
        </div>
    )
}


export default TemperHumi;