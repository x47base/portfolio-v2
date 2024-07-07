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
    setTimeout(() => {
      setShowFirstLine(true);
    }, 0);

    setTimeout(() => {
      setHideCursorOne(true);
    }, 1100);

    setTimeout(() => {
      setShowSecondLine(true);
    }, 1095);

    setTimeout(() => {
      setHideCursorTwo(true);
    }, 2190);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full xl:flex xl:justify-center xl:items-center">
        <div className="flex flex-col xl:flex-row items-center justify-between
        xl:pt-8 xl: pb-24 xl:w-4/5 gap-8">
          <div className="text-center xl:text-left">
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
                  <MdWork className="text-xl"/>
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
          <div className="w-56 h-56 xl:w-72 xl:h-72 mix-blend-lighten">
            <Image
              src="/assets/photo.jpg"
              alt="Samuel Spink"
              layout="responsive"
              width={498}
              height={498}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}