import React from "react";
import OIP from '../image/OIP.jpg'

export const Container2=()=>{
 return(
     <div className="container2">
       <div className="container2-left">
          <h2>Anshul Home's estate</h2>
          <p>Experience a fuller lifestyle with healthy, sustainable and luxurious 3 BHK apartments at home's East.</p>
          <p>A sustainable township spread across 26 acres with over 25 amenities, 68% open space, 6 towers & 79 luxury row houses.</p>
          <p>Located off near wisdom public school senior weing  Ramghat Road in Aligarh, this residential project is designed to offer your family a space that is crafted with the environment and you in mind.</p>
          <div className="container2-button">
            <button type="submit">
             <b>REQUEST BROCHURE</b>
            </button>
      </div>
       </div>
       <div className="container2-right">
       <img src={OIP} height={350} width={500} alt="images" />
       </div>
     </div>
 )
}