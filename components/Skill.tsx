import React from "react";
import Image from "next/image";

export default function Skill({ image, title }: Skill) {
  return (
    <div className="group relative flex flex-col hover:scale-125 duration-300">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="rounded-full border border-green object-cover w-20 h-20 md:h-24 md:w-24 xl:w-32 xl:h-32"
      />
      <p className="text-center mt-2">{title}</p>
    </div>
  );
}
