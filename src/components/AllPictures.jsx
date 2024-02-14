import Cities from "./Cities";
import MostSearched from "./MostSearched";
import People from "./People";
import Pictures from "./Pictures";
import Trending from "./Trending";

const AllPictures = () => {
  return (
    <>
      <div className="px-7 flex flex-col gap-20 relative -top-16">
        <Pictures />
        <Trending />
        <MostSearched />
        <Cities />
        <People />
      </div>
    </>
  );
};

export default AllPictures;
