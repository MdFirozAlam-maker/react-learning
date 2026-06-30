import React, { useState } from "react";

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
    console.log(message);
  }


  return (
    <div className="container">
      <div className="card">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required autoComplete="off" value= {username} onChange={(e) => setUsername(e.target.value)}/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" required autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            required
            autoComplete="off"
            rows="6"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
