import { useState } from "react";
import { carouselTwoImages } from "../../../assets/images";
import { FaRandom } from "react-icons/fa";
import { Carousel } from "../../Carousel/Carousel";
import "./CarouselTwo.css";

export const CarouselTwo = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="carouselTwo">
      <div className="carouselTwo_info">
        <FaRandom />
        <h4>Visualize, filter & sort any way you want</h4>
        <span>
          Show only tasks assigned to you, or items marked as urgent. Break down
          any project in the way that's most helpful to you.
        </span>
      </div>
      <Carousel setIndex={setIndex} index={index} imgArr={carouselTwoImages} />
      <img src="https://www.notion.so/cdn-cgi/image/format=auto,width=256,quality=100/front-static/shared/illustrations/blocks/topPeekI.png" />

      <div className="carouselTwo_external_controlls">
        <button className="btn" data-active={index === 0} onClick={() => setIndex(0)}>
          Board
        </button>
        <button className="btn" data-active={index === 1} onClick={() => setIndex(1)}>
          Table
        </button>
        <button className="btn" data-active={index === 2} onClick={() => setIndex(2)}>
          Timeline
        </button>
        <button className="btn" data-active={index === 3} onClick={() => setIndex(3)}>
          Calendar
        </button>
        <button className="btn" data-active={index === 4} onClick={() => setIndex(4)}>
          Gallery
        </button>
        <button className="btn" data-active={index === 5} onClick={() => setIndex(5)}>
          List
        </button>
      </div>
    </div>
  );
};
