import React from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import Link from "next/link";

function TopBar() {
  const handleClose = () => {
    console.log("Cancel Button click");
  };

  return (
    <div className="flex justify-center items-center w-full bg-pink-100 h-10 text-neutral-700 py-2 px-4">
      <div className="flex-1 text-center text-lg">
        It's special discount{" "}
        <Link href={"#"} className="text-magenta-600 font-medium">
          Sign up
        </Link>{" "}
        now.
      </div>
      <button
        className="absolute right-4 text-2xl font-bold cursor-pointer"
        onClick={handleClose}
      >
        <Image alt={"close-button"} src={Icons.close_neutral} />
      </button>
    </div>
  );
}

export default TopBar;
