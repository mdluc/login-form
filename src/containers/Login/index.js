import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./styles.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSave = (event) => {
    event.preventDefault();
    const text = "Email: " + email + "\n" + "Password: " + password;
    alert(text);
  };

  return (
    <section className="container">
      <div className="login-box">
        <form onSubmit={handleSave}>
          <img
            src="https://i.imgur.com/NABQcXH.png"
            width="200px"
            alt="user icon"
          />
          <h2>Member login</h2>
          <Input
            type="email"
            text={email}
            placeholder="Enter your email address"
            handleChangeText={handleChangeEmail}
          />

          <Input
            type="password"
            text={password}
            placeholder="Password"
            handleChangeText={handleChangePassword}
          />

          <Button className="btn" type="submit" text="Login" />
        </form>
      </div>
    </section>
  );
}

export default Login;
