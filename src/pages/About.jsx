import React from "react";
import { PiCheckFatBold } from "react-icons/pi";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="text-5xl font-semibold text-center py-10 text-orange-400">
        About Us
      </h1>
      <section className="grid grid-cols-2 justify-center items-center gap-5">
        <div data-aos="zoom-in-left" data-aos-duration="2000" className="space-y-3">
          <h1 className="text-5xl font-semibold">Yoga & <span className="text-orange-300">Fitness Center</span> </h1>
          <p className="text-xl font-medium ">We are a gym that committed to helping people reach there fitness goal. We often a verity of there programs and services to fit your needs, whether you are a experienced athlete. <br /> We believe that everyone should have access to the benefits of exercise make it happen.</p>
          <h2 className="text-3xl font-semibold">Why should people choose <span className="text-orange-300">Yoga & Fitness</span> services</h2>
          <ol className="space-y-2">
            <li className="flex gap-2 text-xl font-bold"><PiCheckFatBold className="text-orange-300"></PiCheckFatBold> Personal Tanning</li>
            <p>Our personal trainers can help you to create a personalized and track your progress.</p>
            <li className="flex gap-2 text-xl font-bold"><PiCheckFatBold className="text-orange-300"></PiCheckFatBold> Expert Trainer</li>
            <p>Our gym is proud to offer a team of highly skilled and certified trainer help to achieve your health and fitness goals. </p>
            <li className="flex gap-2 text-xl font-bold"><PiCheckFatBold className="text-orange-300"></PiCheckFatBold> Flexible Time</li>
            <p>There are many fitness classes that offered during off-peak hours, such as early morning or late evening.</p>
          </ol>
        </div>
        <div data-aos="zoom-in-right" data-aos-duration="2000">
          <img className="shadow-lg shadow-black rounded-lg" src="https://i.ibb.co/k4rnRbP/man-women-doing-crunches.jpg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
