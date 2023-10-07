import React, { useContext, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert";

const Register = () => {
  const bg = {
    backgroundImage:
      'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/47ZcqHh/bg-2.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    position: "relative",
  };
  const [showToast, setSowToast] = useState(false);
  const navigate = useNavigate()
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSowToast(true);
        swal("Successfully!", "Logged in!", "success")
        navigate("/login")
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="h-screen" style={bg}>
      <Navbar></Navbar>
      <div className="flex justify-center items-center mt-10 text-white">
        <div className="border px-12 md:px-32  py-5 rounded-md">
          <form onSubmit={handleRegister}>
            <h2 className="text-2xl font-bold">Register</h2>
            <div className="space-y-2">
              <div class="flex w-72 flex-col gap-6 mt-5">
                <div class="relative h-11 w-full md:min-w-[350px]">
                  <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    name="firstName"
                  />
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    First Name
                  </label>
                </div>
              </div>
              <div className="flex w-72 flex-col gap-6 mt-5">
                <div className="relative h-11 w-full md:min-w-[350px]">
                  <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    name="lastName"
                  />
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Last Name
                  </label>
                </div>
              </div>
              <div className="flex w-72 flex-col gap-6 mt-5">
                <div className="relative h-11 w-full md:min-w-[350px]">
                  <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="email"
                    name="email"
                  />
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Username or Email
                  </label>
                </div>
              </div>

              <div className="flex w-72 flex-col gap-6">
                <div className="relative h-11 w-full md:min-w-[350px]">
                  <input
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="password"
                    name="password"
                  />
                  <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-black after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:border-black peer-focus:after:scale-x-100 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </div>
              <button className="btn btn-warning w-full mt-5">Register</button>
            </div>
            <p className="mt-5">
              Already have an Account?{" "}
              <Link to="/login" className="text-yellow-400 underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div className="text-center flex justify-center items-center mt-3">
        <div className="space-y-3 text-white">
          <button className="py-2 px-9 border rounded-xl flex items-center justify-between  text-xl gap-6">
            <FaFacebook className="text-2xl text-blue-400"></FaFacebook>{" "}
            Continue with Facebook
          </button>
          <button className="py-2 px-9 border rounded-xl flex items-center justify-between  text-xl gap-6">
            <FaGoogle className="text-2xl text-green-300"></FaGoogle> Continue
            with Facebook
          </button>
        </div>
      </div>

      {showToast && swal("Successfully!", "Your Registration is Done!", "success")}
    </div>
  );
};

export default Register;
