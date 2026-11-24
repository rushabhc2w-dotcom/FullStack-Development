import { useState } from "react";




function Controlled_component() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>Controller Component</h1>
      <form action="" method="get">
        <fieldset>
          <legend>Personal Info</legend>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter Name"
          />
          <br />
          <br />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter Password"
          />
          <br />
          <br />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter Email"
          />
          <br />
          <br />
          <button>Submit</button>
          <button onClick={() => setInterval("")}>Clear</button>

          <h3>{name}</h3>
          <h3>{password}</h3>
          <h3>{email}</h3>
        </fieldset>
      </form>
    </div>
  );
}



export default Controlled_component
