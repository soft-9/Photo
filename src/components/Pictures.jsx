import Img1 from "../assets/img/image2.webp";
import Img2 from "../assets/img/image3.webp";

import { FaHeart } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { SiWindows } from "react-icons/si";
import { useState } from "react";

const Pictures = () => {
  //data
  const PicturesData = [
    {
      src: Img1,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, saepe.",
    },
    {
      src: Img2,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, saepe.",
    },
    {
      src: Img1,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, saepe.",
    },
    {
      src: Img2,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, saepe.",
    },
    {
      src: Img1,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, saepe.",
    },
    {
      src: Img2,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, saepe.",
    },
    {
      src: Img1,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, saepe.",
    },
    {
      src: Img2,
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, saepe.",
    },
    // Add more image sources as needed
  ];

  //end data

  const [likedItems, setLikedItems] = useState([]);
  const handleLikeClick = (index) => {
    setLikedItems((prevLikedItems) => {
      const updatedLikedItems = [...prevLikedItems];
      updatedLikedItems[index] = !updatedLikedItems[index];
      return updatedLikedItems;
    });
  };

  return (
    <div className="w-full flex flex-col gap-10 relative  top-[5.1rem] lg:top-0">
      <div className="w-full flex flex-col gap-5  ">
        <h1 className="text-[40px]">Pictures For Your Next Project</h1>
        <div className="flex justify-between items-center">
          <p>The latest 2000 Image</p>
          <a href="#" className="lin relative pb-1">
            More
          </a>
        </div>
      </div>
      <div className="w-full flex gap-4 flex-wrap items-center justify-center  ">
        {PicturesData.map((picture, index) => (
          <div
            key={index}
            className="max-h-fit max-w-fit rounded-lg shadow-lg overflow-hidden relative"
          >
            <a href="#">
              <img src={picture.src} alt={`Image ${index + 1}`} />
            </a>
            <div className="flex mi flex-col place-items-start px-4 py-3 justify-between absolute w-full h-full bg-transparent transition-all duration-300 hover:bg-[#00000033] top-0">
              <div className="relative -top-9 transition-all duration-300 title">
                <p className="title text-ellipsis whitespace-nowrap text-[white] overflow-hidden select-none">
                  {picture.title}
                </p>
              </div>
              <div className="controls flex items-center gap-6 absolute right-4 -bottom-16 transition-all duration-300">
                <div className="flex flex-col gap-1 place-items-center text-[20px] relative cursor-pointer hover:text-[#d951f5] text-[white] transition-colors duration-300">
                  <SiWindows className="text-[25px]" />
                  <p>Similar</p>
                </div>
                <div className="relative flex flex-col gap-1 place-items-center text-[20px] cursor-pointer hover:text-[#68ffcd] text-[white] transition-colors duration-300">
                  <MdAddCircleOutline className="text-[25px]" />
                  <p>Add</p>
                </div>
                <div
                  className={`relative flex flex-col gap-1 place-items-center text-[20px] cursor-pointer ${
                    likedItems[index]
                      ? "text-red-500"
                      : "hover:text-white text-[white]"
                  } transition-colors duration-300`}
                  onClick={() => handleLikeClick(index)}
                >
                  <FaHeart className="text-[25px]" />
                  <p>Love</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pictures;
