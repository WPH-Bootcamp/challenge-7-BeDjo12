import React from "react";
import Logo from "/logo-symbol.svg";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Button from "../../ui/Button";
import NavMenu from "./NavMenu";

const Header = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  return (
    <div className="px-4 py-6 w-full lg:h-21 lg:px-35 h-16 fixed flex flex-row items-center justify-between z-50 bg-(--base-white-50,#fff80) backdrop-blur-2xl dark:bg-(--base-black-50,#00000080)">
      <div className="flex flex-row items-center justify-center gap-[9.6px] w-35.25">
        <img
          src={Logo}
          alt="your logo"
          className="w-[26.3px] h-[28.85px] md:w-[29.59px] md:h-[32.46px]"
        />
        <p className="font-[outfit] font-semibold text-[21.33px] md:text-[24px]/[36px] cursor-default">
          YourLogo
        </p>
      </div>
      <nav className="md:block hidden">
        <ul className="flex flex-row gap-3">
          <NavMenu>
            {(item) => (
              <li key={item.id} className="gap-1.5 px-4">
                <a
                  href={item.link}
                  className="relative block py-2 font-semibold text-[16px]/[30px] hover:text-[#FF623E] transition-all duration-300 ease-in-out group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 w-[80%] h-0.5 bg-[#FF623E] transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </a>
              </li>
            )}
          </NavMenu>
        </ul>
      </nav>

      <Button className="md:block  hidden w-49.25 h-11 bg-[#FF623E] rounded-full cursor-pointer font-bold text-white text-[14px] inset-shadow-[4px_4px_4px_rgba(255,255,255,0.25)] hover:bg-[#fc512b] ">
        Let's Talk
      </Button>
      {/*navbar mobile */}
      <nav
        className={`${
          showMenu ? "block" : "hidden"
        } flex flex-col md:hidden fixed left-0 bg-white dark:bg-black top-16 z-50 gap-3 px-4 w-full h-250`}
      >
        <ul className="relative flex flex-col gap-3">
          <NavMenu>
            {(item) => (
              <li key={item.id} className="gap-1.5 py-2">
                <a
                  href={item.link}
                  className="relative block font-semibold text-[14px] hover:text-[#FF623E] transition-all duration-300 ease-in-out"
                >
                  {item.name}
                </a>
              </li>
            )}
          </NavMenu>
        </ul>

        <Button className=" w-full h-11 bg-[#FF623E] rounded-full cursor-pointer font-bold inset-shadow-[4px_4px_4px_rgba(255,255,255,0.25)] hover:bg-[#fc512b] text-white text-[14px]">
          Let's Talk
        </Button>
      </nav>
      <div className="cursor-pointer w-8 h-8 md:hidden block">
        {showMenu ? (
          <IoClose
            onClick={toggleMenu}
            className="w-full h-full hover:hover:text-[#FF623E] transition-all ease-in-out duration-700"
          />
        ) : (
          <HiMenu
            onClick={toggleMenu}
            className="w-full h-full hover:text-[#FF623E] transition-all ease-in-out duration-700"
          />
        )}
      </div>
    </div>
  );
};

export default Header;
