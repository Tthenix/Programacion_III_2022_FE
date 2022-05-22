import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./components/Home/home";
import Materias from "./components/materias";
import Notas from "./components/notas";
import NavBarExample from "./layouts/navbar";
import Login from "./components/Login/login";
import { useState } from "react";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="Routes">
      {user.email != ""}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarExample />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="materias" element={<Materias />} />
            <Route path="notas" element={<Notas />} />

            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
