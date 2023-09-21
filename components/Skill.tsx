import React from "react";
import Image from "next/image";

export default function Skill({ image, title }: Skill) {
  return (
    <div className="group relative flex flex-col">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="rounded-full object-cover bg-green/20 w-20 h-20 md:h-24 md:w-24 xl:w-32 xl:h-32"
      />
      <p className="text-center text-pearl mt-2">{title}</p>
    </div>
  );
}
