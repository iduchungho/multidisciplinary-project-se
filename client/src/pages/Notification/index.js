import "./Notification.css"

function Message(props) {
    return (
        <div>
            <div className="container_mess mt-5">
                <div className="row__mess">

                    <div className="col-sm-12">
                        <div className="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
                            <i className="start-icon far fa-check-circle faa-tada animated"></i>
                            <strong className="font__weight-semibold">Well done!</strong> You successfullyread this important.
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="alert fade alert-simple alert-info alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                            <i className="start-icon  fa fa-info-circle faa-shake animated"></i>
                            <strong className="font__weight-semibold">Heads up!</strong> This alert needs your attention, but it's not super important.
                        </div>

                    </div>

                    <div className="col-sm-12">
                        <div className="alert fade alert-simple alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                            <i className="start-icon fa fa-exclamation-triangle faa-flash animated"></i>
                            <strong className="font__weight-semibold">Warning!</strong> Better check yourself, you're not looking too good.
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="alert fade alert-simple alert-danger alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                            <i className="start-icon far fa-times-circle faa-pulse animated"></i>
                            <strong className="font__weight-semibold">Oh snap!</strong> Change a few things up and try submitting again.
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="alert fade alert-simple alert-primary alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show" role="alert" data-brk-library="component__alert">
                            <i className="start-icon fa fa-thumbs-up faa-bounce animated"></i>
                            <strong className="font__weight-semibold">Well done!</strong> You successfullyread this important.
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
function Notification() {
    return (
        <div className='notification__wrapper'>
            <div className='notification__block'>
                <Message message='hello'></Message>
            </div>
        </div>
    );
}

export default Notification;;