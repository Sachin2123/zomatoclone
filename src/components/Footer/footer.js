import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import Zomato from "../../BackgroundImage/ZomatoTitle.avif";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/Zomato", icon: <FaFacebookF /> },
    { href: "https://www.instagram.com/zomato/", icon: <FaInstagram /> },
    { href: "https://twitter.com/zomato", icon: <FaTwitter /> },
    {
      href: "https://www.linkedin.com/company/zomato/",
      icon: <FaLinkedinIn />,
    },
    { href: "https://www.youtube.com/c/Zomato", icon: <FaYoutube /> },
  ];

  const aboutLinks = [
    { text: "Who We Are", href: "/" },
    { text: "Blog", href: "/" },
    { text: "Work with Us", href: "/" },
    { text: "Investor Relations", href: "/" },
    { text: "Report Fraud", href: "/" },
    { text: "Press Kit", href: "/" },
    { text: "Contact Us", href: "/" },
  ];

  const zomaverseLinks = [
    { text: "Zomato", href: "/" },
    { text: "Blinkit", href: "/" },
    { text: "District", href: "/" },
    { text: "Feeding India", href: "/" },
    { text: "Hyperpure", href: "/" },
    { text: "Zomato Live", href: "/" },
    { text: "Zomaland", href: "/" },
    { text: "Weather Union", href: "/" },
  ];
  return (
    <div className="bg-[#FAFAFA] text-black">
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
          alt="Zomato"
          className="w-32 mb-10"
        />

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Options
              <ChevronDownIcon
                aria-hidden="true"
                className="-mr-1 size-5 text-gray-400"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Account settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  Support
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                >
                  License
                </a>
              </MenuItem>
              <form action="#" method="POST">
                <MenuItem>
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </form>
            </div>
          </MenuItems>
        </Menu>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold">About Zomato</h3>
            <ul className="mt-4 space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold">ZOMAVERSE</h3>
            <ul className="mt-4 space-y-2">
              {zomaverseLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold">FOR RESTRAURENTS</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Partner with Us{" "}
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Apps For You{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-lg font-semibold">LEARN MORE</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Privacy{" "}
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Security{" "}
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Terms{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-lg font-semibold">Social Links</h3>
            <div className="flex space-x-1 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white rounded-full p-2"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <div className=" mt-5 ">
              <img
                width={"70%"}
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt="Picture"
              ></img>
              <img
                className="mt-5"
                width={"70%"}
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt="Picture"
              ></img>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          {/* <p>&copy; {new Date().getFullYear()} Zomato. All rights reserved.</p> */}
          <p>
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2025 © Zomato™ Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
