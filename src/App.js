import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });

  const { username, email, mobile, password, confirmpassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      username: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
    });
    alert("Form Submitted");
  };
  return (
    <>
      <center>
        <h1>Welcome World!!</h1>
        <form onSubmit={submitHandler}>
          <label>Username : </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={changeHandler}
          />
          <br />
          <label>Email Address : </label>
          <input
            type="email"
            placeholder="Enter Email address"
            name="email"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <label>Mobile Number : </label>
          <input
            type="number"
            placeholder="Enter Mobile number"
            name="mobile"
            value={mobile}
            onChange={changeHandler}
          />
          <br />
          <label>Password : </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <label>Confirm Password : </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={changeHandler}
          />
          <br />
          <br />
          <input type="submit" name="Submit Form" />
        </form>
      </center>
    </>
  );
};

export default App;
