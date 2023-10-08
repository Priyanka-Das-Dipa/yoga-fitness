import React from 'react';
import Navbar from '../navbar/Navbar';

const Details = () => {
    const bg = {
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/47ZcqHh/bg-2.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      };
      
      
    return (
        <div style={bg}>
            <Navbar></Navbar>
            <>
            {
                <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="" alt="Album"/></figure>
                <div className="card-body">
                  <h2 className="card-title"></h2>
                  <p></p>
                  <div className="card-actions justify-end">
                    <p>Weekly Classes: </p>
                  </div>
                </div>
              </div>
            }
            </>
            
        </div>
    );
};

export default Details;