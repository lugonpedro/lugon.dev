import React from "react";

export default function Skill({ image, title }: Skill) {
  return (
    <div className="group relative flex flex-col hover:scale-125 duration-300">
      <img
        src={image}
        className="rounded-full border border-green object-cover w-20 h-20 md:h-24 md:w-24 xl:w-32 xl:h-32"
      />
      <p className="text-center mt-2">{title}</p>
    </div>
  );
}
