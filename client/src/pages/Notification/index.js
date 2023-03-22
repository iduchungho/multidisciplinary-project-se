import "./Notification.css"

function Message(props) {
    if (props.type == '1')
        return (
            <div>
                <div className="container_mess mt-5">
                    <div className="row__mess">
                        <div className="col-sm-12">
                            <div className="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
                                <div className="alert-time">
                                    {String(props.time)}
                                </div>
                                <i className="start-icon far fa-check-circle faa-tada animated"></i>
                                <strong className="font__weight-semibold">Well done!</strong> {props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    else if (props.type == '2')
        return (
            <div>
                <div className="container_mess mt-5">
                    <div className="row__mess">
                        <div className="col-sm-12">
                            <div className="alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                                <div className="alert-time">
                                    {String(props.time)}
                                </div>
                                <i className="start-icon  fa fa-info-circle faa-shake animated"></i>
                                <strong className="font__weight-semibold">Heads up!</strong> {props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
    else if (props.type == '3')
        return (
            <div>
                <div className="container_mess mt-5">
                    <div className="row__mess">
                        <div className="col-sm-12">
                            <div className="alert fade alert-simple alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                                <div className="alert-time">
                                    {String(props.time)}
                                </div>
                                <i className="start-icon fa fa-exclamation-triangle faa-flash animated"></i>
                                <strong className="font__weight-semibold">Warning!</strong> {props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    else if (props.type == '4')
        return (
            <div>
                <div className="container_mess mt-5">
                    <div className="row__mess">
                        <div className="col-sm-12">
                            <div className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                                <div className="alert-time">
                                    {String(props.time)}
                                </div>
                                <i className="start-icon far fa-times-circle faa-pulse animated"></i>
                                <strong className="font__weight-semibold">Oh snap!</strong> {props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    else
        return (
            <div>
                <div className="container_mess mt-5">
                    <div className="row__mess">
                        <div className="col-sm-12">
                            <div className="alert fade alert-simple alert-primary alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                                <div className="alert-time">
                                    {String(props.time)}
                                </div>
                                <i className="start-icon fa fa-thumbs-up faa-bounce animated"></i>
                                <strong className="font__weight-semibold">Well done!</strong> {props.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
function Notification() {
    let temp = new Date()
    return (
        <div className='notification__wrapper'>
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