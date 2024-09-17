"use client";
import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import DarkLightModeSwitch from "./DarkLightModeSwitch";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-gray-900 dark:text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/">
            <h1 className="text-4xl font-semibold text-gray-900 dark:text-white">
              Samuel <span className="text-accent dark:text-accent">.</span>
            </h1>
          </Link>
        </motion.div>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex gap-8 items-center justify-center">
          <Nav />
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 150 }}>
            <Link href="/contact">
              <Button className="text-gray-900 bg-accent dark:bg-accent dark:text-white hover:bg-accent hover:text-gray-900 dark:hover:bg-accent dark:hover:text-white">
                Hire Me
              </Button>
            </Link>
          </motion.div>
          <DarkLightModeSwitch />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header;
