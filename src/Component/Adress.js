import React from "react";
import { HiMinusSm } from "react-icons/hi";

export const Adress = () => {
  return (
    <div className="Adress">
      <h1>location</h1>
      <div className="Adress-container">
        <div className="map">
          <iframe
            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            id="gmap_canvas"
            frameborder="0"
            scrolling="no"
            style={{ width: "100vh", height: "500px" }}
          ></iframe>
        </div>
        <div className="Adress-content">
        <div className="Adress-content-list">
          <div className="Adress-content-list-header">
            <h4>Hospital</h4>
           <button><HiMinusSm /></button> 
            </div>
            <div>
              <ul>
                <li>Narayana Hrudayalaya Multispeciality Clinic</li>
                <li>Motherhood Maternity Hospital</li>
                <li>Sakra World Hospital</li>
              </ul>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};
