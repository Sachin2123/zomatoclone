import React from "react";
import BG from "../../BackgroundImage/ZomatoHomePage.avif";

const Home = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        className="w-full h-[500px] object-cover"
        src={BG}
        alt="Background Image"
      />

      {/* Overlay for dark background */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Main Section (CTA and Text) */}
      <div className=" absolute top-1/3 left-0 right-0 z-10 text-center text-white px-4">
        <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Zomato{" "}
        </h1>
        <p className="text-xl sm:text-2xl mb-6 ">
          Discover the best food & drinks in Mumbai
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            className="px-4 py-2 rounded-lg w-100 sm:w-96 text-gray-700"
            placeholder="Search for restaurants, cuisines or a dishes"
          />
        </div>
      </div>

      {/* Footer Section */}
      {/* <footer className="bg-gray-900 text-white py-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-4">© 2025 Zomato</div>
          <div className="space-x-4 text-sm">
            <a href="#" className="hover:text-red-600">
              About
            </a>
            <a href="#" className="hover:text-red-600">
              Blog
            </a>
            <a href="#" className="hover:text-red-600">
              Contact
            </a>
            <a href="#" className="hover:text-red-600">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
