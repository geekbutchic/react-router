import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="blog-page ">
      <Navbar  />
      <h1>Blogs Page</h1>
      {/* Outlook component is replaced with child element */}
      <Outlet/>
    </div>
  );
};

export default Blogs;
