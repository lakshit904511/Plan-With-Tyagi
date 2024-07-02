import { useState } from "react";

function Card({id,image,info,price,name,removeTour,leftTour}){

    const[readmore,setReadmore]=useState(false);
    const description= readmore?info:`${info.substring(0,200)}....`;
    function readmorehandler(){
        setReadmore(!readmore);
    }
    return(
        <div className="card">
             <img src={image} className="image"></img>
             <div className="tour-details">
                 <h4 className="tour-price">$ {price}</h4>
                 <h4 className="tour-name">{name}</h4>
             </div>
             <div className="description">
                  {description}
                  <span className="read-more" onClick={readmorehandler}>
                    {readmore ? `show less`: `show more`}
                  </span>
             </div>
             <div className="btns">
             <button className="btn-red" onClick={ () => removeTour(id)}>Not Interested</button>
             <button className="btn-red" onClick={ () => leftTour(id)}>Interested</button>
             </div>
        </div>
    );
}

export default Card;