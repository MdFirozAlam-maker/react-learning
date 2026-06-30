import React, { useState } from "react";
import "./RegistrationCss.css";

const RegistrationReact = () => {
  const [user, setUser] = useState( {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
  });

  const {firstName, lastName, email, password, phoneNumber} = user;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    
  };

const handleInputChange = (e) => {
  const {name, value} = e.target;
  setUser((prev) => ({
    ...prev, [name] : value,
  }))
}
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>

          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            value={password}
            onChange={handleInputChange}
          />

          <label htmlFor="phone">
            <b>Phone Number</b>
          </label>

          <input
            type="phone"
            name="phoneNumber"
            placeholder="+91-7895265552"
            required
            value={phoneNumber}
            onChange={handleInputChange}
          />

          <p>
            By creating an account you agree to our
            <a href="#"> Terms & Privacy</a>
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign up
            </button>
          </div>
        </div>
      </form>

      <section className="summary">
        <p>
          Hello, my name is{" "}
          <span>
            {firstName} {lastName}
          </span>
          . My email address is <span>{email}</span> and my phone number is{" "}
          <span>{phoneNumber}</span>
        </p>
      </section>
    </>
  );
};

export default RegistrationReact;
