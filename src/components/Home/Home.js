import React, { useState } from "react";
import BG from "../../BackgroundImage/ZomatoHomePage.avif";
import Zomato from "../../BackgroundImage/ZomatoTitle.avif";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Search } from "lucide-react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PhoneNumber, EmailField } from "../Contact/Contact";
const Home = ({ isHomeVisible }) => {
  const [isEmail, setEmail] = useState(true); // State to track the selected input
  const [openAccordions, setOpenAccordions] = useState([]); // State to track open accordions

  if (isHomeVisible === "true") {
    return null;
  } else {
    const toggleAccordion = (index) => {
      setOpenAccordions(
        (prevState) =>
          prevState.includes(index)
            ? prevState.filter((id) => id !== index) // Close accordion if already open
            : [...prevState, index] // Open accordion if not open
      );
    };

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
    const cities = [
      "Ahmedabad",
      "Bangalore",
      "Chandigarh",
      "Chennai",
      "Delhi",
      "Mumbai",
      "Hyderabad",
      "Pune",
      "Kolkata",
      "Jaipur",
      "Lucknow",
      "Indore",
      "Surat",
      "Bhopal",
      "Patna",
      "Guwahati",
      "Nagpur",
      "Vadodara",
      "Coimbatore",
      "Thiruvananthapuram",
      "Agra",
      "Ajmer",
      "Aligarh",
      "Amritsar",
      "Aurangabad",
      "Bareilly",
      "Bhubaneswar",
      "Bilaspur",
      "Cuttack",
      "Dehradun",
      "Dhanbad",
      "Durgapur",
      "Faridabad",
      "Gandhinagar",
      "Ghaziabad",
      "Gorakhpur",
      "Gwalior",
      "Haldwani",
      "Hosur",
      "Hubli",
      "Jabalpur",
      "Jalandhar",
      "Jammu",
      "Jamshedpur",
      "Jodhpur",
      "Kanpur",
      "Kochi",
      "Kolhapur",
      "Kozhikode",
      "Ludhiana",
      "Madurai",
      "Mangalore",
      "Meerut",
      "Moradabad",
      "Mysore",
      "Nashik",
      "Noida",
      "Pondicherry",
      "Prayagraj",
      "Raipur",
      "Rajkot",
      "Ranchi",
      "Rourkela",
      "Salem",
      "Siliguri",
      "Solapur",
      "Srinagar",
      "Tiruchirappalli",
      "Tirupati",
      "Tirunelveli",
      "Udaipur",
      "Ujjain",
      "Varanasi",
      "Vijayawada",
      "Visakhapatnam",
      "Warangal",
    ];

    const Accordion = [
      {
        title: "Popular Cuisines Near Me",
        desc: [
          "Bakery near me",
          "Beverages near me",
          "Biryani near me",
          "Burger near me",
          "Chinese near me",
          "Desserts near me",
          "Ice Cream near me",
          "Kebab near me",
          "Maharashtrian near me",
          "Momos near me",
          "Mughlai near me",
          "Pizza near me",
          "Rolls near me",
          "Sandwich near me",
          "Seafood near me",
          "Shake near me",
          "Sichuan near me",

          "Street near me",
        ],
      },
      {
        title: "Popular Restaurant Types Near Me",
        desc: [
          "Bakeries near me",
          "Bars near me",
          "Beverage Shops near me",
          "Bhojanalya near me",
          "Cafés near me",
          "Casual Dining near me",
          "Clubs near me",
          "Cocktail Bars near me",
          "Confectioneries near me",
          "Dessert Parlors near me",
          "Dhabas near me",
          "Fine Dining near me",
          "Food Courts near me",
          "Food Trucks near me",
          "Irani Cafes near me",
          "Kiosks near me",
          "Lounges near me",
          "Microbreweries near me",
          "Paan Shop near me",
          "Pubs near me",
          "Quick Bites near me",
          "Shacks near me",
          "Sweet Shops near me",
        ],
      },
      {
        title: "Top Restaurant Chains",
        desc: [
          "Bikanervala",
          "Biryani Blues",
          "Burger King",
          "Domino's",
          "Dunkin' Donuts",
          "KFC",
          "Krispy Kreme",
          "McDonald's",
          "Pizza Hut",
          "WOW! Momo",
        ],
      },
      {
        title: "Cities We Deliver To",
        desc: cities,
      },
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
            <div className="relative flex flex-col sm:flex-row justify-center items-center sm:space-y-0 space-y-3 sm:space-x-[-15px]">
              {/* Location Input */}
              {!isHomeVisible ? (
                <div className="flex items-center px-4 py-3 bg-white text-gray-700 rounded-lg w-full sm:w-64">
                  <FmdGoodIcon className="text-red-400 mr-2" />
                  <input
                    type="text"
                    className="flex-1 outline-none placeholder-gray-400"
                    placeholder="Mumbai"
                  />
                </div>
              ) : null}

              {/* Divider span */}
              {!isHomeVisible ? (
                <span
                  style={{ marginRight: "7rem" }}
                  className="absolute sm:mx-4 hidden sm:block top-1/2 transform -translate-y-1/2 border-l-2 border-gray-300 h-6"
                ></span>
              ) : null}

              {/* Search Input */}
              {!isHomeVisible ? (
                <div className="flex items-center px-4 py-3 bg-white text-gray-700 rounded-lg w-full sm:w-96">
                  <Search className="text-gray-400 mr-2" />
                  <input
                    type="text"
                    className="flex-1 outline-none placeholder-gray-400"
                    placeholder="Search for restaurants, cuisines, or dishes"
                  />
                </div>
              ) : null}
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
        <div className="lg:px-[13rem] mt-12 mb-20 px-6 sm:px-12 grid gap-6 sm:gap-12 grid-cols-2 md:grid-cols-2 xs:grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-center items-center">
          {Cards.map((card, index) => (
            <div
              key={index}
              className=" bg-white rounded-xl shadow-xl hover:cursor-pointer"
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
            className=" lg:px-[10rem] ml-12 text-3xl font-semibold mb-1"
            style={{ color: "rgb(54, 54, 54)" }}
          >
            Collections
          </h3>
          <div className=" lg:px-[10rem] flex flex-col sm:flex-row justify-between mr-16">
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

          <div className=" lg:px-[13rem] mt-8 mb-5 rounded-lg px-6 sm:px-12 grid gap-2 sm:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
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

        {/* Location Section */}
        <div>
          <div className="lg:px-[10rem] mb-10 mt-20 flex flex-col sm:flex-row justify-between items-center mr-16 ">
            <h6 className="ml-12 text-3xl text-gray-800">
              Popular Localities in and Around{" "}
              <span className="font-semibold">Mumbai</span>
            </h6>
          </div>
          <div className="lg:px-[13rem] mt-8 mb-[5rem] px-6 sm:px-12 grid gap-6 sm:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-center">
            {Locations.map((card, index) => (
              <div
                key={index}
                className="relative border-2 border-grey-800 flex justify-between bg-white rounded-lg shadow-xs hover:shadow-lg transition duration-100 ease-in-out transform hover:scale-100 hover:bg-white-50 cursor-pointer"
              >
                {/* Card Text */}
                <div
                  className="flex justify-between items-center w-full"
                  style={{ padding: "1rem 1rem" }}
                >
                  <div>
                    <h5 className="text-2xl text-gray-800">{card.city}</h5>
                    {card.city === "See More" ? (
                      <h6 className=" mt-1 text-[1rem] text-white">text</h6>
                    ) : (
                      <h6 className=" mt-1 text-[1rem] text-gray-600">
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

        {/* Get the Zomato App */}
        <div style={{ backgroundColor: "rgb(255, 251, 247" }} className="p-2">
          <div className="flex justify-center flex-row">
            <img
              className="hidden xs:block sm:block"
              width={"30%"}
              height={"auto"}
              src="https://b.zmtcdn.com/data/o2_assets/ce5bc038a8a2d4f8f24465c8826182af1726501431.png"
              alt="Mobile App"
            />

            <div className="ml-5 mt-10">
              <h1 className="text-4xl">Get the Zomato app</h1>
              <h1 className="mt-5 text-xl text-grey-600 font-light">
                We will send you a link, open it on your phone to download the
                app
              </h1>
              <div>
                {/* Radio buttons for selecting contact method */}
                <div className="mt-7 flex items-center gap-20">
                  <div className="flex items-center">
                    <input
                      onClick={() => setEmail(true)}
                      id="email-radio"
                      type="radio"
                      name="contact-method"
                      className="w-4 h-4 text-red-600 border-gray-300 focus:ring-0 focus:ring-red-600"
                      defaultChecked // Email is selected by default
                    />
                    <label
                      htmlFor="email-radio"
                      className="ml-2 text-gray-800 font-light"
                    >
                      Email
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      onClick={() => setEmail(false)}
                      id="phone-radio"
                      type="radio"
                      name="contact-method"
                      className="w-4 h-4 text-red-600 border-red-600 focus:ring-0 checked:bg-red-600"
                    />
                    <label
                      htmlFor="phone-radio"
                      className="ml-2 text-gray-800 font-light"
                    >
                      Phone
                    </label>
                  </div>
                </div>

                {/* Input field */}
                <div className="mt-5">
                  {/* Flex container with responsive layout */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* Input Field */}
                    <div className="w-full sm:w-8/12">
                      {isEmail ? <EmailField /> : <PhoneNumber />}
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="mt-5 text-gray-600 font-light">
                Download app from
              </h5>

              <div className="flex items-center gap-5 mt-5 ">
                <img
                  width={"25%"}
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt="Picture"
                ></img>
                <img
                  width={"25%"}
                  src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt="Picture"
                ></img>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div>
          <div className="lg:px-[10rem]  mb-10 mt-10 flex flex-col sm:flex-row justify-between items-center mr-16">
            <h6
              className="ml-12 text-3xl"
              style={{
                color: "rgb(54, 54, 54)",
                fontWeight: "500",
              }}
            >
              Explore options near me
            </h6>
          </div>
          <div className="lg:px-[13rem] mt-5 mb-[5rem] px-6 sm:px-12 grid gap-5">
            {Accordion.map((card, index) => (
              <div
                key={index}
                className={`border-2 border-grey-800 bg-white rounded-lg ${
                  openAccordions.includes(index)
                    ? "bg-white-50"
                    : "hover:bg-white-50"
                } cursor-pointer`}
              >
                {/* Accordion Header */}
                <div
                  className="flex justify-between items-center px-6 py-4"
                  onClick={() => toggleAccordion(index)}
                >
                  <div>
                    <h5
                      style={{
                        fontSize: "20px",
                        color: "rgb(28, 28, 28)",
                        fontWeight: "400",
                      }}
                    >
                      {card.title}
                    </h5>
                    {card.city === "See More" ? (
                      <h6 className="mt-1 text-[1rem] text-white">text</h6>
                    ) : (
                      <h6 className="mt-1 text-[1rem] text-gray-600">
                        {/* Add info here if needed */}
                      </h6>
                    )}
                  </div>
                  {openAccordions.includes(index) ? (
                    <KeyboardArrowUpIcon sx={{ marginTop: "5px" }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ marginTop: "5px" }} />
                  )}
                </div>

                {/* Accordion Content */}
                {openAccordions.includes(index) && (
                  <div className="px-6 py-4 text-gray-600">
                    <ul className="list-none pl-6 flex flex-wrap gap-6 wrapper">
                      {/* Conditionally render bullets for "Popular Cuisines Near Me" and "Popular Restaurant Types Near Me" */}
                      {card.title === "Popular Cuisines Near Me" ||
                      card.title === "Popular Restaurant Types Near Me"
                        ? card.desc.map((descItem, idx) => (
                            <li
                              key={idx}
                              className="text-[1.1rem] text-gray-500 hover:text-gray-800 transition duration-200 ease-in-out"
                              style={{ flex: "0 0 18%" }} // Controls the width of each item to fit two items per row
                            >
                              {descItem}
                            </li>
                          ))
                        : // Render non-bullet content for "Top Restaurant Chains" and "Cities We Deliver To"
                          card.desc.map((descItem, idx) => (
                            <div
                              key={idx}
                              className="text-[1.1rem] text-gray-500"
                            >
                              {descItem}
                            </div>
                          ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
// Toggle function to open/close accordions

export default Home;
