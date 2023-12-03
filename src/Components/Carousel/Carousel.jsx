import { useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./Carousel.css";

export const Carousel = ({
  setIndex,
  index,
  imgArr,
  controlls = true,
  runEvery = 2000,
}) => {
  const handleNextImg = () => {
    if (imgArr.length - 1 === index) {
      setIndex(0);
      return;
    }
    setIndex((prev) => prev + 1);
  };
  const handlePreviousImg = () => {
    if (index === 0) {
      setIndex(imgArr.length - 1);
      return;
    }
    setIndex((prev) => prev - 1);
  };
  useEffect(() => {
    const timeOut = setTimeout(() => {
      handleNextImg();
    }, runEvery);

    return () => clearTimeout(timeOut);
  }, [index]);
  return (
    <div className="carousel">
      <img src={imgArr[index]} />

      <button className="previous_half" onClick={handlePreviousImg}>
        <button className="previous_btn btn">
          <IoIosArrowBack />
        </button>
      </button>
      <button className="next_half" onClick={handleNextImg}>
        <button className="next_btn btn">
          <IoIosArrowForward />
        </button>
      </button>
    </div>
  );
};
