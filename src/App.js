import { useState, useEffect } from 'react';
import './App.css';
import MenuItems from './components/MenuItems/MenuItems.js';
import NavBar from './components/NavBar/NavBar';

const API_URL = "http://localhost:8888";

function App() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("");

  useEffect(()=> {
    async function fetchData(){
      try {
        setLoading(true);
        const res = await fetch(`${API_URL}/items`);
        const json = await res.json();
        console.log("<App/> useEffect() fetched data", json)
        const {data, error} = json;

        if(res.ok){
          setMenuData(data);
          setLoading(false);
        }else{
          setError(error);
          setLoading(false);
        }
        
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <NavBar/>
      <MenuItems menuData = {menuData}/>
    </div>
  );
}

export default App;
