import React from "react";
import { motion } from "framer-motion";

export default function Skill({ image, title }: Skill) {
  return (
    <div className="group relative flex cursor-pointer flex-col">
      <motion.img
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        src={image}
        className="rounded-full border border-green object-cover w-20 h-20 xl:w-32 xl:h-32 cursor-default"
      />
      <p className="text-center mt-2">{title}</p>
    </div>
  );
}
