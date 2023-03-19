import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [first, setfirst] = useState([]);
  const nameref = useRef("");
  const photourl = useRef("");
  const idToken = localStorage.getItem("idToken");
  const token = {
    idToken: idToken,
  };
  useEffect(() => {
    async function myfun() {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDW55X8yrfY3DYfPEVnvQZamzWMl7FuhzE",
        token
      );

      setfirst(response);
    }
    myfun();
  }, []);

  let prename = "";
  let preurl = "";
  if (first.length !== 0) {
    prename = first.data.users[0].displayName;
    preurl = first.data.users[0].photoUrl;
  }

  const updatedetails = async (event) => {
    event.preventDefault();
    const name = nameref.current.value;
    const url = photourl.current.value;
    const idToken = localStorage.getItem("idToken");
    const details = {
      idToken: idToken,
      displayName: name,
      photoUrl: url,
      returnSecureToken: true,
    };
    console.log("mydetails", details);
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDW55X8yrfY3DYfPEVnvQZamzWMl7FuhzE",
        details
      );
      console.log("successful", response);
      nameref.current.value = "";
      photourl.current.value = "";
    } catch (error) {
      alert(error.response.data.error.message);
    }
  };
  return (
    <div>
      <h3 className="text-center">Contacts Details</h3>
      <hr />
      <div className="container text-center">
        <form onSubmit={updatedetails}>
          <i class="fas fa-user-alt"></i> <label>Full Name : </label> &nbsp;
          <input type="text" ref={nameref} value={prename} />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="fas fa-grin"></i> <label>Profile Photo Url : </label> &nbsp;
          <input type="text" ref={photourl} value={preurl} />
          <br />
          <br />
          <button
            type="submit"
            class="btn btn-outline-dark"
            data-mdb-ripple-color="dark"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
