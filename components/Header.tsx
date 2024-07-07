import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            {/* logo */}
            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Samuel <span className="text-accent">.</span>
                </h1>
            </Link>
            {/* desktop nav & hire me button */}
            <div className="hidden xl:flex gap-8 items-center justify-center">
                <Nav />
                <Link href="/contact">
                    <Button>Hire Me</Button>
                </Link>
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