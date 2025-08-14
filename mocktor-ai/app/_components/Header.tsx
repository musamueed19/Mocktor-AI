import { Button } from "@/components/ui/button";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="px-4 py-0.5 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500">
          <h1 className="text-base font-semibold md:text-2xl text-white">
            Mocktor AI
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <ModeToggle />
        <Button className="w-24 transform rounded-lg px-6 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 md:w-32">
          Get Started
        </Button>
      </div>
    </nav>
  );
};

export default Header;
