import Container from "@/components/container";
import React from "react";
import { IoIosCall, IoMdMoon } from "react-icons/io";
import { MdEmail, MdSunny } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <Container className="h-10 flex justify-between items-center">
        <div className="flex items-center gap-10  font-bold text-sm">
          <div className="flex items-center gap-2">
            <IoIosCall className="text-lg" />
            <p>01785-882381</p>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail className="text-lg" />
            <p>moon69032@gmail.com</p>
          </div>
        </div>

        {/* <div
          className="text-2xl cursor-pointer"
          title={isLight ? "Dark Mode" : "Light Mood"}
        >
          {isLight ? <IoMdMoon /> : <MdSunny />}
        </div> */}
      </Container>
    </div>
  );
};

export default TopBar;
