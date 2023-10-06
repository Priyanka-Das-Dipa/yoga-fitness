import React from "react";
import { Link } from "react-router-dom";
import error from "../../public/pictures/error.jpg";

const ErrorPage = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-md text-center">
            <img className="w-[450px]" src={error} alt="" />
            <Link className="btn btn-neutral" to="/">
              Go To Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
