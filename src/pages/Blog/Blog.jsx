import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";
import Navbar from "../../navbar/Navbar";

const Blog = () => {
    const bg = {
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co/47ZcqHh/bg-2.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      };
  const blogs = useLoaderData();
  return (
   <div style={bg}>
    <Navbar></Navbar>
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto ">
      {blogs.map((blog) => (
        <BlogCard blogs={blog}></BlogCard>
      ))}
    </div>
   </div>
  );
};

export default Blog;
