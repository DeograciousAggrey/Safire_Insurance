import React from "react";
import CloseIcon from "../Icon/CloseIcon";
import Link from "next/link";
type TopNotiTypes = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const TopNoti = ({ setOpen }: TopNotiTypes) => {
  return (
    <div
      className="h-12 py-3 relative w-full flex justify-center"
      style={{ backgroundColor: '#4b24af' }}
    > <h1 className=" text-white text-xs my-auto font-medium">
        Safire is still in testing phase.
      </h1>


      <div
        onClick={() => setOpen(true)}
        className=" absolute right-6 cursor-pointer"
      >
        <CloseIcon color={"#fff"} strokeWidth={"1.5"} />
      </div>
    </div>
  );
};

export default TopNoti;
