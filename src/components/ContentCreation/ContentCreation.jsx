import React from "react"
import { BsArrowRight } from "react-icons/bs"

import ContentCreationImage from "./../../images/contentcreation.png"

export default function ContentCreation() {
  return (
    <>
      <div className="lg:flex flex-warp lg:px-40 py-10 p-10">
        <div className="xl:w-1/2 pt-15 pr-10">
          <span className="block font-bold text-blue-500 text-xl uppercase">
            Content creation & publishing
          </span>
          <span className="block text-5xl font-bold pt-5">
            Produce Actionable
            <br />{" "}
            <span className="text-blue-500">safety guides & content</span>
          </span>
          <span className="block text-1xl pt-5 text-2xl">
            Seprated they live in Boakmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Boakmarks
            right{" "}
          </span>
          <div className="flex py-5">
            <span className="font-bold text-blue-500 pr-2">Learn More</span>{" "}
            <BsArrowRight size={28} color="#19B5FE" />
          </div>
        </div>
        <div className="xl:w-1/2 ">
          <img src={ContentCreationImage} alt="Content Logo" className="w-full" />
        </div>
      </div>
    </>
  )
}
