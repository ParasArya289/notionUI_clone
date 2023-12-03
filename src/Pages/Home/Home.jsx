import {
  IoArrowForwardSharp,
  IoColorPaletteOutline,
  IoEye,
} from "react-icons/io5";
import "./Home.css";
import { CarouselOne } from "../../Components/UI/CarouselOne/CarouselOne";
import { brandwall } from "../../assets/images";
import { ConsolidateTool } from "../../Components/UI/ConsolidateTool/ConsolidateTool";
import { CarouselTwo } from "../../Components/UI/CarouselTwo/CarouselTwo";

export const Home = () => {
  return (
    <div className="home">
      <main className="home__main">
        <div className="hero">
          <h1>Write, plan, share. With AI at your side.</h1>
          <h2>
            Notion is the connected workspace where better, faster work happens
          </h2>
          <a href="#" className="get_notion">
            Get Notion free
            <IoArrowForwardSharp />
          </a>
          <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png" />
        </div>
        <div className="home__carousel_1">
          <CarouselOne />
        </div>
        <div className="home__brandwall">
          <h2>Millions run on Notion every day</h2>
          <h3>
            Powering the world's best teams, from next-generation startups
            <br /> to established enterprises.
          </h3>
          <a href="#">
            Read customer stories <IoArrowForwardSharp />
          </a>
          <div className="logo_container">
            {brandwall.map((img) => (
              <img src={img} />
            ))}
          </div>
        </div>
        <ConsolidateTool />
        <div className="home__carousel_2">
          <CarouselTwo />
          <div className="column__container">
            <div className="column">
              <IoEye />
              <h4>Visualize, filter & sort any way you want</h4>
              <span>
                Show only tasks assigned to you, or items marked as urgent.
                Break down any project in the way that's most helpful to you.
              </span>
              <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/customize-info.png" />
            </div>
            <div className="column">
              <IoColorPaletteOutline />
              <h4>Visualize, filter & sort any way you want</h4>
              <span>
                Show only tasks assigned to you, or items marked as urgent.
                Break down any project in the way that's most helpful to you.
              </span>
              <img src="https://www.notion.so/cdn-cgi/image/format=webp,width=1080/front-static/pages/home/build-any-page-communicate-any-idea.png" />
            </div>
          </div>
          <h3>
            "Notion adapts to your needs. It’s as minimal or as powerful as
            <br /> you need it to be."
          </h3>
          <div className="user_review">
            <img
              src="https://www.notion.so/cdn-cgi/image/format=webp,width=48/front-static/shared/logos/color/match-group.png"
              alt="logo"
            />
            <span>
              <b>Rahim Makani</b>
              <br /> Director of Product, Matchgroup
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};
