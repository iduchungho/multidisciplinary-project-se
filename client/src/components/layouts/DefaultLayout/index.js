
import "./DefaultLayout.css";
import "../../base.css";
import sun from "../../../assets/sun.png";
import cloudy from "../../../assets/cloudy.png";
import night from "../../../assets/night.png";

function DefaultLayout({children})
{
    var date = new Date();
    var hour=date.getHours();
    var day="",num=date.getDay();
    var weather;

    if (hour >=6 && hour <= 12 ) weather=sun;
    else if  (hour >12 && hour < 18  ) weather=cloudy;
    else weather=night;

    switch(num)
    {
      case 0:
        day="Sunday";
        break;
      case 1:
        day="Monday";
        break;
      case 2:
        day="Tuesday";
        break;
      case 3:
        day="Wednesday";
        break;
      case 4:
        day="Thursday";
        break;
      case 5:
        day="Friday";
        break;
      case 6:
        day="Saturday";
        break;
    }

    var month="",num1=date.getMonth();
    switch(num1)
      {
        case 0:
          month="January";
          break;
        case 1:
          month="February";
          break;
        case 2:
          month="March";
          break;
        case 3:
          month="April";
          break;
        case 4:
          month="May";
          break;
        case 5:
          month="June";
          break;
        case 6:
          month="July";
          break;
        case 7:
          month="August";
          break;
        case 8:
          month="September";
          break;
        case 9:
          month="October";
          break;
        case 10:
          month="November";
          break;
        case 11:
          month="December";
          break;
      }
    return(
        <div className="wrapper">
            <div className="cover">
                <div className="cover__item item1"></div>
                <div className="cover__item item2"></div>
                <div className="cover__item item3"></div>
                <div className="cover__item item4"></div>
            </div>
            <div class="center">
                <div className="main">
                    <div className="siderbar">
                        <ul className="siderbar__list">
                            <li className="siderbar__list-item active">
                                <i class="home-icon fa-solid fa-house"></i>
                            </li>
                            <li className="siderbar__list-item">
                                <i class="door-icon fa-solid fa-door-open"></i>
                            </li>
                            <li className="siderbar__list-item">
                                <i class="light-icon fa-regular fa-lightbulb"></i>
                            </li>
                            <li className="siderbar__list-item">
                                <i class="temper-icon fa-solid fa-temperature-three-quarters"></i>
                            </li>
                            <li className="siderbar__list-item">
                                <i class="gear-icon fa-solid fa-gear"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <header className="header">
                            <nav className="navbar">
                                <div class="navbar__logo">
                                    <i class="logo-icon fa-solid fa-layer-group"></i>
                                    SMART HOME
                                </div>
                                <div className="navbar__account">
                                    <img className="navbar__account-img" src="https://img.thuthuattinhoc.vn/uploads/2019/04/10/anh-bong-hoa_112954549.jpg"/>
                                </div>
                            </nav>
                            <div className="header__time">
                                <div className="header__time-greeting">
                                    <span className="greeting1">Good morning, Bao</span>
                                    <span className="greeting2">Have a nice day</span>
                                </div>
                                <div className="header__time-weather">
                                    <img src={weather} className="weather-icon"/>
                                </div>
                                <div className="header__time-infor">

                                    <span className="time1">{hour}:{date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes()}  
                                    {
                                        date.getHours()>=12 ? " PM" : " AM"
                                    } </span>
                                    <span className="time2">{day}, {date.getDate()} {month} {date.getFullYear()}</span>
                                </div>
                            </div>
                        </header>
                        <div className="content">
                            {children}
                        </div>
                        
                    </div>
                </div>
            </div>  
        </div>
           

    );
}
export default DefaultLayout;