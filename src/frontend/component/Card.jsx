import { Link } from 'react-router-dom';
import '../css/card.css';
import {
    FaMars,
    FaVenus,
    FaLocationDot,
    FaIndianRupeeSign,
} from "react-icons/fa6";

function Card({ hospital }) {
    return (
        <div className='card card-specific'>
            <img src={hospital.image} alt='hospital' />
            <div className='card-details'>
                <div className='card-primary'>
                    <p className='card-name'>{hospital.name}</p>
                    <p className='card-address'>{hospital.address}</p>
                </div>
                <div className='card-row'>
                    <div className='card-gender'>
                        <p className='card-type-male'>
                            <FaMars /> <strong>{hospital.maleBeds}</strong>
                        </p>
                        <p className='card-type-female'>
                            <FaVenus /> <strong>{hospital.femaleBeds}</strong>
                        </p>
                    </div>
                    <p className='card-distance'>
                        <FaLocationDot /> {hospital.distance} km
                    </p>
                    <p className='card-fare'>
                        <FaIndianRupeeSign /> {hospital.fare} /-
                    </p>
                </div>
                <Link to="/book" state={{hospital}}>
                    <button id='c1' className='btn btn-secondary-orange'>
                        Book Bed
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Card;
