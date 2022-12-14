import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineCloudDownload,
  AiOutlineGlobal,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/Mitch.png";
import code from "../public/Dassault.png";
import design from "../public/coghlin-companies-web-logo-22.png";
import consulting from "../public/Dassault.png";
import Image from "next/image";
import web1 from "../public/sapience.png";
import web2 from "../public/experimentmusic.png";
import web3 from "../public/AI_Hero_Copy_Generator.png";
import web4 from "../public/googleanalytics.png";
import Typewriter from 'typewriter-effect';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Miitch's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section>
          <nav className="py-5 mb-2 flex justify-between dark:text-white">
          <div className="text-x flex justify-center gap-2">
          <a className = "hover:text-teal-400">
          <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className= "cursor-pointer text-2xl"
                /> </a>
            <h1 className="uppercase">Boston, MA</h1>
            </div>
            <ul className="flex items-center">

              <div class="text-xl flex justify-center gap-4 text-black dark:text-white">
              
              <a href="https://twitter.com/mitchellmondro" target="_blank" rel="noopener noreferrer" class = "hover:text-teal-400">
              <AiFillTwitterCircle /> </a>
              <a href="https://www.linkedin.com/in/mitchellmondro/" target="_blank" rel="noopener noreferrer" class = "hover:text-teal-400">
              <AiFillLinkedin /> </a>
              <a href="https://www.youtube.com/channel/UCNtjzKme85NQ4xfAZWK3wLw" target="_blank" rel="noopener noreferrer" class = "hover:text-teal-400">
              <AiFillYoutube /> </a>
            
            </div>
              </ul>
            
          </nav>
</section>
          <section>
          <div className="text-center">
            <h2 className="text-5xl py-8 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Mitch Mondro
            </h2>
            
            <div class="text-3xl flex justify-center gap-2 pb-8 pt-16">
            <a  href="Mitch_Mondro_Resume.pdf" target="_blank" rel="noopener noreferrer" class="
            rounded 
            inline-block 
            px-12 
            py-3 
            bg-gradient-to-r from-cyan-500 text- to-teal-500 
            text-white 
            font-sans 
            text-lg 
            leading-tight 
            shadow-md 
            hover:bg-blue-700 
            hover:shadow-lg 
            focus:bg-blue-700 
            focus:shadow-lg 
            focus:outline-none 
            focus:ring-0 
            active:bg-blue-800 
            active:shadow-lg 
            transition 
            duration-150 
            ease-in-out">
                  Resume
            </a>
            <a href="Mitch_Mondro_Resume.pdf" download="download resume" target="_blank" rel="noopener noreferrer" class = "py-2 flex justify-center gap-4 text-black dark:text-white hover:text-teal-400">
              <AiOutlineCloudDownload /> </a>
            </div>

      
          </div>
        </section>
        <section>
          <div className="flex justify-center">
            <h3 className="text-3xl dark:text-white ">Featured Projects</h3>
            
          </div>

        
          <div className="lg:flex flex-wrap gap-10">
            <div className=" shadow-lg p-8 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={web1} className="border-2 border-grey rounded-xl w-full" width={400} height={300} />
              <h2 className="text-xl font-medium pt-8 pb-2">
              Sapience News: Bias and Factualness Checker for News Articles
              </h2>
              <p> 
              Won $500 in funding in a college Shark Tank like competition where my team and I built and pitched a web application that used machine learning to predict bias and factualness likeliness in online news articles. The web app took the input of a news article URL and delivered a bias factualness prediction of that article from extreme left to extreme right. The algorithm was trained on thousands of publications that were labeled for political bias and factualness using the International Fact Checking Network.
              </p>
            </div>
            <div className=" shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
    <Image src={web3} className="border-2 border-grey rounded-xl w-full" width={400} height={300} />
    <h2 className="text-xl font-medium pt-8 pb-2">
    AI Web App Copywriting Tool   
    </h2>
    <p className="pb-8"> 
    I developed an AI-powered web app copywriting tool to assist with my web development projects. The tool uses machine learning to turn a company description into website copy with a proven high conversion rate. I was responsible for the full development process, including researching and implementing AI technology, designing the user interface.
    </p>
    <a  href="https://ai-website-copywriter.herokuapp.com/" target="_blank" rel="noopener noreferrer" class="
            rounded 
            inline-block 
            px-12 
            py-3
            bg-gradient-to-r from-cyan-500 text- to-teal-500 
            text-white 
            font-sans 
            text-lg 
            leading-tight 
            shadow-md 
            hover:bg-blue-700 
            hover:shadow-lg 
            focus:bg-blue-700 
            focus:shadow-lg 
            focus:outline-none 
            focus:ring-0 
            active:bg-blue-800 
            active:shadow-lg 
            transition 
            duration-150 
            ease-in-out">
                  Try It Out
            </a>
  </div>
            
  </div>


<div className="lg:flex flex-wrap gap-10">
<div className=" shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={web2} className="border-2 border-grey rounded-xl w-full" width={400} height={300} />
              <h2 className="text-xl font-medium pt-8 pb-2">
              YouTube Channel 
              </h2>
              <p> 
              I've built an audience of 6,600 subscribers on my instrumental YouTube channel by optimizing my titles and tags for search and using social media to promote my videos. I've reached several key milestones on my channel, including reaching over 3.5M channel views and 150K total watch hours. My channel includes instrumental remakes, how to's and original beats. I've received a lot of positive feedback from my viewers, with many using my music in their own work. I've also been able to monetize my channel through YouTube ads. 
              </p>
            </div>

  <div className=" shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
    <Image src={web4} className="border-2 border-grey rounded-xl w-full" width={400} height={300} />
    <h2 className="text-xl font-medium pt-8 pb-2">
    Ecommerce Website: Experiment Music
    </h2>
    <p> 
    I created an ecommerce website to sell instrumental tracks and beats. I promoted the website through my YouTube channel, which has 6,600 subscribers, and through SEO, email campaigns, and social media advertising. The website has received positive feedback and generated sales. I also implemented a newsletter that sends out free beats every week, which I automated using marketing tools.
    </p>
  </div>
  </div>


  </section>
  <h3 className="text-3xl dark:text-white"> Skills</h3>
  <div class="flex flex-col md:flex-row justify-between items-center text-x dark:text-white pb-10">
  <div class="md:w-2/3 ">

  <h4 class="justify-center text-xl"> Analytics Applications: </h4>
   <Typewriter class=" justify-center dark:text-white" options ={{
        strings: [
          "Google Analytics, Google Ad Words, Optimizely, SEMrush, HubSpot"
        ],
        autoStart: true,
        loop: false,
        delay: 30,
        deleteSpeed: 1000000,
        cursor: ""
      }}
      />
      <br/>
      <h4 class="justify-center text-xl"> Programming Languages/Frameworks:</h4>
      <Typewriter class="text-sm justify-cente dark:text-whiter" options ={{
        strings: [
          " Javascript ES6, Python, HTML, CSS, SQL, Tailwind, Solidity, React, Next.js, Flask",
        ],
        autoStart: true,
        loop: false,
        delay: 30,
        deleteSpeed: 1000000,
        cursor: ""
      }}
      />
      <br/>
      <h4 class="justify-center text-xl"> Design Applications: </h4>
      <Typewriter class="text-sm justify-cente dark:text-whiter" options ={{
        strings: [
          "Adobe: Illustrator, Photoshop, Premiere, Figma, Wordpress, Webflow, Canva, Midjourney"
        ],
        autoStart: true,
        loop: false,
        delay: 30,
        deleteSpeed: 1000000,
        cursor: ""
      }}
      />
      <br/>
      <h4 class="justify-center text-xl"> Interests:</h4>
      <Typewriter class="text-sm justify-cente dark:text-whiter" options ={{
        strings: [
          " Baseball, Golf, Music Production, Travel, NFTs, Crypto, Writing, Powerlifting"
        ],
        autoStart: true,
        loop: false,
        delay: 30,
        deleteSpeed: 1000000,
        cursor: ""
      }}
      />
  
  </div>
  <div class="md:w-1/3 flex items-center justify-center align-items-center">
  <div className=" bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden md:h-70 md:w-70">
    <Image src={deved} layout="fill" objectFit="cover" objectPosition="center" />
  </div>
</div>



</div>

      </main>
    </div>
  );
}
