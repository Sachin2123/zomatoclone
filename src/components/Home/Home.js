import React from "react";
import BG from "../../BackgroundImage/ZomatoHomePage.avif";
import Zomato from "../../BackgroundImage/ZomatoTitle.avif";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Search } from "lucide-react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Home = () => {
  const Cards = [
    {
      title: "Order Online",
      desc: "Order your favorite food and enjoy at home.",
      image:
        "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
    },
    {
      title: "Dining Out",
      desc: "Explore the best dining experiences near you.",
      image:
        "https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
    },
    {
      title: "Live Events",
      desc: "Discover live events happening in your city.",
      image:
        "https://b.zmtcdn.com/data/o2_assets/371de657644f1b5818fcb5d83387c8c91722851940.png?output-format=webp&fit=around|402:360&crop=402:360;*,*",
    },
    {
      title: "Order Online",
      desc: "Order your favorite food and enjoy at home.",
      image:
        "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*",
    },
  ];

  const Collection = [
    {
      title: "Top Trending Spots",
      desc: "34 Places",
      image:
        "https://b.zmtcdn.com/data/collections/edd5abbddd239a8cfb8099c63b1baaf0_1675247359.jpg?output-format=webp",
    },
    {
      title: "Best Insta-worthy Places",
      desc: "28 Places",
      image:
        "https://b.zmtcdn.com/data/collections/5cbe9bc87c9da2c6954772540d2e5db5_1730710015.png?output-format=webp",
    },
    {
      title: "Newly Opened Places",
      desc: "31 Places",
      image:
        "https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171294.png?output-format=webp",
    },
    {
      title: "Winter Park at Jio World's...",
      desc: "17 Places",
      image:
        "https://b.zmtcdn.com/data/collections/3619623c31909cfda8661deffb8291ec_1734517769.png?output-format=webp",
    },
  ];

  const Locations = [
    { city: "Lower Parel", places: 492 },
    { city: "Powai", places: 439 },
    { city: "Malad West", places: 957 },
    { city: "Borivali West", places: 686 },
    { city: "Bandra Kurla", places: 161 },
    { city: "Vashi", places: 666 },
    { city: "Fort", places: 289 },
    { city: "Juhu", places: 250 },
    { city: "See More", places: "" },
  ];

  return (
    <div className="relative">
      <div className="relative">
        {/* Main Content Above the Background */}
        <div className="absolute mt-20 top-0 left-0 right-0 z-10 text-center px-4 py-12">
          {/* Zomato Logo */}
          <div className="flex justify-center mb-8">
            <img className="w-40 sm:w-72" src={Zomato} alt="Zomato Logo" />
          </div>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white mb-8 font-light">
            Discover the best food & drinks in{" "}
            <span className="font-semibold">Mumbai</span>
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-y-0 space-y-3 sm:space-x-3">
            {/* Location Input */}
            <div className="flex items-center px-4 py-3 bg-white text-gray-700 rounded-lg w-full sm:w-64">
              <FmdGoodIcon className="text-red-400 mr-2" />
              <input
                type="text"
                className="flex-1 outline-none placeholder-gray-400"
                placeholder="Mumbai"
              />
            </div>
            <div className="border-l-2 border-gray-300 h-6 mx-4 hidden sm:block"></div>

            {/* Search Input */}
            <div className="flex items-center px-4 py-3 bg-white text-gray-700 rounded-lg w-full sm:w-96">
              <Search className="text-gray-400 mr-2" />
              <input
                type="text"
                className="flex-1 outline-none placeholder-gray-400"
                placeholder="Search for restaurants, cuisines, or dishes"
              />
            </div>
          </div>
        </div>

        {/* Background Section */}
        <img
          className="w-full h-[430px] object-cover"
          src={BG}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Card Section */}
      <div className="mt-12 mb-20 px-6 sm:px-12 grid gap-6 sm:gap-12 grid-cols-2 md:grid-cols-2 xs:grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
        {Cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-xl hover:cursor-pointer"
          >
            <img
              className="w-full h-48 sm:h-56 object-cover rounded-t-2xl"
              src={card.image}
              alt={card.title}
            />
            <div className="p-4 rounded-b-xl">
              <h5 className="text-lg font-semibold text-gray-900">
                {card.title}
              </h5>
              <p className="text-sm text-gray-600 mt-2">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Collection Section */}
      <div>
        <h3
          className="ml-12 text-3xl font-semibold mb-1"
          style={{ color: "rgb(54, 54, 54)" }}
        >
          Collections
        </h3>
        <div className="flex flex-col sm:flex-row justify-between mr-16">
          <h6 className="ml-12 text-xl">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends.
          </h6>
          <div className="flex items-center hover:cursor-pointer mt-4 sm:mt-0 hidden sm:flex ">
            <h6 className="ml-12 text-xl text-red-400 hover:text-red-600">
              Connections in Mumbai
            </h6>
            <ArrowRightIcon
              sx={{
                marginTop: "5px",
                color: "rgb(224, 53, 70)",

                "&:hover": {
                  color: "rgb(185, 28, 28)",
                },
              }}
            />
          </div>
        </div>

        <div className="mt-8 mb-5 rounded-lg px-6 sm:px-12 grid gap-2 sm:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
          {Collection.map((card, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-xl hover:cursor-pointer"
            >
              <img
                className="w-full h-80 rounded-lg sm:h-96 lg:h-[400px] object-cover"
                src={card.image}
                alt={card.title}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 rounded-b-md">
                <h5 className="text-lg font-semibold">{card.title}</h5>
                <div className="flex items-center hover:cursor-pointer">
                  <p className="text-sm">{card.desc}</p>
                  <ArrowRightIcon sx={{ marginTop: "4px" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mb-12 hover:cursor-pointer mt-4 sm:mt-0 xs:block sm:hidden">
          <h6 className="ml-7 text-xl text-red-400 hover:text-red-600">
            Connections in Mumbai
          </h6>
          <ArrowRightIcon
            sx={{
              marginTop: "5px",
              color: "rgb(224, 53, 70)",
              "&:hover": {
                color: "rgb(185, 28, 28)",
              },
            }}
          />
        </div>
      </div>

      <div className="mb-10 mt-20 flex flex-col sm:flex-row justify-between items-center mr-16">
        <h6 className="ml-12 text-3xl font-semibold text-gray-800">
          Popular Localities in and Around Mumbai
        </h6>
      </div>

      <div className="mt-8 mb-10 px-6 sm:px-12 grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
        {Locations.map((card, index) => (
          <div
            key={index}
            className="relative border-gray-800 flex justify-between bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-100 hover:bg-white-50 cursor-pointer"
          >
            {/* Card Text */}
            <div className="flex justify-between gap-2 items-center w-full p-5">
              <div>
                <h5 className="text-xl text-gray-800">{card.city}</h5>
                {card.city === "See More" ? (
                  ""
                ) : (
                  <h6 className="text-lg mt-2  text-gray-800">
                    {card.places} Places
                  </h6>
                )}
              </div>
              {card.city === "See More" ? (
                <KeyboardArrowDownIcon
                  sx={{
                    marginTop: "5px",
                  }}
                />
              ) : (
                <KeyboardArrowRightIcon
                  sx={{
                    marginTop: "5px",
                  }}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
