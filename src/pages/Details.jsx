import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const services = useLoaderData();
  useEffect(() => {
    const serviceDetails = services.find((service) => service.id == id);
    setService(serviceDetails);
    console.log(serviceDetails);
  }, [id, services]);

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
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="max-w-7xl mx-auto mt-16 "
      >
        {
          <div className="">
            <div className="card card-side h-[50vh] bg-base-100 shadow-xl">
              <figure>
                <img src={service.image} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold text-orange-400">
                  {service.name}
                </h2>
                <p className="text-lg font-medium">
                  {service.detailed_description}
                </p>
                <div className="flex gap-10 justify-evenly">
                  <h2 className="text-xl font-semibold">
                    {" "}
                    <span className="text-orange-400">Our Classes: </span>{" "}
                    {service.weekly_class}
                  </h2>
                  <p className="text-xl font-bold">$ {service.price}</p>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Details;
