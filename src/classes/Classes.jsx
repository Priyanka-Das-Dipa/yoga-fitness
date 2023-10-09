import React from "react";
import Navbar from "../navbar/Navbar";
import { useLoaderData } from "react-router-dom";

const Classes = () => {
  const classes = useLoaderData();
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
      <div className="grid grid-cols-3 gap-5 max-w-7xl mx-auto mt-10">
        {classes.map((classItem) => (
          <div data-aos="zoom-in-up"
          data-aos-duration="3000" className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={classItem.image_url} alt="Shoes" />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title text-2xl text-orange-400">
               {classItem.exercise_name}
                
              </h2>
              <h2 className="text-lg font-semibold">Our Class Schedule:  </h2>
                <div className="flex justify-center gap-2 text-sm">
                <p className="font-semibold"> Date: {classItem.date}</p>
                <p className="font-semibold"> Day: {classItem.day}</p>
                <p className="font-semibold"> Time: {classItem.time}</p>
                </div>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
