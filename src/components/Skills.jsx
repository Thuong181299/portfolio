import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Typescript from "../assets/typescript.png";
import FireBase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl  py-1 font-bold inline border-b-4 border-pink-600">Skills</p>
          <p className="py-6">// There are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8">
          <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={Typescript} alt="Typescript icon" />
            <p className="my-4">Typescript</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="my-4">GitHub</p>
          </div>
          {/* <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-sm shadow-[#040c16] hover:scale-125 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
