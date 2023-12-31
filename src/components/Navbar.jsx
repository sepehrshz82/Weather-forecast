import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { AiFillSetting, AiOutlineUnorderedList, AiOutlineArrowRight } from "react-icons/ai";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsSnow2 } from "react-icons/bs";
import { useEffect } from "react";

function Navbar() {
  const click=()=>{
    
  }

  return (
    <>
      <div id="hamburger" onClick={click} className="text-slate-400"><span><AiOutlineArrowRight/></span></div>
      <nav id="navbar" className="sec_color">
        <div id="nav_logo">
          <BsSnow2 id="nav_logo_icon" />
          <p>Snow</p>
        </div>
        <div className="this_page">
          <TiWeatherPartlySunny className="nav_icon" />
          <p>weather</p>
        </div>
        <div className="nav_item">
          <AiOutlineUnorderedList className="nav_icon" />
          <p>cities</p>
        </div>
        <div className="nav_item">
          <FaMapMarkedAlt className="nav_icon" />
          <p>map</p>
        </div>
        <div className="nav_item">
          <AiFillSetting className="nav_icon" />
          <p>setting</p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
