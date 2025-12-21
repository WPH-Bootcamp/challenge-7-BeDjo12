import NavMenu from "../Header/NavMenu";
import logo from "/logo-symbol.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const Socialmedia = [
  {
    id: 1,
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    icon: <FaInstagram />,
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
  },
  {
    id: 4,
    icon: <FaTiktok />,
  },
];

const Footer = () => {
  return (
    <div className="w-full max-w-290 flex gap-2 px-4 py-6">
      <div className="w-full flex flex-col gap-3 p-5 md:gap-25 md:p-10 rounded-3xl border dark:border-neutral-800 dark:bg-neutral-950 bg-[#FAFAFA] border-[#DFDFDF] ">
        <div className="w-full flex flex-col md:flex-row-reverse md:justify-between md:gap-20 gap-6 items-start">
          <div className="w-full md:w-40 flex items-center gap-[8.48px] ">
            <img src={logo} alt="Logo" className="w-[26.13px] h-[28.66px] " />
            <p className="font-[outfit] font-semibold text-[21.19px]/[31.8px] ">
              Your Logo
            </p>
          </div>
          <p className="font-bold md:w-70.25 text-[28px]/[38px] md:text-[36px]/[44px] tracking-[-0.02em] ">
            LET'S DISCUSS YOUR IDEAS
          </p>
        </div>
        <div className="w-full flex flex-col md:justify-between md:flex-row gap-6 pt-3 border-t border-neutral-800 ">
          <div className="flex flex-col md:w-111.75 md:justify-between md:flex-row gap-1.5">
            <NavMenu>
              {(item) => (
                <li key={item.id} className="list-none">
                  <a
                    href={item.link}
                    className="font-medium text-[14px]/[28px] md:text-[16px]/[30px] hover:text-[#FF623E] hover:text-shadow-[1px_10px_30px_rgba(255,98,62,1)] transition-all duration-300 ease-in-out"
                  >
                    {item.name}
                  </a>
                </li>
              )}
            </NavMenu>
          </div>
          <div className="flex gap-4">
            {Socialmedia.map(({ id, icon }) => {
              return (
                <div
                  key={id}
                  className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-[20px] rounded-full hover:bg-[#FF623E] hover:shadow-[0_10px_30px_rgba(255,98,62,0.5)] hover:ring-1 hover:ring-[#FF623E]/40 transition-all duration-300 ease-in-out cursor-pointer"
                >
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
