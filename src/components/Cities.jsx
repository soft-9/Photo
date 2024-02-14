import Img1 from "../assets/img/image11.jpg";
import Img2 from "../assets/img/image12.jpg";
import Img3 from "../assets/img/image13.jpg";

const Cities = () => {
  const Cities = [
    { src: Img1, caption: "Riyadh" },
    { src: Img3, caption: "Jeddah" },
    { src: Img2, caption: "Al-Ula" },
    { src: Img1, caption: "Riyadh" },
    // ... add more data entries as needed
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-5 ">
        <h1 className="text-[40px]">Cities And Landmarks</h1>
        <div className="flex justify-between items-center">
          <p>More than 10 cities and landmarks in the Kingdom</p>
          <a href="#" className="lin relative pb-1">
            More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-10 ">
          {Cities.map((item, index) => (
            <div
              key={index}
              className="flex  items-center relative rounded-md  shadow-md "
            >
              <div className="w-full h-[33rem] overflow-hidden rounded-md  select-none ">
                <img
                  src={item.src}
                  className="w-full bg-center relative object-cover bg-cover h-full"
                  alt={`Image ${index + 1}`}
                />
              </div>
              <div
                className="absolute w-full h-full z-10 bg-[#0000005e]
                  text-[25px] flex justify-center items-center text-white cursor-pointer hover:bg-[#00000000] transition-colors duration-500 select-none"
              ></div>
              <div className="absolute -bottom-8 font-bold text-[#363535] select-auto ">
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cities;
