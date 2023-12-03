import { Navbar } from "../../Components/Navbar/Navbar";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./Home.css";

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
      </main>
    </div>
  );
};
