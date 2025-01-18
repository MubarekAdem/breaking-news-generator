import { useRouter } from "next/router";
import React from "react";
import { Github } from "lucide-react"; // Correct import for the GitHub icon
import { Button } from "@/components/ui/button"; // Assuming you have this Button component
import Link from "next/link"; // Correct import for Next.js Link

const Navbar = () => {
  const router = useRouter();

  // Check if the router is available before using it
  if (!router) {
    return null; // Or provide fallback rendering
  }

  return (
    <nav>
      {/* Your Navbar content */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or brand */}

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8"></div>

        {/* GitHub Button */}
        <div className="flex items-center space-x-4">
          <Button
            onClick={() =>
              window.open(
                "https://github.com/MubarekAdem/breaking-news-generator",
                "_blank"
              )
            }
            className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300"
          >
            <span>View Source Code on github</span>
            <Github className="h-6 w-6 text-white" />
          </Button>
          {/* Using the GitHub icon directly */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
