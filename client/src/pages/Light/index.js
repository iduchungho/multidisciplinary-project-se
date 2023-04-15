import { React, useEffect, useState } from 'react';
// import axios from 'axios';
import {update} from "../../redux/apiRequest"
import LightChart from "../../components/chart/LightChart"
// import {connect} from "mqtt";
import "./Light.css"
import {useSelector, useDispatch} from "react-redux"
// Import react-circular-progressbar module and styles
import {
    CircularProgressbar,
    buildStyles

} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Light() {
    // lấy dữ liệu nhiệt độ và độ ẩm từ API 
    const dispatch = useDispatch()
    let light = useSelector((state)=>state.IoT.light)
    light = JSON.parse(light)
    console.log("Hello", light)
    const [lights, setLight] = useState([]);
    useEffect(() => {
        // setTimeout(() => {
        //     axios
        //         .get('https://io.adafruit.com/api/v2/smartHomeIOT1/feeds/light/data')
        //         .then(response => setLight(response.data))
        //         .catch(error => console.error(error))
        // }, 10000)
        const intervalId = setInterval(() => {
            update(dispatch)
            setLight(light)
          }, 10000);
      
          return () => clearInterval(intervalId);
    }, [lights]);
    var clockLight = lights.length == 0 ? 0 : lights[0].value;
    console.log("Clock", clockLight)
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

// Dầu tiên mấy ông tạo project nodejs 

// sau đó install: npm install mqtt --save

// done

// Login Adafruit: 
    /*
    username: dangnguyen
    pass: Dang1012
    Dashboard: https://io.adafruit.com/dangnguyen/dashboards 
    feed : https://io.adafruit.com/dangnguyen/feeds
    */

    // let feed = [
    //     "tsunekiara/feeds/btnfan"
    // ]
    
    // const mqtt = require('mqtt')
    // let client = mqtt.connect({
    //     host: "io.adafruit.com",
    //     port: 1883,
    //     protocol: (parseInt(1883) === 8883 ? 'mqtts' : 'mqtt'),
    //     username: "tsunekiara",
    //     password: "aio_eCDQ29QbE0aOpIPReVfQthMjA7Vp",
    //     connectTimeout: 60 * 1000,
    //     keepalive: 3600
    //   });
    
    // client.on('connect', () => {
    //     // sub đúng kênh để nhận dữ liệu
    //     for (const topic in feed){
    //         client.subscribe(feed[topic]);
    //         console.log('connected ' + feed[topic]);
    //     }
        
    // });
    
    // client.on('reconnect', () => {
    //     for (const topic in feed){
    //         client.subscribe(feed[topic]);
    //         console.log('connected ' + feed[topic]);
    //     }
    // });
    
    // // client.on('error', (err) => console.log('error', err));
    
    // // client.on('offline', () => connected = false);
    
    // // client.on('close', () => connected = false);
    
    // client.on('message', (topic, message) => {
    //     // nó sẽ nhận được thông tin khi có tín hiệu bị thay đổi 
    //     // và nó chỉ nhận được những kênh mà nó sub, giống như youtube vậy 🙂
    
    //     // mai mốt mấy ông xử lí cái này thay vì in ra console thì mấy ông hiển thị lên sprite.
    //     // console.log(From topic: ${topic}, received: )
    //     console.log(message.toString('utf8'));
    // });
    
    // // đẩy dữ liệu lên thử server: 
    
    
    
    // // publish(topic, message, [options], [callback])
    // // client.publish("tsunekiara/feeds/btnfan", "45");
    // // // hay chỉ càn
    // // client.publish("dangnguyen/feeds/sensor2", "50");
    // // publish trên nút nhấn
    // client.publish("tsunekiara/feeds/btnfan", "ON");
    // // hay bỏ /json cũng đc
    // // client.publish("dangnguyen/feeds/button2", "ON");
    // // xong mấy ông lên kiểm tra đashboard thử log nó có ghi đúng ko
    // // Cái publish này mấy ông dùng để gán vào máy cái event khi nhấn nút, 
    // // ví dụ bấm vào công tắt quạt trên app khi đang ở trạng thái OFF thì nó sẽ ON và gửi lên server.
    // // done



// Dầu tiên mấy ông tạo project nodejs 

// sau đó install: npm install mqtt --save

// done

// Login Adafruit: 
    /*
    username: dangnguyen
//     pass: Dang1012
//     Dashboard: https://io.adafruit.com/dangnguyen/dashboards 
//     feed : https://io.adafruit.com/dangnguyen/feeds
//     */

//     const feed = [
// "tsunekiara/feeds/btnfan"
//     ]
//     // window.Buffer = window.Buffer || require("buffer").Buffer;
//     const client = mqtt.connect({
//         host: "io.adafruit.com",
//         port: 1883,
//         protocol: (parseInt(1883) === 8883 ? 'mqtts' : 'mqtt'),
//         username: "tsunekiara",
//         password: "aio_eCDQ29QbE0aOpIPReVfQthMjA7Vp",
//         connectTimeout: 60 * 1000,
//         keepalive: 3600
//       });
    
//     client.on('connect', () => {
//         // sub đúng kênh để nhận dữ liệu
//         for (const topic in feed){
//             client.subscribe(feed[topic]);
//             console.log('connected ' + feed[topic]);
//         }
        
//     });
    
//     client.on('reconnect', () => {
//         for (const topic in feed){
//             client.subscribe(feed[topic]);
//             console.log('connected ' + feed[topic]);
//         }
//     });
    
//     // client.on('error', (err) => console.log('error', err));
    
//     // client.on('offline', () => connected = false);
    
//     // client.on('close', () => connected = false);
    
//     client.on('message', (topic, message) => {
//         // nó sẽ nhận được thông tin khi có tín hiệu bị thay đổi 
//         // và nó chỉ nhận được những kênh mà nó sub, giống như youtube vậy 🙂
    
//         // mai mốt mấy ông xử lí cái này thay vì in ra console thì mấy ông hiển thị lên sprite.
        
//         console.log(message.toString('utf8'));
//     });
    
//     // đẩy dữ liệu lên thử server: 
    
    
    
//     // publish(topic, message, [options], [callback])
//     // client.publish("dangnguyen/feeds/sensor1/json", "45");
//     // // hay chỉ càn
//     // client.publish("dangnguyen/feeds/sensor2", "50");
//     // // publish trên nút nhấn
//     client.publish("tsunekiara/feeds/btnfan", "ON");
//     // hay bỏ /json cũng đc
//     // client.publish("dangnguyen/feeds/button2", "ON");
//     // xong mấy ông lên kiểm tra đashboard thử log nó có ghi đúng ko
//     // Cái publish này mấy ông dùng để gán vào máy cái event khi nhấn nút, 
//     // ví dụ bấm vào công tắt quạt trên app khi đang ở trạng thái OFF thì nó sẽ ON và gửi lên server.
//     // done