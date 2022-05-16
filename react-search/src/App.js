import { useState } from "react";
import { Users } from "./users";
import "./App.css";
import Table from "./Table";


function App() {
  const [query, setQuery] = useState("");
  
  const keys =["first_name", "last_name", "email",]

 
  const search = (data)=> {
    return data.filter(
    (item) => 
      keys.some(key=> item[key].toLowerCase().includes(query)) 
    );
    
  };

  return (
    <div className="app">
      <center>
  <input type="text" placeholder='Search...' className='search' onChange={e=> setQuery(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;
  <Table data={search(Users)} />
  </center>
  
    </div>
  );
}

export default App;
