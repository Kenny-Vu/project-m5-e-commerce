import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { requestUserData } from "../actions";

export default function SignIn() {
  const dispatch = useDispatch();
  const [emailInput, setEmailInput] = React.useState("");

  // Verifies if the users email corresponds with an email in the database
  const requestStuff = () => {
    fetch("/signin", {
      method: "POST",
      body: JSON.stringify({
        email: `${emailInput}`,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => dispatch(requestUserData(data)))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form action="/SignUp" method="POST"></form>
      <div>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" required></input>
      </div>
      <div>
        <label for="Email">Email</label>
        <input
          onChange={(event) => setEmailInput(event.target.value)}
          value={emailInput}
          id="Email"
          name="Email"
          type="Email"
          required
        ></input>
      </div>
      <div>
        <label for="Password">Password</label>
        <input id="Password" name="Password" type="Password"></input>
      </div>
      <button type="submit" onClick={() => requestStuff()}>
        Submit
      </button>
    </div>
  );
}
