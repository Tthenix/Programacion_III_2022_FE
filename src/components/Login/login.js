import React from "react";

export default function Login({ setToken }) {
 

  const handleSubmit = async e => {
    e.preventDefault();
    // const token = await loginUser({
    //   username,
    //   password
    // });
    console.log("setea token")
    setToken("API token");
  }

  return (
    <form onSubmit={handleSubmit}>
      <table align="center">
        <tr>
          <td>
            <label>
              <p>Username</p>
              <input type="text" />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <label>
              <p>Password</p>
              <input type="password" />
            </label>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <button type="submit">Submit</button>
            </div>
          </td>
        </tr>
      </table>
    </form>
  );
}
