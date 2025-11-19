import { Link, useLocation } from "react-router-dom";
import "../css/confirm.css";
function Confirmation() {
    const location = useLocation();
    const { hospital, booking } = location.state || {};
    return <div className="container">
        <h2 id="cnfm-msg"><i className="fa-solid fa-circle-check fa-bounce fa-2xl" style={{ color: "#00a896" }}></i>
            &nbsp;Booking Confirmed!</h2>
        <div className="thank-you-message">Your details has been received. Please proceed to the hospital for treatment.
        </div>
        <hr />
        <p id="p1"><u>Hospital information</u></p>
        <div className="hspl-details">
            <div className='c1'><strong className='attribute1'>Name:</strong>{hospital.name}</div>
            <div className='c1'><strong className='attribute2'>Address:</strong>{hospital.address}</div>
            <div className='c1'><strong className='attribute7'>District:</strong>{hospital.district}</div>
            <div className='c1'><strong className='attribute2'>Number:</strong>{hospital.phone}</div>
        </div>
        <p id="p1"><u>Other information</u></p>
        <div className="other-details">
            <div className='c2'><strong className='attribute3'>Patient name:</strong>{booking.name}</div>
            <div className='c2'><strong className='attribute9'>Patient id:</strong>{booking.patientId}</div>
            <div className='c2'><strong className='attribute8'>Gender:</strong>{booking.gender}</div>
            <div className='c2'><strong className='attribute4'>Number:</strong>{booking.contact}</div>
            <div className='c2'><strong className='attribute6'>Booking Date & Time:</strong>{booking.readableTime}</div>
            <div className='c2'><strong className='attribute6'>Deadline Date & Time:</strong>{booking.deadlineReadable}</div>
            <p className='notice'>Note: Your bed reservation will automatically cancelled if you do not arrive at hospital within four hours of Booking time.</p>
        </div>
        <div className="btns">
            <form method="post"><button name="get_route" className="btn">get route</button></form>
            <Link to='/'>
                <button className="btn">go to homepage</button>
            </Link>
        </div>
    </div>
}
export default Confirmation;