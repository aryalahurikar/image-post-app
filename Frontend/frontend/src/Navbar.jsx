import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2>MyApp</h2>
      <div className="nav-links">
        <Link to="/feed">Feed</Link>
        <Link to="/create-post">Create Post</Link>
      </div>
    </div>
  );
};

export default Navbar;