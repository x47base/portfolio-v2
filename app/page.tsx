"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";

export default function Home() {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [hideCursorOne, setHideCursorOne] = useState(false);
  const [hideCursorTwo, setHideCursorTwo] = useState(false);

  useEffect(() => {
    // Set the durations based on text length or other criteria
    const firstLineDuration = 1000;
    const secondLineDuration = 1000;

    setShowFirstLine(true);
    const timer1 = setTimeout(() => {
      setHideCursorOne(true);
    }, firstLineDuration - 150);

    const timer2 = setTimeout(() => {
      setShowSecondLine(true);
    }, firstLineDuration);

    const timer3 = setTimeout(() => {
      setHideCursorTwo(true);
    }, firstLineDuration + secondLineDuration);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full xl:flex xl:justify-center xl:items-center">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 pb-8 xl:w-4/5 gap-8">
          <div className="flex-1 text-center xl:text-left">
            <span className="text-xl">Application Developer</span>
            <div>
              <h1 className="h1 mb-6">
                <span className={`${showFirstLine ? "typewriter-line1" : ""} ${hideCursorOne ? "hidden-cursor" : ""}`}>
                  Hey! I{"'"}m
                </span>
                <br />
                <span className={`${showSecondLine ? "typewriter-line2 text-accent" : "text-accent hidden-line hidden-cursor"} ${hideCursorTwo ? "hidden-cursor" : ""}`}>
                  Samuel Spink
                </span>
              </h1>
            </div>
            <p className="max-w-[500px] mb-9 text-white/80">
              I{"'"}m an avid application developer based in Switzerland and I am proficient in various programming languages.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link href="/work">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>View My Work</span>
                  <MdWork className="text-xl" />
                </Button>
              </Link>
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
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
