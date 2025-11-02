import Card from '../component/Card';
import '../css/card.css';

function Hospitals() {
    const hospitals = [
        {
            id: 1,
            name: "Naihati Matri Sadan Municipal Hospital",
            address: "6, Rishi Bankim Chandra Rd, Naihati, West Bengal 743165",
            maleBeds: 10,
            femaleBeds: 26,
            distance: "10",
            fare: "324",
            image: "/image/hospital.jpg",
        },
        {
            id: 2,
            name: "Naihati State General Hospital",
            address: "Naihati, Kolkata, West Bengal 743166",
            maleBeds: 15,
            femaleBeds: 18,
            distance: "15",
            fare: "450",
            image: "/image/hospital.jpg",
        },
    ];

    return (
        <div className="cards">
            {hospitals.map((hospital) => (
                <Card key={hospital.id} hospital={hospital} />
            ))}
        </div>
    );
}

export default Hospitals;
