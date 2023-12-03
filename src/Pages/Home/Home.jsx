import { Navbar } from "../../Components/Navbar/Navbar";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./Home.css";
import { Carousel } from "../../Components/Carousel/Carousel";
import { useState } from "react";
import { CarouselOne } from "../../Components/UI/CarouselOne/CarouselOne";
import { brandwall } from "../../assets/images";
import { ConsolidateTool } from "../../Components/UI/ConsolidateTool/ConsolidateTool";

export const Home = () => {
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
      </main>
    </div>
  );
};
