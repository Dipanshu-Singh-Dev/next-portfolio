import Image from "next/image";
import React from "react";

const img = () => {
  return (
    <div className="pb-16">
      <Image
        src="/profile.jpg"
        width={200}
        height={200}
        alt="profile"
        className="rounded-full mx-auto"
      />
    </div>
  );
};

export default img;
