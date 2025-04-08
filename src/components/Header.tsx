import React from "react";
import { Sun, Moon, User as UserIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/logos/icon.png";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  showProfileMenu: boolean;
  setShowProfileMenu: (value: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

export default function Header({
  darkMode,
  setDarkMode,
  showProfileMenu,
  setShowProfileMenu,
  isAuthenticated,
  setIsAuthenticated,
}: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowProfileMenu(false);
    navigate("/login", { replace: true });
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-800 shadow-md z-50 flex items-center">
      <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={icon}
            alt="North South University Logo"
            className="w-[30px] h-[30px]"
          />
          <div className="flex flex-col">
            <h1 className="text-[13px] font-bold leading-none text-gray-800 dark:text-gray-200">
              EMR Management
            </h1>
            <div className="flex flex-col text-[9px] leading-[11px] text-gray-600 dark:text-gray-400">
              <span>Excellence in Medication</span>
              <span>Hospital Management System</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          {isAuthenticated && (
            <div className="relative profile-menu">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0"
                aria-label="Profile menu"
              >
                <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
