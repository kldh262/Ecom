import React from "react";
import Abt from "../assets/MSI_MPG.jpg";
export default function About() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Abt} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-6xl font-bold">Brief about this project!</h1>
            <p className="py-6 text-2xl">
              This is the first project that I create from scratch using ReactJS.<br /> I use the API from The Movie Database (TMDB) to get the data.<br /> I use the React Router to navigate between pages.<br /> I use the React Context to manage the state of the search bar.<br /> I use the React Hooks to manage the state of the cart.
            </p>
              <a href="https://github.com/kldh262" className="btn btn-primary">See More projects !</a>
          </div>
        </div>
      </div>
    </>
  );
}