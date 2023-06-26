import { useState } from "react"
import close from '../assets/close.svg'
import logo from '../assets/logo.svg'
import menu from '../assets/menu.svg'
import { navLinks } from "../constants"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hooban" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((link, i) => {
          return (
            <li
              key={link.id}
              className={`${
                i !== navLinks.length - 1 ? "mr-[56px]" : ""
              } font-poppins font-normal cursor-pointer text-[16px] text-white`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? "flex" : "hidden"} absolute top-20 right-0 bg-black-gradient p-6 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex-col flex justify-end items-center flex-1">
            {navLinks.map((link, i) => {
              return (
                <li
                  key={link.id}
                  className={`${
                    i !== navLinks.length - 1 ? "mb-[10px]" : ""
                  } font-poppins font-normal cursor-pointer text-[16px] text-white`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar