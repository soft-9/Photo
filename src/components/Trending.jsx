import Img3 from "../assets/img/image6.jpg";
import Img4 from "../assets/img/image7.webp";
import Img5 from "../assets/img/8.webp";

const Trending = () => {
  const Trending = [
    { src: Img3, caption: "Saudi Flag Day" },
    { src: Img4, caption: "We Designed it" },
    { src: Img5, caption: "Business and Companies" },
    // ... add more data entries as needed
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-5 ">
        <h1 className="text-[40px]">Trending Topics</h1>
        <div className="flex justify-between items-center">
          <p>
            From the day we started... and the founding content is in our hands
          </p>
          <a href="#" className="lin relative pb-1">
            More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {Trending.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center relative rounded-md overflow-hidden shadow-md cursor-pointer"
            >
              <div className="w-full h-full">
                <img
                  src={item.src}
                  className="w-full h-full"
                  alt={`Image ${index + 1}`}
                />
              </div>
              <div
                className="absolute w-full h-full z-10 bg-[#0000005e]
              text-[25px] flex justify-center items-center text-white  hover:bg-[#00000000] transition-colors duration-500 select-none"
              >
                {item.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
