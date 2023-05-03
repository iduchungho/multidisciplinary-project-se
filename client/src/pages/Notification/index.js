import Message from "../../components/Message";
import "./Notification.css"

function Notification() {
    let temp = new Date()
    return (
        <div className='notification__wrapper'>
            <h1 className="notification__heading">|</h1>
            <div className='notification__block'>
                <Message message='You successfullyread this important' time={temp} type='1'></Message>
                <Message message="This alert needs your attention, but it's not super important." time={temp} type='2'></Message>
                <Message message="Better check yourself, you're not looking too good." time={temp} type='3'></Message>
                <Message message='Change a few things up and try submitting again.' time={temp} type='4'></Message>
                <Message message=' You successfullyread this important.' time={temp} type='5'></Message>
                <Message message='You successfullyread this important' time={temp} type='1'></Message>
                <Message message="This alert needs your attention, but it's not super important." time={temp} type='2'></Message>
                <Message message="Better check yourself, you're not looking too good." time={temp} type='3'></Message>
                <Message message='Change a few things up and try submitting again.' time={temp} type='4'></Message>
                <Message message=' You successfullyread this important.' time={temp} type='5'></Message>
            </div>
        </div>
    );
}

export default Notification;;