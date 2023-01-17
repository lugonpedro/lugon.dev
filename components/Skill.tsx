import React from "react";

export default function Skill({ image, title }: Skill) {
  return (
    <div className="group relative flex flex-col hover:text-neon">
      <img
        src={image}
        className="rounded-full border border-green object-cover w-20 h-20 md:h-24 md:w-24 xl:w-32 xl:h-32 hover:border-neon hover:scale-110 duration-300"
      />
      <p className="text-center mt-2">{title}</p>
    </div>
  );
}
