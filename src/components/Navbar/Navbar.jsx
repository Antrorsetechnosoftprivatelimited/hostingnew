import React, { useEffect, useState } from "react";
import { TbServerCog } from "react-icons/tb";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoSchoolSharp, IoChevronDownOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { LiaMicrosoft } from "react-icons/lia";
import { FaPeopleGroup } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Dropdown = ({ navs, isActive, closeDropdown }) => (
  <div className={`mt-6 inset-x-0 top-14 w-full absolute border-y z-50 shadow-md ${isActive ? "block" : "hidden"} bg-white`}>
    <ul className="max-w-screen-xl mx-auto grid items-center gap-2 lg:gap-6 p-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
      {navs.map((item, idx) => (
        <li className="w-full" key={idx}>
          <p className="text-black text-sm">{item.label}</p>
          <ul className="mt-5 space-y-6 w-full">
            {item.navs.map((navItem, idx) => (
              <li key={idx} className="group">
                <NavLink
                  to={navItem.path}
                  className="flex gap-3 items-center"
                  onClick={() => {
                    closeDropdown(); // Close the dropdown on click
                    setState(false); // Close the hamburger menu when any item is clicked
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-indigo-50 text-black flex items-center justify-center duration-150 group-hover:bg-[#FF4800] group-hover:text-white md:w-14 md:h-14 text-2xl">
                    {navItem.icon}
                  </div>
                  <div>
                    <span className="text-gray-800 duration-200 group-hover:text-[#FF4800] text-sm font-medium md:text-base capitalize">
                      {navItem.title}
                    </span>
                    <p className="text-sm text-gray-600 group-hover:text-gray-800 mt-1 capitalize">
                      {navItem.desc}
                    </p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

const Navbar2 = () => {
  const [state, setState] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigation = [
    { title: "Home", path: "/", isDropdown: false },
    {
      title: "Products",
      path: "/products",
      isDropdown: true,
      navs: [
        {
          label: "Products",
          navs: [
            {
              title: "Antrorse Web Hosting",
              path: "/products",
              icon: <TbServerCog />,
            },
            {
              title: "Antrorse Marketplace",
              path: "/products",
              icon: <BiSolidShoppingBags />,
            },
            {
              title: "Technistute (School Management System)",

              path: "/products",
              icon: <IoSchoolSharp />,
            },
          ],
        },
      ],
    },
    {
      title: "Services",
      path: "/services",
      isDropdown: true,
      navs: [
        {
          label: "Our Services",
          navs: [
            {
              title: "Software  Development Services",
              path: "/coming",
              icon: <LiaMicrosoft />,
            },
            {
              title: "Social Services",
              path: "/coming",
              icon: <FaPeopleGroup />,
            },

          ],
        },
      ],
    },
    { title: "Career", path: "/career", isDropdown: false },
    { title: "Contact", path: "/contact", isDropdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu")) setActiveDropdown(null);
    };
  }, []);

  const toggleDropdown = (idx) => {
    setActiveDropdown(activeDropdown === idx ? null : idx);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <nav className={`relative z-20 bg-white shadow-lg w-full md:static md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-lg" : ""}`}>
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <NavLink to="/">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXxp7h4dEoq3JdBw9eqsxfd12OWlOAduggGC0HZGvoQ5bf4O3jGiZhzRnoI97zYz0Dag&usqp=CAU" width={150} height={80} alt="antrorse logo" />
            </NavLink>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-800" onClick={() => setState(!state)}>
                <RxHamburgerMenu className={`ml-2 text-lg font-bold`} />
              </button>
            </div>
          </div>
          <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}>
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-black hover:text-[#FF4800] text-[15px] font-semibold uppercase">
                  {item.isDropdown ? (
                    <button
                      className="w-full flex items-center justify-between gap-1 text-black hover:text-[#FF4800] text-[15px] font-semibold uppercase"
                      onClick={() => toggleDropdown(idx)}
                    >
                      <div className="flex items-center">
                        {item.title}
                        <IoChevronDownOutline className={`ml-2 w-4 h-4`} />
                      </div>
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className="block text-black hover:text-[#FF4800] text-[15px] font-semibold"
                      onClick={() => {
                        closeDropdown();
                        setState(false); // Close the hamburger menu when any item is clicked
                      }}
                    >
                      {item.title}
                    </NavLink>
                  )}
                  {item.isDropdown && activeDropdown === idx && <Dropdown navs={item.navs} isActive={true} closeDropdown={closeDropdown} />}
                </li>
              ))}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">

                <li>
                  <Link to="/login" className="block py-3 px-3 lg:px-5  lg:font-medium text-center   shadow md:inline bg-[#FF4800] text-white rounded-full hover:bg-transparent hover:text-[#FF4800] hover:border-2 border-[#FF4800]">
                    Login
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state && <div className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setState(false)}></div>}
    </>
  );
};

export default Navbar2;
