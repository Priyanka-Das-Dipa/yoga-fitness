import React from 'react';
import Navbar from '../navbar/Navbar';

const Classes = () => {
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

            this is classes
        </div>
    );
};

export default Classes;