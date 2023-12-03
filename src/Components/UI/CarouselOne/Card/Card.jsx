import { BsStars } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";
import "./Card.css";

export const Card = ({ setIndex, index }) => {
  const handleAction = (index) => {
    setIndex(index);
  };
  return (
    <div className="container">
      <div
        className="card"
        onPointerEnter={() => handleAction(0)}
        onClick={() => handleAction(0)}
        aria-active={index === 0}
        data-color="purple"
      >
        <div className="card__heading">
          <BsStars />
          AI<span>Now with Q&A</span>
        </div>
        <div className="card__info">
          Ask literally anything. Notion will answer.
          <a href="#">
            Learn More <IoArrowForward />
          </a>
        </div>
      </div>
      <div
        className="card"
        onPointerEnter={() => handleAction(1)}
        onClick={() => handleAction(1)}
        aria-active={index === 1}
        data-color="red"
      >
        <div className="card__heading">
          <BsStars />
          Wikis
        </div>
        <div className="card__info">
          Centralize your knowledge. No more hunting for asnwers.
          <a href="#">
            Learn More <IoArrowForward />
          </a>
        </div>
      </div>
      <div
        className="card"
        onPointerEnter={() => handleAction(2)}
        onClick={() => handleAction(2)}
        aria-active={index === 2}
        data-color="blue"
      >
        <div className="card__heading">
          <BsStars />
          Projects
        </div>
        <div className="card__info">
          Manage complex projects without the chaos.
          <a href="#">
            Learn More <IoArrowForward />
          </a>
        </div>
      </div>
      <div
        className="card"
        onPointerEnter={() => handleAction(3)}
        onClick={() => handleAction(3)}
        aria-active={index === 3}
        data-color="yellow"
      >
        <div className="card__heading">
          <BsStars />
          Docs
        </div>
        <div className="card__info">
          Simple, powerful, beautiful. Next-gen notes & docs.
          <a href="#">
            Learn More <IoArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};
