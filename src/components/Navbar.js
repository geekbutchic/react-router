import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" style={{ color: "yellow" }}>
        Home{" "}
      </Link>
      <Link to="/blogs" style={{ color: "green" }}>
        Blogs
      </Link>
    </nav>
  );
};

export default Navbar;
