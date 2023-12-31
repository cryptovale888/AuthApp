import { useState } from "react";
import firebaseConfig from "../firebaseConfig";
// import "firebase/compat/auth";
import { signInWithEmailAndPassword } from "firebase / auth";

function Login() {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const handlesubmit = async (username, pass) => {
    // e.preventDefault();
    // console.log(username);
    // console.log(pass);
    try {
      await signInWithEmailAndPassword(username, pass);
    } catch (error) {
      alert(error.msg);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
  };

  return (
    <main>
      <div>
        <h1>Login page</h1>
      </div>
      <div>
        <form onSubmit={handlesubmit}>
          <label htmlFor="username">User Name:</label>
          <br></br>
          <input
            autoComplete="on"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          ></input>
          <br></br>
          <label htmlFor="pass">Password:</label>
          <br></br>
          <input
            autoComplete="on"
            type="password"
            id="pass"
            name="pass"
            value={pass}
            onChange={handlePassChange}
            required
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </main>
  );
}

export default Login;
