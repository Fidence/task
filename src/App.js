import "./App.scss";
import Main from "./Component/Main";

// import { useState, useEffect } from "react";
// import axios from "axios";

function App() {
   
  
  // useEffect(() => {
  //   axios
  //   .get ("https://local-business-data.p.rapidapi.com/search?query=Hotels%20in%20San%20Francisco%2C%20USA&limit=20&lat=37.359428&lng=-121.925337&zoom=13&language=en&region=us")
 
  //   .then((res) => console.log(res.data.items))
     
  //     .catch((err) => console.log(err))
     
  //     .finally(() => {
      
  //     });
  // }, [])
  


      
      


  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
