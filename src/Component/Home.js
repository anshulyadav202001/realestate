import React from "react";

export const Home=()=>{
     return(
          <div className="home">
               <div className="home-left">
                  <h2>₹9,999 p.m</h2>
                   <h3>IS ALL TO YOU NEED TO PAY TO OWN THE LUXURY HOME </h3>
                    <hr />
                   <h3>#BHK ECO Luxury Apartment Starting ₹39 lakh* ownwards </h3>
                   <div className="home-left-innerbox">
                    <h2>Off Ramghat Road</h2>
                    <p>20 mint from RailWays Station And Bus-Stand</p>
                   </div>
                 <h3>2 NEW TOWERS LAUNCHED </h3>

               </div>
               <div className="home-right">
                    <div className="home-right-form">
                    <h4>ENQUIRE </h4>
                 <form>
                    <label htmlFor="name_id">Name</label><br></br>
                    <input type="text" id="name_id" name="name" placeholder="Name" /><br></br>
                    <label htmlFor="name_id">Contact.No</label><br></br>
                    <input type="text" id="Contact_id" name="contact" placeholder="+917088886004" /><br></br>
                    <label htmlFor="email_id">Email</label><br></br>
                    <input type="text" id="email_id" name="email" placeholder="anshulyadav202001@gmail.com" /><br></br>
                   <label>Select Configuration</label>
                    <select>
                         <option>DropDown</option>
                         <option>3 BHK ₹39 LAKH* ownwards</option>
                    </select>
                    <input type="checkbox"></input>
                    <label>I agree to recive a more information</label><br />
                    <button type="submit">Submit</button>
                    
                 </form>
                 </div>
               </div>
          </div>
     )
}