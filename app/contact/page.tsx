"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";

const Contact = () => {
  const [showLine, setShowLine] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowLine(true);
    }, 500);

    setTimeout(() => {
      setHideCursor(true);
    }, 1500);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center justify-center xl:justify-between xl:pt-8 pb-8 xl:w-4/5 gap-8">
        <div className="flex-1 text-center xl:text-left">
          <h2 className="text-3xl mb-6">
            <span className={`${showLine ? "typewriter-line text-accent" : ""} ${hideCursor ? "hidden-cursor" : ""}`}>
              Get in Touch
            </span>
          </h2>
          <p className="max-w-[500px] mb-9 text-white/80">
            I{"'"}m always open to discuss your project or ideas. Feel free to reach out to me via email.
          </p>
          <div className="flex justify-center items-center xl:items-start xl:justify-start flex-col gap-6">
            <div className="flex items-center gap-4">
              <MdEmail className="text-xl text-accent" />
              <a href="mailto:samuelspink.ch@gmail.com" className="text-white/80">samuelspink.ch@gmail.com</a>
            </div>
            {/*
            <div className="flex items-center gap-4">
              <MdPhone className="text-xl text-accent" />
              <a href="tel:+41000000000" className="text-white/80">+41 00 000 00 00</a>
            </div>
            */}
            <div className="socials">
              <Socials
                containerStyle="flex gap-6"
                iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/assets/photo.jpg"
            alt="Samuel Spink"
            width={300}
            height={300}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact