const Keywords = () => {
  const itemsData = [
    { text: "Item 1", href: "asd" },
    { text: "Item 2", href: "asd" },
    { text: "Item 3", href: "asd" },
    { text: "Item 4", href: "asd" },
    { text: "Item 5", href: "asd" },
    { text: "Item 6", href: "asd" },
    { text: "Item 7", href: "asd" },
    { text: "Item 8", href: "asd" },
    { text: "Item 10", href: "asd" },
    { text: "Item 11", href: "asd" },
    { text: "Item 12", href: "asd" },
    { text: "Item 13", href: "asd" },
    { text: "Item 14", href: "asd" },
    { text: "Item 15", href: "asd" },
    { text: "Item 16", href: "asd" },
    { text: "Item 17", href: "asd" },
    { text: "Item 18", href: "asd" },
    { text: "Item 19", href: "asd" },
    { text: "Item 20", href: "asd" },
    { text: "Item 21", href: "asd" },
    { text: "Item 22", href: "asd" },
    { text: "Item 23", href: "asd" },
    { text: "Item 24", href: "asd" },
    { text: "Item 25", href: "asd" },
    { text: "Item 26", href: "asd" },
    { text: "Item 27", href: "asd" },
    { text: "Item 28", href: "asd" },
    { text: "Item 29", href: "asd" },
    { text: "Item 30", href: "asd" },
    { text: "Item 31", href: "asd" },
    { text: "Item 32", href: "asd" },
    { text: "Item 33", href: "asd" },
    { text: "Item 34", href: "asd" },
    { text: "Item 35", href: "asd" },

    // Add more items as needed
  ];
  return (
    <div className="w-full relative top-20">
      <div className="flex flex-col gap-9 p-11  bg-[#f5f5f5] w-full text-center ">
        <div>
          <h1 className="text-[40px] mb-5">Keywords May Help You</h1>
          <p className="opacity-95">Related tags as they relate to the topic</p>
        </div>
        <div className="flex flex-wrap gap-3 place-self-center justify-center">
          {itemsData.map((item, index) => (
            <div
              key={index}
              className="select-none px-4 py-3 text-[#2e2e2e] bg-white rounded-[25px] cursor-pointer hover:bg-[#20d598] hover:text-white transition-color duration-100"
            >
              <a href={item.href}>{item.text}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="flex relative  justify-center items-center backfooter w-full h-[20rem] flex-col gap-10">
        <h1 className="text-[30px] text-white  ">
          Thousands of digital content and themes, and more
        </h1>
        <button className="px-3 py-2 bg-[#20d598] hover:opacity-90 transition-opacity text-white text-[18px] rounded-md">
          Discover packages and prices
        </button>
      </div>
      <div className="bg-[#20d598] px-3 w-full lg:px-10 flex py-10 lg:justify-between lg:flex-row items-center flex-col gap-10">
        <div className="text-white text-center lg:text-left">
          <p className="text-[25px]">
            Share your photos and works and start earning
          </p>
          <p>
            Join the community of photographers and creators on Arabsstock and
            earn money from your content
          </p>
        </div>
        <button className="border lg:px-20 lg:py-5 px-10 py-3 hover:bg-white transition-all rounded-lg text-white hover:text-[#20d598]">
          join Now
        </button>
      </div>
    </div>
  );
};

export default Keywords;
