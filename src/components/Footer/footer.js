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
import INDIA from "../../Flags/INDIA.png";
import UAE from "../../Flags/UAE.png";
import LanguageIcon from "@mui/icons-material/Language";
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

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "hi", label: "Hindi", flag: "🇮🇳" },
    { code: "es", label: "Spanish", flag: "🇪🇸" },
    { code: "fr", label: "French", flag: "🇫🇷" },
    { code: "de", label: "German", flag: "🇩🇪" },
    { code: "it", label: "Italian", flag: "🇮🇹" },
    { code: "pt", label: "Portuguese", flag: "🇵🇹" },
    { code: "zh", label: "Chinese", flag: "🇨🇳" },
    { code: "ar", label: "Arabic", flag: "🇸🇦" },
    { code: "ru", label: "Russian", flag: "🇷🇺" },
  ];

  return (
    <div className="bg-[#FAFAFA] text-black">
      <div className="lg:px-[6rem] max-w-screen-xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-2 lg:flex lg:justify-between mb-5 gap-4">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            alt="Zomato"
            className="w-32 mb-10"
          />
          <div className="flex space-x-5">
            {/* INDIA */}
            <Menu as="div" className="relative inline-block text-left">
              <div className="">
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <img
                    src={INDIA}
                    alt="India Flag"
                    className="w-5 h-5 mr-0 mt-[5px]"
                  />
                  India
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400 mt-1"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute left-0 bottom-full mb-2 w-56 origin-bottom-left rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1 flex px-4">
                  <MenuItem>
                    <a
                      href="#"
                      className="flex block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      <img
                        src={INDIA}
                        alt="India Flag"
                        className="w-5 h-5 mr-3 mt-[1px]"
                      />
                      India
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="flex block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      <img
                        src={UAE}
                        alt="India Flag"
                        className="w-5 h-5 mr-3 mt-[1px]"
                      />
                      UAE
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>

            {/* ENGLISH */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <LanguageIcon className="w-5 h-5 mr-0 mt-[3px]" /> ENGLISH
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
                  {languages.map((language, index) => (
                    <MenuItem key={index}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        {language.label}
                      </a>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>

        <div className=" grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Column 1 */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                margin: "0px 0px 1.2rem",
                letterSpacing: "0.2rem",
              }}
            >
              ABOUT ZOMATO
            </h3>{" "}
            <ul className="mt-4 space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                margin: "0px 0px 1.2rem",
                letterSpacing: "0.2rem",
              }}
            >
              ZOMAVERSE
            </h3>
            <ul className="mt-4 space-y-2">
              {zomaverseLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                margin: "0px 0px 1.2rem",
                letterSpacing: "0.2rem",
              }}
            >
              FOR RESTRAURENTS
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Partner with Us{" "}
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Apps For You{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                margin: "0px 0px 1.2rem",
                letterSpacing: "0.2rem",
              }}
            >
              LEARN MORE
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Privacy{" "}
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Security{" "}
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-500 hover:text-gray-700">
                  Terms{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center">
              <h3 className="font-semibold mb-3">SOCIAL LINKS</h3>
              <div className="flex space-x-2">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white rounded-full p-2 text-xs"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
              <div className="mt-5 flex flex-col items-center">
                <a href="https://www.zomato.com/mobile" className="mb-5">
                  <img
                    className="self-center w-auto max-w-[150px]"
                    width="100%"
                    src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                    alt="Download App"
                  />
                </a>
                <a href="https://www.zomato.com/mobile" className="mb-5">
                  <img
                    className="self-center w-auto max-w-[150px]"
                    src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                    alt="Download App"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div href="/" className=" mt-10 text-gray-500 border-t border-gray-300">
          <p className="text-sm mt-10">
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
