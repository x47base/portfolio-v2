"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { motion } from "framer-motion";
import DarkLightModeSwitch from "./DarkLightModeSwitch";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work"
    },
    {
        name: "contact",
        path: "/contact"
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent dark:text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                <div className="mt-32 mb-40 text-center text-2xl">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link href="/">
                            <h1 className="text-4xl font-satoshi font-700 text-gray-900 dark:text-white">
                                Samuel <span className="text-accent dark:text-accent">.</span>
                            </h1>
                        </Link>
                    </motion.div>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <motion.div key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href={link.path}
                                    className={`${link.path === pathname && "text-accent dark:text-accent border-b-2 border-accent dark:border-accent"} text-xl capitalize hover:text-accent dark:hover:text-accent transition-all font-satoshi font-700`}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        );
                    })}
                    <div className="flex items-center">
                        <DarkLightModeSwitch />
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
