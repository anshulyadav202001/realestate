import React from "react";
import OIP from '../image/OIP.jpg';
import R from '../image/R.jpg';
import pexels1 from '../image/pexels1.jpeg'
import pexels2 from '../image/pexels2.webp'
import friendship from '../image/friendship.jpg'
import istockphoto1 from '../image/istockphoto1.jpg'
export const Gallery=()=>{
     return (
       <div className="gallery">
         <div class="gallery-header">
           <h1>GALLERY</h1>

           <div id="gallery">
             <img src={OIP} alt="images" />
             <img src={R} alt="r.pic" />
             <img src={pexels1} alt="pexels pictute" />
             <img src={pexels2} alt="pexels2 pictute" />
             <img src={friendship} alt="pexels pictute" />
             <img src={istockphoto1} alt="pexels pictute" />

           </div>
         </div>
       </div>
     );
}