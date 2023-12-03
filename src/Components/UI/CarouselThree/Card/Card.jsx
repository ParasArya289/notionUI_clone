import { HiWrenchScrewdriver, HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoIosColorPalette, IoIosMegaphone, IoIosCube } from "react-icons/io";
import { FaCompass } from "react-icons/fa";

import "./Card.css";

export const Card = ({ setIndex, index }) => {
  const handleAction = (index) => {
    setIndex(index);
  };
  return (
    <div className="ct3_container">
      <div
        className="ct3_card"
        data-active={index === 0}
        onClick={() => handleAction(0)}
      >
        <HiWrenchScrewdriver />
        Engineering
      </div>
      <div
        className="ct3_card"
        data-active={index === 1}
        onClick={() => handleAction(1)}
      >
        <IoIosColorPalette />
        Design
      </div>
      <div
        className="ct3_card"
        data-active={index === 2}
        onClick={() => handleAction(2)}
      >
        <HiOutlineRocketLaunch />
        Product
      </div>
      <div
        className="ct3_card"
        data-active={index === 3}
        onClick={() => handleAction(3)}
      >
        <IoIosMegaphone />
        Marketing
      </div>
      <div
        className="ct3_card"
        data-active={index === 4}
        onClick={() => handleAction(4)}
      >
        <FaCompass />
        Operations
      </div>
      <div
        className="ct3_card"
        data-active={index === 5}
        onClick={() => handleAction(5)}
      >
        <IoIosCube />
        HR
      </div>
    </div>
  );
};
