import {React, useState, useEffect} from 'react';
import WebcamCapture from "../../components/chart/WebcamCapture";
import noVideo from "../../assets/noVideo.png";


import "./Door.css";


function Door()
{
    const [doorBtn, setDoor]=useState(0);
    const clickDoor=()=>{
        setDoor(!doorBtn);
    }

    var speedFan= 120;
    const [fanBtn, setFan]=useState(0);
    const clickFan=()=>{
        setFan(!fanBtn);
    }

    if (fanBtn === 0) speedFan=1;
    else speedFan= 10;

    const [cameraBtn, setCamera]=useState(0);
    const clickCamera=()=>{
        setCamera(!cameraBtn);
    }


    return(
        <div className='Door'>
            <div className='Door__left'>
                <div className='Door__left-camera'>                  
                    <div className='card'>
                        {cameraBtn && <WebcamCapture/>}
                    </div>
                    <span className='antenna-left'></span>
                    <span className='antenna-right'></span>
                </div>
                <div className='Door__left-controlDoor'>


                    <div className='ai__content'>
                        <div className='ai__content-heading'> AI : Bảo </div>
                       
                    </div>

                </div>

            </div>
            <div className='Door__right'>
                <div className='fan__control'>
                    <div className='fan__control-icon '>
                        <i class="fan fa-solid fa-fan" style={{ animation: `fan-rotate ${speedFan}s 1s forwards`}}></i>
                    </div>
                </div>
                <div className='door__control'>
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
                            <span className="fan-connect"> {!fanBtn ?"Not Connected":"Connected"}</span>
                        </div>
                        <label class="switch">
                            <input className="btn-switch" type="checkbox" onClick={clickFan} checked={fanBtn}/>
                            <span class="slider">
                                <ul className="switch__select">
                                    <li className="switch__select-item">Off</li>
                                    <li className="switch__select-item">On</li>
                                </ul>
                            </span>
                        </label>
                    </button>
                     <button className="btn-camera btn" style={{ backgroundColor: cameraBtn && '#1babfc' }} >
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                        <span className='span4'></span>

                        <div className="camera-border">
                            { cameraBtn==1?<i className="camera-btn-icon fa-solid fa-video"></i> :<img src={noVideo} className="novideo-btn-icon"/> }
                        </div>
                        <div className="camera-text">
                            <span className="camera-infor">CAMERA</span>
                            <span className="camera-connect"> {!cameraBtn ?"Not Connected":"Connected"}</span>
                        </div>
                        <label class="switch">
                            <input className="btn-switch" type="checkbox" onClick={clickCamera} checked={cameraBtn}/>
                            <span class="slider">
                                <ul className="switch__select">
                                    <li className="switch__select-item">Off</li>
                                    <li className="switch__select-item">On</li>
                                </ul>
                            </span>
                        </label>
                    </button>
                    <button className="btn-door1 btn control-btn" style={{ backgroundColor: doorBtn && '#1babfc' }} >
                        <span className='span1'></span>
                        <span className='span2'></span>
                        <span className='span3'></span>
                        <span className='span4'></span>
                        <div className="door-border">
                            <i className="door-btn-icon fa-solid fa-door-closed"></i>
                        </div>
                        <div className="door-text">
                            <span className="door-infor">DOOR</span>
                            <span className="door-connect"> {!doorBtn ?"Not Connected":"Connected"}</span>
                        </div>
                        <label class="switch">
                            <input className="btn-switch" type="checkbox" onClick={clickDoor} checked={doorBtn}/>
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
        </div>
    )
}

export default Door;