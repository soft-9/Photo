import Logo from "../assets/img/logode.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const data = [
    { href: "#", name: "About Us" },
    { href: "#", name: "Terms and Conditions" },
    { href: "#", name: "Privacy" },
    { href: "#", name: "License Agreement" },
    { href: "#", name: "Contact and Support" },
    { href: "#", name: "Casting registration" },
    { href: "#", name: "Share your works" },
    // Add more items as needed
  ];
  return (
    <>
      <div className="bg-[#30354b] relative w-full px-10 py-12 top-20 md:px-5">
        <div className="flex md:flex-row gap-11 md:items-center md:justify-between flex-col  ">
          <div className="text-white flex flex-col gap-10 text-[12px] ">
            <img className="w-32" src={Logo} />
            <p>The largest real Gulf Arabic digital library</p>
          </div>
          <div className="flex text-[#ffffff99]   flex-col gap-5">
            <p className="text-white">QUICK LINKS</p>
            <div className="flex gap-4 flex-wrap  md:w-[23rem] lg:w-[35rem] px-5">
              {data.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="hover:text-[#20d598] transition-all duration-200 text-[12px]"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col text-[#ffffff99] gap-5 ">
            <p className="text-white">FOLLOW US</p>
            <div className="flex gap-5  lg:gap-5 pr-8">
              <FaFacebook className="hover:text-[#20d598] cursor-pointer" />
              <FaTwitter className="hover:text-[#20d598] cursor-pointer" />
              <BiLogoInstagramAlt className="hover:text-[#20d598] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[#20d598] cursor-pointer" />
              <FaPinterestP className="hover:text-[#20d598] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#262a3c] w-full relative top-20 text-center text-white py-7 ">
        © 2024 Soliman Ramadan , REACT ,TailwindCSS
      </div>
    </>
  );
};

export default Footer;
