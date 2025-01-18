"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdEmail, MdPhone } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import { motion } from "framer-motion";

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
        <motion.div
          className="flex-1 text-center xl:text-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl mb-6 text-accent dark:text-accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className={`${showLine ? "typewriter-line text-accent dark:text-accent" : ""} ${hideCursor ? "hidden-cursor" : ""}`}>
              Get in Touch
            </span>
          </motion.h2>
          <motion.p
            className="max-w-[500px] mb-9 text-gray-900/80 dark:text-white/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I{"'"}m always open to discussing potential projects, collaborations, or any professional opportunities you may have.
            If you{"'"}re looking to hire or want to explore how we can work together, feel free to reach out via email.
          </motion.p>
          <motion.div
            className="flex justify-center items-center xl:items-start xl:justify-start flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MdEmail className="text-xl text-accent dark:text-accent" />
              <a href="mailto:samuelspink.ch@gmail.com" className="text-gray-900/80 dark:text-white/80">
                samuelspink.ch@gmail.com
              </a>
            </motion.div>
            {/* Uncomment if phone is needed */}
            {/*
            <motion.div
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdPhone className="text-xl text-accent dark:text-accent" />
              <a href="tel:+41000000000" className="text-gray-900/80 dark:text-white/80">
                +41 00 000 00 00
              </a>
            </motion.div>
            */}
            <motion.div
              className="socials"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Socials
                containerStyle="flex gap-6"
                iconStyle="flex justify-center items-center w-9 h-9 border border-accent dark:border-accent rounded-full flex justify-center items-center text-accent dark:text-accent text-base"
              />
            </motion.div>
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
            width={300}
            height={300}
            className="object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
