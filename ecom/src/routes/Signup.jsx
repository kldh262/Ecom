import React from "react";
import './Signup.css'
export default function Signup() {
  return (
    <div className='bod'>
      <form action="" method="post" id="form">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">E-mail</span>
          </label>
          <input
            type="text"
            placeholder="E-mail"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-outline btn-primary" type="submit" value="submit" id="sub">Submit</button>
      </form>
    </div>
  );
}