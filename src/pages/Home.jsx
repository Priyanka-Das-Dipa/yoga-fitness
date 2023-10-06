import React from "react";
import Navbar from "../navbar/Navbar";

const Home = () => {
    const bckImg = {
        backgroundImage: 'url("https://i.ibb.co/DpD2JM9/background.jpg")'
    }
  
  return (
    <div className="mt-5">
      <Navbar></Navbar>
      {/* Banner Section */}
      <div style={bckImg}>
        this is home

      </div>
    </div>
  );
};

export default Home;
