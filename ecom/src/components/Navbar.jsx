import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Icon from "../assets/ward.jpg";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useSearchDetails } from "../context/searchDetails";

export default function Navbar() {
  let location = useLocation();
  const { setSearch } = useSearchDetails();

  function searchOn() {
    if (location.pathname === "/details")
      return (
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      );
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/">
          E-COM
        </a>
      </div>

      <button><CustomLink to="/cart" className="mx-2 hover:bg-violet-600 p-4 rounded-lg">Cart</CustomLink></button>
      <CustomLink to="/about" className="mx-2 hover:bg-violet-600 p-4 rounded-lg">About</CustomLink>

      <div className="flex-none gap-2">
        {searchOn()}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={Icon} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between" href="/profile">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <CustomLink to="/cart">Cart</CustomLink>
            <CustomLink to="/login">Login</CustomLink>
            <CustomLink to="/signup">Signup</CustomLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
