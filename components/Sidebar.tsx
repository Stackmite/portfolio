import React, { useEffect } from "react";
import { Logo } from "../constants";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleLinkClick = (id: string) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar Content */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[60] shadow-2xl transition-transform duration-500 ease-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <img src="/logo.png" style={{ width: "60px", height: "auto" }} />
              <span className="text-xl font-bold text-slate-900">
                Stackmite
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col space-y-2">
            <button
              onClick={() => handleLinkClick("home")}
              className="text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick("about")}
              className="text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick("services")}
              className="text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              Services
            </button>
            <button
              onClick={() => handleLinkClick("projects")}
              className="text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              Projects
            </button>
            <button
              onClick={() => handleLinkClick("contact")}
              className="text-left py-3 px-4 rounded-xl text-lg font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-all"
            >
              Contact Us
            </button>
          </nav>

          <div className="mt-auto pt-10 border-t border-slate-100">
            <p className="text-slate-400 text-sm mb-4">
              Start your journey with us.
            </p>
            <button
              onClick={() => handleLinkClick("contact")}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
