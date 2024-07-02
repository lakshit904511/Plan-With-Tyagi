
import Card from "./Card";

function Tours({tours, removeTour,leftTour}){
    return(
    <div className="container">
            <div>
                <h2 className="title">Plan with Love</h2>
            </div>
            <div className="cards">
              {/* use of map function */}
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour} leftTour={leftTour}></Card>
                    })
                }
            </div>
    </div>
    )
}

export default Tours;