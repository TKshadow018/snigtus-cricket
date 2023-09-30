import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";
import "../css/color.css";
import axiosApi from "../api/axiosApi";
// import { Modal, Button } from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";

function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState("");
  // const [showModal, setShowModal] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  // const handleClose = () => setShowModal(false);
  const performJoin = () => {
    console.log(username, ' ', email, ' ', password, ' ', country, ' ', dob)
    axiosApi
      .post("/join", {
        username: username,
        password: password,
        email: email,
        country: country,
        dob: dob,
      })
      .then(function (response) {
        console.log(response.data.active);
        // let isActive = response.data.active == "1" ? true : false;
        // if (isActive) {
        //   navigate('/home')
        // } else {
        //   setResult('Joining Failed. Please retry')
        // }

      })
      .catch(function (error) {
        setResult(error.message);
        navigate('/error/' + error.message)
      });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className="main-body bg-dark-teal">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="sign-up-card card">
            <div className="card-header">
              <h2 className="text-center">Join Snigtus Cricket</h2>
            </div>
            <div className="card-body">
              <form>
                {/* ... (Other form fields) */}

                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="input-group">
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-darkteal"
                        type="button"
                        onClick={togglePasswordVisibility}
                      >
                        <i
                          className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'
                            }`}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="birthdate">Birthdate</label>
                  <input type="date" className="form-control" id="birthdate"
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                    required />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <select className="form-control" id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required>
                    <option value="" disabled>Select your country</option>
                    <option value="Australia">Australia</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="England">England</option>
                    <option value="India">India</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="West Indies">West Indies</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Scotland">Scotland</option>
                    <option value="Kenya">Kenya</option>
                    <option value="UAE">United Arab Emirates (UAE)</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Oman">Oman</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {result !== '' && (<p className="text-danger">${result}</p>)}
                <button type="button" className="btn btn-darkteal btn-block mt-4" onClick={performJoin}>
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
