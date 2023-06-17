import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const Information = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Information();
  }, []);

  return (
    <>
      {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
          <h1>Your detials </h1>
          <h1>Name: {logindata[0].name}</h1>
          <h1>Email: {logindata[0].email}</h1>
          <Button onClick={userlogout}>LogOut</Button>
        </>
      )}
    </>
  );
};

export default Details;
