"use client";
import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Samuel <span className="text-accent">.</span>
            </h1>
          </Link>
        </motion.div>
            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex gap-8 items-center justify-center">
          <Nav />
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link href="/contact">
              <Button>Hire Me</Button>
            </Link>
          </motion.div>
        </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header