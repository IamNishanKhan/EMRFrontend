import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./components/Header";
import { Menu } from "lucide-react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const sessionCookie = Cookies.get("session");
    return sessionCookie === "authenticated";
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showProfileMenu &&
        !(event.target as Element).closest(".profile-menu")
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfileMenu]);

  const handleAuthentication = (value: boolean) => {
    setIsAuthenticated(value);
    if (value) {
      Cookies.set("session", "authenticated", { expires: 7 });
    } else {
      Cookies.remove("session");
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          showProfileMenu={showProfileMenu}
          setShowProfileMenu={setShowProfileMenu}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={handleAuthentication}
        />

        <div className="flex-1 flex relative pt-16">
          {isAuthenticated && (
            <>
              {/* Mobile Sidebar Toggle Button */}
              <button
                onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                className="fixed top-20 left-4 z-50 p-2 rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 md:hidden"
              >
                <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>

              {/* Desktop Sidebar */}
              <div className="hidden md:block">
                <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] overflow-hidden">
                  <Sidebar isOpen={true} onToggle={() => {}} />
                </div>
              </div>

              {/* Mobile Sidebar */}
              <div
                className={`md:hidden fixed inset-y-16 left-0 z-40 transition-transform duration-300 transform ${
                  isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <div
                  className="fixed inset-0 bg-gray-900/50"
                  onClick={() => setIsMobileSidebarOpen(false)}
                />
                <div className="relative h-full">
                  <Sidebar
                    isOpen={isMobileSidebarOpen}
                    onToggle={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                  />
                </div>
              </div>
            </>
          )}

          {/* Main Content Area */}
          <div
            className={`flex-1 ${
              isAuthenticated ? "md:ml-64" : ""
            } overflow-y-auto`}
          >
            <Routes>
              <Route
                path="/login"
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" replace />
                  ) : (
                    <Login setIsAuthenticated={handleAuthentication} />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  isAuthenticated ? (
                    <Dashboard />
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}