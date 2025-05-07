// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";

// export function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   const handleClick = () => {
//     if (theme === "light") setTheme("dark");
//     else setTheme("light");
//   };

//   return (
//     <Button
//       variant="outline"
//       size="icon"
//       onClick={handleClick}
//       aria-label="Toggle theme"
//     >
//       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//     </Button>
//   );
// }
"use client";

import * as React from "react";
import { Moon, Sun, Search } from "lucide-react";
import { useTheme } from "next-themes";
import clsx from "clsx"; // Optional, for better class handling

import { useState } from 'react';
import { SearchModal } from '@/components/SearchModal';
//import { Search } from 'lucide-react'; // optional: for nice icon


interface ThemeToggleSwitchProps {
  className?: string; // Allow a dynamic class to be passed
}

export function ThemeToggleSwitch({ className }: ThemeToggleSwitchProps) {
  const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  // Ensure the component is mounted on the client to avoid hydration mismatch
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return a placeholder or null during server-side rendering
    return null;
  }


  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
       <div className="flex items-center gap-2">
   
    <button
      onClick={toggleTheme}
      className={clsx(
        "flex items-center justify-center transition-all",
        className // Merge dynamic class
      )}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-200" />
      )}
    </button>
      <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-white-600 hover:text-black transition mr-4"
          aria-label="Open Search"
        >
          <Search className="w-5 h-5 text-white-500" />
        </button>
        <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>

      
    </>

  );
}
