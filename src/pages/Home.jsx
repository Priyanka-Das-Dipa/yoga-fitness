import React from "react";
import Navbar from "../navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import ServicesCard from "./ServicesCard";
import About from "./About";
import FAQ from "./FAQ";

const Home = () => {
  const services = useLoaderData();
  const bckImg = {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/DpD2JM9/background.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    position: "relative",
  };

  return (
    <div>
      <div className="h-screen" style={bckImg}>
        <div>
          <Navbar></Navbar>
          {/* Banner Section */}
          <div className="max-w-7xl mx-auto mt-5 text-white">
            <div className="text-left flex justify-normal items-left pt-16">
              <h2 className="text-6xl lg:text-9xl font-semibold">
                Mindfulness <br />
                <p className="text-7xl font-medium">Yoga & Fitness</p>
                <p className="text-lg lg:text-3xl text-orange-200 pt-5">
                  Yoga & Fitness is a practice that connects the body, breath,
                  and mind. It uses physical postures, breathing exercises, and
                  meditation to improve overall health. Yoga was developed as a
                  spiritual practice thousands of years ago...
                </p>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-semibold text-center py-10 text-orange-400">Our Services</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((aService) => (
          <ServicesCard services={aService}></ServicesCard>
        ))}
      </div>
      <div className="mt-10 mb-5 h-[90vh]">
      <About id="about"></About>
      </div>
      <div className="mt-10">
      <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
