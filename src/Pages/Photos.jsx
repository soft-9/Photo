import AllPictures from "../components/AllPictures";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Keywords from "../components/Keywords";
import MinHeader from "../components/MinHeader";
import Slider from "../components/Slider";

const Photos = () => {
  return (
    <>
      <Header />
      <MinHeader />
      <Slider />
      <AllPictures />
      <Keywords />
      <Footer />
    </>
  );
};

export default Photos;
