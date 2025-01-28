import React from 'react';
import { assets } from '../assets/assets';
import { toast } from 'react-toastify'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8926a414-00fe-4111-b2cd-000c7bd2ec57");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  }

  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-blue-600 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-between gap-10 mb-28 text-sm">
        {/* Image Section */}
        <div className="md:w-1/3 flex justify-center items-center">
          <img
            className="w-full h-auto md:max-w-[360px] rounded-2xl object-cover"
            src={assets.contact_image}
            alt="Contact"
          />
        </div>

        {/* Form Section */}
        <form className="md:w-1/3 text-gray-600 flex flex-col gap-1" onSubmit={onSubmit}>
          <p className="font-semibold text-lg text-blue-600">Contact Us</p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left px-2">
              <label>Your Name</label>
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="w-full md:w-1/2 text-left px-2 md:pl-4">
              <label>Your Email</label>
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="my-6 text-left">
            <label>Your Message</label>
            <textarea
              name="Message"
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            ></textarea>
          </div>

          <button className="border border-gray-300 text-black py-4 px-12 mb-10 rounded-md hover:bg-green-500 transition-all duration-500 hover:text-white">
            {result ? result : "Send Message"}
          </button>
        </form>

        {/* Office Information Section */}
        <div className="md:w-1/3 flex flex-col gap-6 justify-center items-start">
          <p className="font-semibold text-lg text-blue-600">OUR OFFICE</p>
          <p className="text-gray-500">
            54710 Willams Station <br />
            Suite 360, Washington, Kenya
          </p>
          <p className="text-gray-500">
            Tel: (425) 555-0133 <br />
            Email: eugyneehunter@gmail.com
          </p>
          <p className="font-semibold text-lg text-blue-600">Careers At PRESCRIPTO</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-blue-600 px-10 py-3 text-sm hover:bg-blue-600 hover:text-white transition-all duration-500 rounded-md">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
