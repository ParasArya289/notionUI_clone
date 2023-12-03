import { useState } from "react";
import { carouselThreeImages } from "../../../assets/images";
import { Carousel } from "../../Carousel/Carousel";
import { Card } from "./Card/Card";

export const CarouselThree = () => {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Card setIndex={setIndex} index={index} />
      <Carousel setIndex={setIndex} index={index} imgArr={carouselThreeImages} />
    </>
  );
};
