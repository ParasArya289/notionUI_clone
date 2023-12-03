import { Navbar } from "../../Components/Navbar/Navbar";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./Home.css";
import { Carousel } from "../../Components/Carousel/Carousel";
import { useState } from "react";
import { CarouselOne } from "../../Components/UI/CarouselOne/CarouselOne";

export const Home = () => {
  const [carouselOneIndex, setCarouselOneIndex] = useState(3);
  const imgArr = [
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/6Onv3yRAxJAzFIZJpuwb5E/24e411a845cfcb4a8e2848e9912a9d29/Q_A_Kombi_Hero_screenshot.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/4NsNEojqcfzqch9Eoum1Gm/9aa7d73ac74b60358499211eff4fd074/engineering-wiki-V2.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/546F1MvF9KlFXBOO41AKLx/605f38de934bb47bcd89e6335eee1242/projects.png",
    "https://www.notion.so/cdn-cgi/image/format=webp,width=1920/https://images.ctfassets.net/spoqsaf9291f/1h9O767GwXx8lwWKS55G6o/aa28560fbd35d34a414522259fde3517/meeting-notes.png",
  ];
  return (
    <div className="home">
      <Navbar />
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
          {/* <Carousel
            setIndex={setCarouselOneIndex}
            index={carouselOneIndex}
            imgArr={imgArr}
          /> */}
          <CarouselOne />
        </div>
      </main>
    </div>
  );
};
