import React from "react";
import { FaSwimmingPool, FaVolleyballBall } from "react-icons/fa";
import { CgGym,CgDisplayGrid } from "react-icons/cg";
import { BiFootball,BiCycling,BiBaseball,BiBasketball,BiBus,BiStreetView } from "react-icons/bi";
import { TbYoga  } from "react-icons/tb";
import { MdAtm} from "react-icons/md";
import { SiCinema4D} from "react-icons/si";
import{GiSonicShoes,GiPartyPopper} from "react-icons/gi";
export const Amenities = () => {
  return (
    <div className="amenities">
      <div className="amenities-top">
        <h2>Amenities</h2>
        <p>
          At 63° East, there are over 25 amenities that follow global standard
          facilities along with design sensibilities to make sure you wake up to
          a healthy life
        </p>
      </div>
      <div className="amenities-bottom">
        
        <div className="amenities-icon-list">
      <FaSwimmingPool />
      <h6>Swimming<br/>Pool</h6>
      </div>
      <div className="amenities-icon-list">
      <BiFootball />
      <h6>Football</h6>
      </div>
      <div className="amenities-icon-list">
      <BiCycling />
      <h6>Cycling</h6>
      </div>
      <div className="amenities-icon-list">
      <BiBaseball />
      <h6>Baseball <br/> court</h6>
      </div>
      <div className="amenities-icon-list">
       <CgGym />
      <h6>Gym</h6>
      </div>
      <div className="amenities-icon-list">
      <TbYoga />
      <h6>Yoga-Deck</h6>
      </div>
      <div className="amenities-icon-list">
      <BiBasketball />
      <h6>Basketball<br />court</h6>
      </div>
      <div className="amenities-icon-list">
      <MdAtm />
      <h6>ATM</h6>
      </div>
      <div className="amenities-icon-list">
      <BiBus />
      <h6>Bus Bay</h6>
      </div>
      <div className="amenities-icon-list">
      <CgDisplayGrid />
      <h6>Kids play<br />Area</h6>
      </div>
      <div className="amenities-icon-list">
      <FaVolleyballBall />
      <h6>Volleyball<br /> court</h6>
      </div>
      <div className="amenities-icon-list">
      <GiSonicShoes />
      <h6>Skating-Ring</h6>
      </div>
      <div className="amenities-icon-list">
      <GiPartyPopper />
      <h6>Party Hall with Pantry</h6>
      </div>
      <div className="amenities-icon-list">
      <BiStreetView/>
      <h6>Aerobics Studio</h6>
      </div>
      <div className="amenities-icon-list">
      <SiCinema4D />
      <h6>Cinema Hall</h6>
      </div>
      
        </div>
    </div>
  );
}
