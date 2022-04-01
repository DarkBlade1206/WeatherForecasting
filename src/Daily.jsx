import React from "react";





function Daily(){
    return (
        <div className="daily">
        
        <p1 className="font">Thu 21</p1>
       
        <br></br>
        <img  src={Icons}></img>
        <br></br>
        <p1  className="tempdailyhigh font">39°      </p1>
     
        <p1  className="tempdailylow font">21°</p1>
        <br>
        </br>
        <p1 className="font">Sunny</p1>
        

        </div>

    );


}
export default Daily;