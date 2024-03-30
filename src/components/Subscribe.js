import React, { useState } from "react";
import './styles/Subscribe.css';

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  }

  return (
    <div className="formwrapper">
      <h2 className="subshead">Subscribe to our newsletter!</h2>
      {!isEmailValid ? <p className="please">Please enter a valid email address</p> : null}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address here"
          value={email}
          onChange={handleInput}
          className="myInput"
        />
        <button
          type="submit"
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#0B4206",
            border: "none",
            color: "#965B0E",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;