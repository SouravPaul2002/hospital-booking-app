import "../css/Book.css";
import { useLocation } from "react-router-dom";

function Book() {

  const location = useLocation();
  const hospital = location.state?.hospital;

  return (
    <section className="container">
      <header>
        <div className="parent">
          <div className="logo">
            <img src={hospital?.image} alt="logo" width="100px" />
          </div>

          <div
            className="info"
            style={{
              lineHeight: "18px",
              textAlign: "right",
              paddingTop: "24px",
            }}
          >
            <div style={{ fontSize: "12pt" }}>
              <strong>{hospital?.name || "Hospital Name"}</strong>
            </div>
            <div style={{ fontSize: "10pt" }}>{hospital?.address || "Address"}</div>
            <div style={{ lineHeight: "14px" }}>
              <div style={{ fontSize: "9pt" }}>{hospital?.district || "District"}</div>
              <div style={{ fontSize: "9pt" }}>{hospital?.phone || "Contact No"}</div>
            </div>
          </div>
        </div>
      </header>

      <div className="line">
        <hr />
      </div>

      <form method="post" className="form">
        <div className="input-box">
          <p className="warning">
            Your appointment at the hospital is automatically cancelled if you do not
            arrive within <b>four hours</b> of the booking time.
          </p>
        </div>

        <div className="input-box">
          <label>Patient's Full Name</label>
          <input type="text" name="name" placeholder="Enter full name" required />
        </div>

        <div className="gender-box">
          <label>Gender</label>
          <div className="gender-option">
            <div className="gender">
              <input
                type="radio"
                id="check-male"
                name="gender"
                value="Male"
                defaultChecked
              />
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" value="Female" />
              <label htmlFor="check-female">Female</label>
            </div>
          </div>
        </div>

        <div className="input-box">
          <label>Age</label>
          <input type="number" name="age" placeholder="Enter age" required />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" name="contact" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" name="dob" required />
          </div>
        </div>

        <div className="input-box">
          <label>Email address</label>
          <input type="email" name="email" placeholder="Enter email address" required />
        </div>

        <div className="input-box">
          <label>Aadhaar card</label>
          <input type="number" name="adhr_num" placeholder="Enter Aadhaar number" required />
        </div>

        <div className="input-box address">
          <label>Address</label>
          <input type="text" name="address2" placeholder="Enter street address" required />

          <div className="column">
            <div className="select-box">
              <select required>
                <option hidden>District</option>
                <option>Alipurduar</option>
                <option>Bankura</option>
                <option>Birbhum</option>
                <option>Cooch Behar</option>
                <option>Dakshin Dinajpur</option>
                <option>Darjeeling</option>
                <option>Hooghly</option>
                <option>Howrah</option>
                <option>Jalpaiguri</option>
                <option>Jhargram</option>
                <option>Kalimpong</option>
                <option>Kolkata</option>
                <option>Malda</option>
                <option>Murshidabad</option>
                <option>Nadia</option>
                <option>North 24 Parganas</option>
                <option>Paschim Bardhaman</option>
                <option>Paschim Medinipur</option>
                <option>Purba Bardhaman</option>
                <option>Purba Medinipur</option>
                <option>Purulia</option>
                <option>South 24 Parganas</option>
                <option>Uttar Dinajpur</option>
              </select>
            </div>

            <input type="text" name="city" placeholder="Enter your city" required />
          </div>

          <div className="column">
            <input type="number" name="pin" placeholder="Enter postal code" required />
          </div>

          <button type="submit" name="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Book;
