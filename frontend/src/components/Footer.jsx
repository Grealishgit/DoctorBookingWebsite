import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-6 my-10 mt-40 text-sm">
        {/*------Left Section-------*/}
        <div className="flex flex-col items-start">
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Prescripto is dedicated to making healthcare accessible and seamless. With our easy-to-use platform,
            you can effortlessly book doctor appointments, manage your health, and securely handle payments – all in one place.
            Your health matters to us, and we’re here to ensure you get the care you deserve, whenever you need it.
          </p>
        </div>

        {/*------Center Section-------*/}
        <div className="flex flex-col items-center">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 cursor-pointer">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/*------Right Section-------*/}
        <div className="flex flex-col items-end">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+254-742-636-835</li>
            <li>eugyneehunter@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* -------Copyright Text------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@Prescripto - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
