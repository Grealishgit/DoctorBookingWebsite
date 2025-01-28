import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-blue-600 font-medium">US</span>
        </p>
      </div>

      {/* About Section Card */}
      <div className="my-10">
        <div className="border rounded-lg shadow-lg p-6 mx-auto max-w-4xl">
          <p className="text-sm text-gray-600 mb-4">
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to scheduling
            doctor appointments and managing their health records. Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way. <span className="text-blue-600 font-semibold  hover:text-green-600  transition-all duration-300 cursor-pointer">We offer health services in the following fields.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Sub Cards for Specialties */}
            <div className="border rounded-lg shadow-lg p-4  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>General Physician</b>
            </div>
            <div className="border rounded-lg shadow-lg p-4 hover:bg-green-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Gynecologist</b>
            </div>
            <div className="border rounded-lg shadow-lg p-4  hover:bg-red-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Dermatologist</b>
            </div>
            <div className="border rounded-lg shadow-lg p-4  hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Pediatrician</b>
            </div>
            <div className="border rounded-lg shadow-lg p-4  hover:bg-green-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Neurologist</b>
            </div>
            <div className="border rounded-lg shadow-lg p-4  hover:bg-red-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
              <b>Gastroenterologist</b>
            </div>
          </div>
        </div>
      </div>

      <div className="text-xl my-4 text-center">
        <p>WHY <span className="text-blue-700 font-semibold">CHOOSE US</span></p>
      </div>

      <div className="flex flex-col md:flex-row justify-center mb-20 gap-4">
        {/* Efficiency Card */}
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer w-full md:w-1/3 rounded-lg shadow-lg h-full">
          <b>Efficiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Convenience Card */}
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer w-full md:w-1/3 rounded-lg shadow-lg h-full">
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Personalization Card */}
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-red-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer w-full md:w-1/3 rounded-lg shadow-lg h-full">
          <b>Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
