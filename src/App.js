import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import Error from "./pages/Error.js";

const API_URL = "http://localhost:8888";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/items`);
        const json = await res.json();
        console.log("<App/> useEffect() fetched data", json);
        const { data, error } = json;

        if (res.ok) {
          setMenuData(data);
          setLoading(false);
        } else {
          setError(error);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData();
  }, []);
  
  console.log(menuData)

  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu menuData={menuData}/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
