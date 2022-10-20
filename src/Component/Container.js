import React from "react";

export const Container=()=>{
     return(
       <div className="container">
          <div className="container-left">
               <h1>The Dream Schme</h1>
               <div className="container-left-contain">
                    <h3>₹9,999</h3>
                    <h4>IS ALL YOU NEED TO PAY TO OWN A LUXURY HOME!</h4>
                   <p>Who says you can't own a premium home without paying heavy installments? Anshul brings you exciting financial schemes that make sure your dreams are not heavy on your pocket
                   </p>
               </div>
          </div>
          <div className="container-right">
                    <div className="container-right-form">
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