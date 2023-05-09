import React from 'react';
import Candidate from "../../../interfaces/Candidate";
import _introduction from "../../../data/introduction.json";
import _resume from "../../../data/resume.pdf";


export default function Headercontainer() {
  const candidate: Candidate = _introduction;

  return (
    <div
      className={`
        font-poppins max-w-md drop-shadow-2xl
        md:max-w-2xl  
        lg:max-w-2xl  
        xl:max-w-2xl  
        2xl:max-w-2xl
      `}
      style={{
        textShadow: "#000 1px 0 30px"
      }}
    >
      <div className="text-2xl font-medium">
        Hi! My name is,
      </div>
      <div className="text-4xl font-bold">
        {candidate.name}
      </div>
      <div className="text-3xl font-semibold text-orange-400">
        {candidate.position}
      </div>
      <div className="text-xl font-medium w-auto">
        {candidate.description}
      </div>
      <br />
      <div className="">
        <div className="">
          <a href={_resume}>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
              <span>Download Resume</span>
            </button>
          </a>
        </div>
        <div className=""></div>
      </div>
    </div>
  )
}
