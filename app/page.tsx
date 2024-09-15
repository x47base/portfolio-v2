"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import { motion } from "framer-motion";

export default function Home() {
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [hideCursorOne, setHideCursorOne] = useState(false);
  const [hideCursorTwo, setHideCursorTwo] = useState(false);

  useEffect(() => {
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
          <motion.div
            className="flex-1 text-center xl:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Application Developer
            </motion.span>
            <div>
              <motion.h1
                className="h1 mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className={`${showFirstLine ? "typewriter-line1" : ""} ${hideCursorOne ? "hidden-cursor" : ""}`}>
                  Hey! I{"'"}m
                </span>
                <br />
                <span className={`${showSecondLine ? "typewriter-line2 text-accent" : "text-accent hidden-line hidden-cursor"} ${hideCursorTwo ? "hidden-cursor" : ""}`}>
                  Samuel Spink
                </span>
              </motion.h1>
            </div>
            <motion.p
              className="max-w-[500px] mb-9 text-white/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I{"'"}m an avid application developer based in Switzerland and I am proficient in various programming languages.
            </motion.p>
            <motion.div
              className="flex flex-col xl:flex-row items-center gap-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/work">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>View My Work</span>
                    <MdWork className="text-xl" />
                  </Button>
                </motion.div>
              </Link>
              <div className="socials">
                <Socials
                  containerStyle="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/assets/photo.jpg"
              alt="Samuel Spink"
              width={328}
              height={491.6}
              className="object-cover rounded-lg shadow-2xl relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
