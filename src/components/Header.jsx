import Logo from "../assets/img/logode.svg";
import LogoDarck from "../assets/img/logowe.svg";
import { CiCamera } from "react-icons/ci";
import { LiaVideoSolid } from "react-icons/lia";
import { TbVectorSpline } from "react-icons/tb";
import { MdOutlineLanguage } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaFacebookF, FaGoogle, FaRegMoneyBillAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { PiPasswordBold } from "react-icons/pi";

const Header = () => {
  //sign up
  const [OpenSignUp, setOpenSignUp] = useState(false);
  const handelOpenSign = () => {
    setOpenSignUp(!OpenSignUp);
    setOpenLogIn(false);
  };

  useEffect(() => {
    document.body.style.overflow = OpenSignUp ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [OpenSignUp]);
  //end sing up
  //start log in
  const [openLogIn, setOpenLogIn] = useState(false);
  const handleOpenLogIn = () => {
    setOpenLogIn(!openLogIn);
    setOpenSignUp(false);
  };
  useEffect(() => {
    document.body.style.overflow = openLogIn ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openLogIn]);
  //forget pass
  const [openforget, setOpenForget] = useState(false);
  const handleOpenForget = () => {
    setOpenForget(!openforget);
    setOpenLogIn(false);
  };

  useEffect(() => {
    document.body.style.overflow = openforget ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openforget]);
  //form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data or perform any necessary actions here
    console.log("Form submitted:", formData);
  };
  // form login
  const [userData, setUserDate] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleUserInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setUserDate((prevUserData) => ({
      ...prevUserData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUserFormSubmission = (e) => {
    e.preventDefault();
    // Validate and submit the form data
    console.log("Form submitted:", userData);
  };

  //forgte pass
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Call your server to send a reset email
    try {
      // Replace the following with your actual API endpoint for sending reset emails
      const response = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsEmailSent(true);
        console.log("Reset email sent successfully!");
      } else {
        console.error("Failed to send reset email:", data.error);
      }
    } catch (error) {
      console.error("Error sending reset email:", error);
    }
  };
  let [open, setOpen] = useState(false);
  return (
    <>
      <header className="bg-white flex px-5 relative py-3 w-full justify-between items-center lg:bg-transparent z-30 lg:py-6">
        <div className="flex gap-5 justify-center items-center">
          <a href="#" className="">
            <img
              className=" hidden lg:w-[200px] lg:block lg:h-[18px]"
              src={Logo}
            />
            <img className=" w-[150px] h-18px lg:hidden" src={LogoDarck} />
          </a>
          <nav
            className={`flex gap-8 absolute lg:relative bg-white lg:bg-transparent lg:top-0 top-[50px] text-black
          w-full right-0 flex-col lg:flex-row items-start px-4 lg:px-0 lg:gap-3  transition-all duration-500 overflow-hidden lg:h-[100%] h-[0px] ${
            open ? "h-[460px] lg:h-[100%]" : "h-[0px]"
          }`}
          >
            <a
              href="#"
              className="flex gap-2 bg-white rounded-full justify-center items-center p-1 px-3 hover:text-[#20d598] transition-colors  duration-300"
            >
              <CiCamera className="text-[20px] text-[#20d598] " />
              <p>Pictures</p>
            </a>
            <a
              href="#"
              className="flex gap-2 bg-white rounded-full justify-center items-center p-1 px-3 hover:text-[#20d598] transition-colors  duration-300"
            >
              <LiaVideoSolid className=" text-[20px] text-[#20d598]" />
              <p>Videos</p>
            </a>
            <a
              href="#"
              className="flex gap-2 bg-white rounded-full justify-center items-center p-1 px-3 hover:text-[#20d598] transition-colors duration-300"
            >
              <TbVectorSpline className="text-[20px] text-[#20d598]" />
              <p>Vectors</p>
            </a>
          </nav>
        </div>
        <span
          className="border border-[#20d598] rounded px-3 py-1 cursor-pointer lg:hidden"
          onClick={() => setOpen(!open)}
          name={open ? "close" : "menu"}
        >
          <SlMenu className="text-[#20d598] text-[20px] " />
        </span>
        <div
          className={`flex gap-5 text-[15px] absolute lg:relative bg-transparent lg:bg-transparent lg:top-0 top-[293px] lg:left-0  text-black
        left-10px flex-col lg:flex-row items-start px-4 lg:px-0 lg:gap-5 h-[0px] lg:h-[30%] overflow-hidden transition-all duration-200 lg:text-white ${
          open ? "h-[200px]" : "h-[0px]"
        }`}
        >
          <a
            href="#"
            className="hover:opacity-50 transition-opacity duration-500"
          >
            All Categories
          </a>
          <a
            href="#"
            className="text-[#20d598] hover:opacity-50 transition-opacity duration-500"
          >
            Prices And Packages
          </a>
          <a
            href="#"
            className=" flex gap-1 items-center justify-center hover:opacity-50 transition-opacity duration-500"
          >
            <MdOutlineLanguage />
            <p>AR</p>
          </a>
          <button
            className=" hover:opacity-50 transition-opacity duration-500"
            onClick={handleOpenLogIn}
      
          >
            Login
          </button>
          <button
            className=" hover:opacity-50 transition-opacity duration-500"
            onClick={handelOpenSign}
            name={OpenSignUp ? "close" : "tap"}
          >
            Sign up
          </button>
        </div>
      </header>
      {OpenSignUp && (
        <div
          className="backdrop-blur-[5px] overflow-auto fixed z-30 bottom-0 left-0 transition-all  
          py-9 xl:items-center lg:py-10 lg:flex lg:justify-center lg:items-center
        w-[100%] h-[100%] bg-[#18181891] opacity-100"
          onClick={handelOpenSign}
        >
          <div
            className={`bg-white flex flex-col items-center w-[500px] gap-4   relative transition-all duration-500 px-6 py-4 opacity-100 rounded-lg
            shadow-xl 2xl:h-[70rem] lg:h-[72rem] h-[77rem] m-auto
            animation-tap
            
            `}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full flex-row-reverse flex">
              <IoIosCloseCircleOutline
                className="text-[30px] text-[#6c757d] cursor-pointer hover:text-[#41a584] transition-colors duration-500"
                onClick={handelOpenSign}
              />
            </div>
            <div className="text-center pb-4  relative gap-6  w-full">
              <h3 className="text-[33px]  text-stone-900 font-[500]">
                Sign up
              </h3>
            </div>
            <div className="w-full  text-white  flex flex-col gap-6 ">
              <div
                className="w-full bg-[#2c58b5] hover:bg-[#253964] rounded-1g flex items-center justify-center gap-3 rounded cursor-pointer hover:text-[23px]
              hover:rounded-2xl transition-all duration-500 active:scale-90 select-none h-12"
              >
                <FaFacebookF />
                <p>Login with Facebook</p>
              </div>
              <div
                className="w-full bg-[#c02626] hover:bg-[#ff0000] rounded-1g flex items-center justify-center gap-3 cursor-pointer rounded hover:text-[23px]
              hover:rounded-2xl transition-all duration-500 active:scale-90 select-none h-12 text-white"
              >
                <FaGoogle />
                <p>Login with Facebook</p>
              </div>
              <span />
              <div className="w-full text-center text-black mb-7">
                <span className="bg-[#6969694d] text-[13px] p-2 rounded-2xl">
                  OR
                </span>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col w-full gap-2"
            >
              <div className="w-full flex flex-col ">
                <label className="mb-2">Name:</label>
                <div className="w-full flex justify-center items-center relative">
                  <input
                    className="w-full outline-none bg-[#f3f4f5] border-none pl-12 py-4"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Name"
                  />
                  <IoPersonCircleOutline className="absolute left-1 text-[30px] text-[#868686] " />
                </div>
              </div>

              <div className="w-full flex flex-col ">
                <label className="mb-2">Email:</label>
                <div className="w-full flex justify-center items-center relative">
                  <input
                    className="w-full outline-none bg-[#f3f4f5] border-none pl-12 py-4"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                  />
                  <MdOutlineMail className="absolute left-1 text-[30px] text-[#868686] " />
                </div>
              </div>

              <div className="w-full flex flex-col ">
                <label className="mb-2">Mobile:</label>
                <div className="w-full flex justify-center items-center relative">
                  <input
                    className="w-full outline-none bg-[#f3f4f5] border-none pl-12 py-4"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    placeholder="Mobile"
                  />
                  <BsPhone className="absolute left-1 text-[30px] text-[#868686] " />
                </div>
              </div>

              <div className="w-full flex flex-col ">
                <label className="mb-2">Password:</label>
                <div className="w-full flex justify-center items-center relative">
                  <input
                    className="w-full outline-none bg-[#f3f4f5] border-none pl-12 py-4"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    placeholder="password"
                  />
                  <PiPasswordBold className="absolute left-1 text-[30px] text-[#868686] " />
                </div>
              </div>
              <div className="w-full flex flex-col mb-5">
                <label className="mb-2"> Confirm Password:</label>
                <div className="w-full flex justify-center items-center relative">
                  <input
                    className="w-full outline-none bg-[#f3f4f5] border-none pl-12 py-4"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    placeholder="confirm Password"
                  />
                  <PiPasswordBold className="absolute left-1 text-[30px] text-[#868686] " />
                </div>
              </div>
              <div className="text-center mb-4">
                <p> By Creating An Account I Agree To Arabsstocks Website </p>
                <span className="text-[#20d598] cursor-pointer mx-2">
                  Terms
                </span>
                And
                <span className="text-[#20d598] cursor-pointer mx-2">
                  Conditions
                </span>
                And
                <span className="text-[#20d598] cursor-pointer mx-2">
                  Privacy
                </span>
                And
                <span className="text-[#20d598] cursor-pointer mx-2">
                  License Agreement
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-[#41a584] hover:bg-[#20d598] h-12  rounded-md text-white text-[20px] hover:rounded-xl transition-all duration-500 hover:text-[30px]"
              >
                Sign Up
              </button>
            </form>
            <div className="bg-[#eceef3] absolute rounded-b-lg bottom-0 w-full h-[62px] flex justify-between items-center px-7">
              <button
                className="cursor-pointer flex items-center gap-2 hover:text-[#20d598] transition-all duration-300"
                onClick={handleOpenLogIn}
                name={openLogIn ? "close" : "tap"}
              >
                <IoPersonCircleOutline className="text-[20px]" />
                <p>Already have account ? Sign In</p>
              </button>
              <button className="cursor-pointer flex items-center gap-2 hover:text-[#20d598] transition-all duration-300">
                <FaRegMoneyBillAlt />
                <p> Privacy Policy</p>
              </button>
            </div>
          </div>
        </div>
      )}
      {openLogIn && (
        <div
          className="backdrop-blur-[5px] overflow-auto fixed z-30 bottom-0 left-0 transition-all  
          py-9 xl:items-center lg:py-10 lg:flex lg:justify-center lg:items-center
        w-[100%] h-[100%] bg-[#18181891] opacity-100"
          onClick={handleOpenLogIn}
        >
          <div
            className={`bg-white flex flex-col items-center w-[500px] gap-4   relative transition-all duration-500 px-6 py-4 opacity-100 rounded-lg
            shadow-xl h-[50rem]  m-auto
            animation-tap
            
            `}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full flex-row-reverse flex">
              <IoIosCloseCircleOutline
                className="text-[30px] text-[#6c757d] cursor-pointer hover:text-[#41a584] transition-colors duration-500"
                onClick={handleOpenLogIn}
              />
            </div>
            <div className="text-center pb-4  relative gap-6  w-full">
              <h3 className="text-[33px]  text-stone-900 font-[500]">
                Sign In
              </h3>
            </div>
            <div className="w-full  text-white  flex flex-col gap-6 ">
              <div
                className="w-full bg-[#2c58b5] hover:bg-[#253964] rounded-1g flex items-center justify-center gap-3 rounded cursor-pointer hover:text-[23px]
              hover:rounded-2xl transition-all duration-500 active:scale-90 select-none h-12"
              >
                <FaFacebookF />
                <p>Login with Facebook</p>
              </div>
              <div
                className="w-full bg-[#c02626] hover:bg-[#ff0000] rounded-1g flex items-center justify-center gap-3 cursor-pointer rounded hover:text-[23px]
              hover:rounded-2xl transition-all duration-500 active:scale-90 select-none h-12 text-white"
              >
                <FaGoogle />
                <p>Login with Facebook</p>
              </div>
              <span />
              <div className="w-full text-center text-black mb-7">
                <span className="bg-[#6969694d] text-[13px] p-2 rounded-2xl">
                  OR
                </span>
              </div>
            </div>
            <form
              onSubmit={handleUserFormSubmission}
              className=" flex flex-col w-full gap-2"
            >
              <div className="w-full flex flex-col ">
                <label className="mb-2">Email:</label>
                <div className="w-full flex justify-center items-center relative">
                  <input
                    className="w-full outline-none bg-[#f3f4f5] border-none pl-12 py-4"
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleUserInputChange}
                    required
                    placeholder="Email"
                  />
                  <MdOutlineMail className="absolute left-1 text-[30px] text-[#868686] " />
                </div>
              </div>
              <div className="w-full flex flex-col ">
                <label className="mb-2">Password:</label>
                <div className="w-full flex justify-center items-center relative">
                  <input
                    className="w-full outline-none bg-[#f3f4f5] border-none pl-12 py-4"
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleUserInputChange}
                    required
                    placeholder="password"
                  />
                  <PiPasswordBold className="absolute left-1 text-[30px] text-[#868686] " />
                </div>
              </div>
              <label className="flex gap-3 my-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={userData.rememberMe}
                  onChange={handleUserInputChange}
                />
                Remember me
              </label>
              <button
                type="submit"
                className="w-full bg-[#41a584] hover:bg-[#20d598] h-12  rounded-md text-white text-[20px] hover:rounded-xl transition-all duration-500 hover:text-[30px]"
              >
                Sign Up
              </button>
            </form>
            <div className="bg-[#eceef3] absolute rounded-b-lg bottom-0 w-full h-[62px] flex justify-between items-center px-7">
              <button
                className="cursor-pointer flex items-center gap-2"
                onClick={handelOpenSign}
                name={OpenSignUp ? "close" : "tap"}
              >
                <IoPersonCircleOutline className="text-[20px]" />
                <p className="flex gap-1">
                  Dont have an account ?
                  <button className="hover:text-[#20d598] transition-all duration-300">
                    Sign up
                  </button>
                </p>
              </button>
              <button
                className="cursor-pointer flex items-center gap-2 hover:text-[#20d598] transition-all duration-300"
                onClick={handleOpenForget}
                name={openforget ? "Close" : "Open"}
              >
                <PiPasswordBold />
                <p>Forget Password</p>
              </button>
            </div>
          </div>
        </div>
      )}
      {openforget && (
        <div
          className="backdrop-blur-[5px] overflow-auto fixed z-30 bottom-0 left-0 transition-all  
          py-9 xl:items-center lg:py-10 lg:flex lg:justify-center lg:items-center
        w-[100%] h-[100%] bg-[#18181891] opacity-100 flex justify-center items-center"
          onClick={handleOpenForget}
        >
          <div
            className={`bg-white flex flex-col items-center w-[500px] gap-4   relative transition-all duration-500 px-6 py-4 opacity-100 rounded-lg
            shadow-xl h-[25rem]
            animation-tap
            
            `}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full flex-row-reverse flex">
              <IoIosCloseCircleOutline
                className="text-[30px] text-[#6c757d] cursor-pointer hover:text-[#41a584] transition-colors duration-500"
                onClick={handleOpenForget}
              />
            </div>
            <div className="text-center pb-4  relative gap-6  w-full">
              <h3 className="text-[33px]  text-stone-900 font-[500]">
                Password Recover
              </h3>
            </div>
            {!isEmailSent ? (
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col w-full gap-5"
              >
                <div className="w-full flex flex-col">
                  <label className="mb-2">Email:</label>
                  <div className="w-full flex justify-center items-center relative">
                    <input
                      className="w-full outline-none bg-[#f3f4f5] border-none pl-12 py-4"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                      placeholder="Email"
                    />
                    <MdOutlineMail className="absolute left-1 text-[30px] text-[#868686]" />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#41a584] hover:bg-[#20d598] h-12 rounded-md text-white text-[20px] hover:rounded-xl transition-all duration-500 hover:text-[30px]"
                >
                  Send
                </button>
              </form>
            ) : (
              <p>
                Reset email sent! Check your email for further instructions.
              </p>
            )}
            <div className="bg-[#eceef3] absolute rounded-b-lg bottom-0 w-full h-[62px] flex gap-5 items-center px-7">
              <div className="flex gap-3 items-center">
                <MdOutlineMail className="text-[20px]" />
                <p>There is a problem?</p>
              </div>

              <div className="cursor-pointer flex items-center gap-2 hover:text-[#20d598] transition-all duration-300">
                <p>Contact and Support</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
