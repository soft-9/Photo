import ElderlyPeople from "../assets/img/ElderlyPeople.jpg";
import Kids from "../assets/img/Kids.jpg";
import man from "../assets/img/man.jpg";
import women from "../assets/img/women.jpg";

const People = () => {
  const people = [
    { src: ElderlyPeople, caption: "ElderlyPeople" },
    { src: Kids, caption: "Kids" },
    { src: man, caption: "man" },
    { src: women, caption: "women" },
    // ... add more data entries as needed
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-5 ">
        <h1 className="text-[40px]">People</h1>
        <div className="flex justify-between items-center">
          <p>Portrait that makes your ads easy for you.</p>
          <a href="#" className="lin relative pb-1">
            More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-10 ">
          {people.map((item, index) => (
            <div
              key={index}
              className="flex  items-center relative rounded-md  shadow-md "
            >
              <div className="w-full h-[30rem] overflow-hidden rounded-md select-none ">
                <img
                  src={item.src}
                  className="w-[120%] object-center relative object-cover h-full"
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

export default People;
