import React, { useState } from "react";
import data from "./data";
import Tours from './components/Tours'
const App = () => {
   const[tours,setTours]=useState(data);
   function removeTour(id){
        const newTours=tours.filter(tour => tour.id !== id);
         setTours(newTours);
    }
    function leftTour(id){
      const left=tours.filter(tour => tour.id === id);
      setTours(left);
    }
  if(tours.length===0){
    return(
      <div className="refresh">
          <h2>No tours Left</h2>
          <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return(
    <div className="app">
       <Tours tours={tours} removeTour={removeTour} leftTour={leftTour}></Tours>
    </div>
  );
};

export default App;
