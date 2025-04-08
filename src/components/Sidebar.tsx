import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ChevronDown,
  LayoutDashboard,
  ClipboardList,
} from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: { label: string; path: string }[];
}

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
      path: "/dashboard",
    },
    {
      label: "Prescriptions",
      icon: <ClipboardList className="w-5 h-5" />,
      children: [
        { label: "Patient Queue", path: "/patient-queue" },
        { label: "Create New Prescription", path: "/prescriptions-create" },
        { label: "Previous Prescriptions", path: "/prescriptions-view" },
        { label: "Patient Reports", path: "/patient-reports" },
      ],
    },
  ];

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 768) {
      onToggle();
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white dark:bg-gray-800 w-64 h-full shadow-lg flex-shrink-0 transition-colors duration-200 mt-0 md:mt-0">
      <div className="h-full overflow-y-auto scrollbar-none">
        <div className="py-4">
          {navItems.map((item) => (
            <div key={item.label} className="px-2 mb-1">
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-3">{item.label}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMenus.includes(item.label)
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                  {openMenus.includes(item.label) && (
                    <div className="mt-1 ml-4 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child.path}
                          onClick={() => handleNavigation(child.path)}
                          className={`w-full flex items-center px-4 py-2 text-sm ${
                            isActive(child.path)
                              ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          } rounded-md transition-colors duration-200`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleNavigation(item.path!)}
                  className={`w-full flex items-center px-4 py-2 text-sm font-medium ${
                    isActive(item.path!)
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  } rounded-md transition-colors duration-200`}
                >
                  {item.icon}
                  <span className="ml-3">{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}