import { useEffect, useState } from "react";
import MinImg from "../assets/img/bg-img-home-2.webp";
import { AiOutlineSearch } from "react-icons/ai";
import { TbCameraSearch } from "react-icons/tb";
import { IoIosCloseCircleOutline } from "react-icons/io";

const MinHeader = () => {
  const [value, setValue] = useState("");
  const options = [
    {
      label: "Images",
      value:
        "Most searched:family , Business , saudi , Saudi man ,woman , doctor , riyadh , Meeting , Office , Eid ",
    },
    { label: "Vectors", value: "Most searched:vectors" },
    { label: "Videos", value: "Most searched:videos" },
  ];
  const handleSelect = (event) => {
    setValue(event.target.value);
  };

  const [openTap, setOpenTap] = useState(false);
  const handleButtonClick = () => {
    setOpenTap(!openTap);
  };
  useEffect(() => {
    document.body.style.overflow = openTap ? "hidden" : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openTap]);
  //input
  const [searchTerm, setSearchTerm] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    // Reset the error when the user starts typing again
    setIsError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") {
      setIsError(true);
      return; // Return early if there's an error
    }

    // Handle the form submission with the non-blank search term
    console.log("Search:", searchTerm);
  };

  //fill
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    // TODO: do something with -> file
    console.log("handle uploading-", file);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const uploadedFile = e.target.files[0];

    reader.onloadend = () => {
      setFile(uploadedFile);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(uploadedFile);
  };

  const imagePreview = imagePreviewUrl ? (
    <img src={imagePreviewUrl} alt="Preview" />
  ) : (
    <div></div>
  );
  return (
    <>
      <div className=" relative top-0 lg:top-[-7rem]  h-[93vh] flex justify-center items-center lg:h-[92vh] overflow-hidden sm:h-[85vh] px-3">
        <span className="im absolute md:w-[170%] w-[280%] h-[100%] overflow-hidden lg:w-[100%] lg:h-[120%] md:h-[100%]  sm:w-[190%] ">
          <img
            src={MinImg}
            className=" w-[100%] h-[100%] bg-no-repeat bg-center bg-cover "
          />
        </span>
        <div className=" relative md:top-[-26px] top-[10px] w-[90%]  md:w-[65%]">
          <h1 className="md:text-[30px] text- text-center text-white mb-7">
            The Largest Real Gulf Arabic Digital Library
          </h1>
          <div
            className="md:flex md:rounded-xl  rounded-md  border md:border-none  md:w-[100%] md:items-center relative md:justify-center 
          md:gap-4 h-[200px] md:h-[60px]"
          >
            <form
              onSubmit={handleSubmit}
              className="md:flex md:rounded-lg md:overflow-hidden md:w-[95%] md:items-center relative md:justify-center m-[0]  md:h-14 my-10 shadow-lg 
            w-[100%]  px-3 md:px-0 h-[80%]"
            >
              <div className="custom-select">
                <select
                  id="mySelect"
                  className="p-2 w-[100%]"
                  onClick={handleSelect}
                >
                  {options.map((option) => (
                    <option
                      key={option.label} // Assuming label is unique for each option
                      className="rounded-md"
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <input
                type="text"
                className={`md:w-[90%] rounded-lg md:rounded-none px-3 ${
                  isError ? "bg-red-600" : "bg-white"
                } md:h-[100%] text-[20px] border-none outline-none flex items-center
                  relative md:top-0 top-[-13px] h-[50px] w-[80%]`}
                placeholder="Start Search (Ex: Doctor, Engineer, Office…etc)"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="md:w-20 flex justify-center items-center text-[30px] bg-[#20d598] md:h-[100%] text-white md:rounded-r-xl 
                md:rounded-none hover:bg-[#20d59962] transition-all duration-500 absolute md:top-0 w-[95.5%] rounded-md md:relative h-[50px]"
              >
                <AiOutlineSearch />
              </button>
            </form>
            <button
              className="bg-white rounded-lg md:w-44 md:h-14 shadow-md md:text-[13px]  flex items-center justify-center 
              duration-300 transition-all hover:text-[#20d598] h-[50px] w-[50px] md:relative absolute top-[39%] right-[12px] md:top-0 hover:opacity-90"
              onClick={handleButtonClick}
              name={openTap ? "close" : "tap"}
            >
              <TbCameraSearch className="text-[20px] sm:text-[30px] md:text-[20px] text-[#20d598] transition-all" />
              <p className="ml-2 hidden md:block"> Search by image</p>
            </button>
          </div>
          <div className="relative top-9 w-full h-[20px] top-[100px] flex justify-center">
            <p className=" text-[13px] text-white cursor-pointer absolute ">
              {value}
            </p>
          </div>
        </div>
      </div>
      {openTap && (
        <div
          className="backdrop-blur-[5px] overflow-auto fixed z-30 bottom-0 left-0 transition-all flex justify-center items-center w-[100%] h-[100%] bg-[#18181891] opacity-100"
          onClick={handleButtonClick}
        >
          <div
            className={`bg-white flex flex-col items-center  w-[24rem] md:w-[30rem] gap-4 md:h-[31rem]  h-[35rem] relative transition-all duration-500 px-10 py-6 opacity-100 top-[0px] rounded-lg shadow-xl
            animation-tap
            `}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b-2 pb-4 w-[100%]  gap-6  ">
              <h3 className="text-[33px] text-stone-900 font-[500]">
                Search similar images
              </h3>
              <IoIosCloseCircleOutline
                className="text-[30px] text-[#6c757d] cursor-pointer mt-2  hover:text-[#41a584] transition-colors duration-500"
                onClick={handleButtonClick}
              />
            </div>
            <div
              className="w-full h-[50%] overflow-hidden relative  border-[#6c757d] border-dashed border-2 px-9 flex-col items-center flex py-6 text-[#6c757d]
              gap-8 mb-[20px] rounded-md
            "
            >
              <div className="w-full absolute h-full -top-3 hover:scale-150 transition-all duration-500">
                {imagePreview}
              </div>
              <TbCameraSearch className="text-[70px] hover:text-[#41a584]  transition-colors duration-500" />
              <div className="text-[13px] flex flex-col gap-3">
                <p>Only support JPG and PNG images under 20 MB</p>
                <p className="text-center text-[black] text-[15px]"></p>
              </div>
            </div>
            <form
              onSubmit={(e) => handleUpload(e)}
              className="w-full flex flex-col gap-4"
            >
              <button className="text bg-[#20d598] flex items-center justify-center rounded-lg relative w-full h-14 text-white cursor-pointer">
                <input
                  className="opacity-0 w-full h-[100%] absolute right-0 top-0 cursor-pointer"
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                />
                Choose File
              </button>
              <button
                className="text-center w-full hover:text-[#20d598] transition-colors duration-500"
                onClick={handleButtonClick}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MinHeader;
