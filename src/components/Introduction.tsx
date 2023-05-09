import React from "react";
import Headercontainer from "./subcomponents/Introduction/headercontainer";
import ProfileImage from "./subcomponents/Introduction/profileImage";
import { ParallaxLayer } from "@react-spring/parallax";

export default function Introduction() {
  return (
    <div>
      <ParallaxLayer
        offset={0}
        speed={4}
      >
        <div className="absolute right-0 z-0 pr-20">
          <ProfileImage />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0.1}
      >
        <div
          className={`
            absolute z-10 top-[35%] left-[20%] pr-40
          `}
        >
          <Headercontainer />
        </div>
      </ParallaxLayer>

    </div>
  );
}
