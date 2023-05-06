import Message from "../../components/Message";
import "./Notification.css"
import { getmessage } from "../../redux/apiRequest"
import { useSelector } from "react-redux"
function Notification() {
    let temp = new Date()
    const user = useSelector((state) => state.auth_.login?.currentUser)
    let getmess = async() => {
        let message = await getmessage(user.data.id)
        console.log(message)
    }
    let messages = getmess()
    return (
        <div className='notification__wrapper'>
            <h1 className="notification__heading">|</h1>
            <div className='notification__block'>
                {/* {messages && messages.map(message => {
                    <Message message={message.content} time={message.date} type={message.type}></Message>
                })} */}
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