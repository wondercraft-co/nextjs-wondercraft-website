"use client";
import { cn } from "@/utils/util";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export interface IProjectCardProps {
  title: string;
  agency: string;
  tags: string[];
  href: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  agency,
  tags,
  href,
  imageUrl,
}: IProjectCardProps) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full h-[400px] rounded-3xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="absolute w-full h-full"
        animate={{
          scale: isHovered ? 1.1 : 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
      >
        <Image
          src={imageUrl}
          alt=""
          width={1200}
          height={300}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div className="absolute bottom-0 left-0 p-3 w-full h-full flex flex-col justify-end">
        <div className="space-x-2 mb-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <div className="bg-white py-4 px-8 rounded-xl flex-1">
            <div className="text-lg font-semibold mb-1">{title}</div>
            <div className="text-gray-600">Agency: {agency}</div>
          </div>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "bg-white text-gray-900 transition-all h-full py-4 px-8 rounded-xl flex justify-center items-center after:content-[' '] after:absolute after:inset-0",
              {
                "bg-wonder text-white": isHovered,
              }
            )}
          >
            <span className="sr-only">See Project {title}</span>
            <ArrowUpRightIcon className="w-8 h-8 " />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectCard;
