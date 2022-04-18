import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from "./pages/About"
import NoMatch from "./pages/NoMatch"
import DashBoard from "./pages/DashBoard"

export default function App() {
  return (
    <div>
      <h1>DSchool</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="DashBoard" element={<DashBoard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/DashBoard">DashBoard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}




 

 
  

