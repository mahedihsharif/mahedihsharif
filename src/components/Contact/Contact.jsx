import emailjs from "emailjs-com";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import Profile from "../../../assets/images/mypic.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [msg, setMsg] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_SERVICE_TEMPLATE,
        e.target,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          setMsg("");
          setMsg("Message sent successfully!");
        },
        (error) => {
          setMsg("");
          setMsg("Failed to send the message.");
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="py-40">
      <h1 className="sm:text-5xl text-2xl font-secondary font-bold pt-5 pb-14 text-center">
        Contact With Me
      </h1>
      <div className="lg:flex gap-14 mt-10">
        <div className="card lg:w-[50%] maxLg:w-full bg-blueDark">
          <figure className="px-8 pt-8">
            <Image src={Profile} width="full" alt="" />
          </figure>
          <div className="card-body">
            <h1 className="card-title text-3xl font-secondary">
              Mahedi H Sharif
            </h1>
            <h3 className="text-lg py-3">Web Developer</h3>
            <p className="text-lg">
              I am available for work. Contact with me via email or Linkedin.
            </p>
            <p className="text-lg py-3 font-semibold">
              Email: <span className="font-normal">mahedi5061@gmail.com</span>
            </p>
            <p className="font-semibold">
              Phone: <span className="font-normal">+880-1700772420</span>
            </p>
            <div>
              <p className="py-8 font-secondary text-sm tracking-wider">
                FIND WITH ME
              </p>
              <div className="flex gap-8">
                <a
                  href="https://www.facebook.com/mahedihsharif"
                  className="w-14 h-14 rounded-md bg-mainColor flex justify-center items-center cursor-pointer"
                >
                  <FiFacebook className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/mahedihsharif"
                  className="w-14 h-14 rounded-md bg-mainColor flex justify-center items-center cursor-pointer"
                >
                  {" "}
                  <AiOutlineInstagram className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/mahedihsharif"
                  className="w-14 h-14 rounded-md bg-mainColor flex justify-center items-center cursor-pointer"
                >
                  <FiLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* contact */}
        <div className="card w-full bg-blueDark p-8 maxLg:mt-10">
          <form id="#myForm" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="text"
                className="uppercase block mb-2 text-sm font-medium tracking-widest"
              >
                your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-mainColor border border-blueDark text-sm rounded-lg focus:ring-blueDark focus:border-blueDark block w-full p-3.5 dark:bg-mainColor dark:border-blueDark dark:focus:ring-blueDark dark:focus:border-blueDark"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="uppercase block mb-2 text-sm font-medium tracking-widest"
              >
                your email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-mainColor border border-blueDark text-sm rounded-lg focus:ring-blueDark focus:border-blueDark block w-full p-3.5 dark:bg-mainColor dark:border-blueDark dark:focus:ring-blueDark dark:focus:border-blueDark"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="uppercase block mb-2 text-sm font-medium tracking-widest"
              >
                your phone
              </label>
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-mainColor border border-blueDark text-sm rounded-lg focus:ring-blueDark focus:border-blueDark block w-full p-3.5 dark:bg-mainColor dark:border-blueDark dark:focus:ring-blueDark dark:focus:border-blueDark"
                placeholder="Enter your number"
              />
            </div>

            <label
              htmlFor="message"
              className="uppercase block mb-2 text-sm font-medium tracking-widest"
            >
              Your message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="block p-3.5 w-full text-sm  bg-mainColor rounded-lg border border-redColor focus:ring-redColor focus:border-redColor dark:bg-mainColor dark:border-blueDark dark:focus:ring-redColor dark:focus:border-redColor"
              placeholder="Message"
            ></textarea>

            <button
              type="submit"
              className="mt-8 bg-mainColor font-medium rounded-lg text-sm w-full py-3.5 text-center dark:bg-mainColor dark:focus:ring-mainColor"
            >
              Submit
            </button>
          </form>
          <div className="mt-8">
            <p className="text-gray-300 text-xl">{msg && msg}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
