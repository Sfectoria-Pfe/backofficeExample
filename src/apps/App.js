import "../App.css";
import Navbar from "../layouts/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";
import Product from "../pages/Product";
import { Outlet } from "react-router-dom";
function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <Sidebar setIsOpen={setIsOpen} />}

      <div style={{ paddingLeft: isOpen ? 300 : 0, paddingTop: 70 }}>
        <Outlet />
      </div>
      <Footer isOpen={isOpen} />
    </div>
  );
}

export default App;
