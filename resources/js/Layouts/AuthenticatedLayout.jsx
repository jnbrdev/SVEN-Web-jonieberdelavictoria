import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { SideBar } from "@/Components/SideBar";
import { Link, usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import React from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [open, setOpen] = React.useState(false); // Drawer state for mobile/tablet
    const openDrawer = () => setOpen(true);  // Open Drawer
    const closeDrawer = () => setOpen(false); // Close Drawer

    const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar state for desktop
    const toggleSidebar = () => {
        if (window.innerWidth >= 1024) {
            setSidebarOpen((prev) => !prev); // Toggle sidebar visibility on large screens
        } else {
            openDrawer(); // Open Drawer on mobile/tablet
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSidebarOpen(true); // Show sidebar on large screens
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            {/* Desktop Sidebar - Fixed position with animation */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-[280px] hidden lg:block transition-all duration-300 ease-in-out transform ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } lg:block`}
            >
                <SideBar />
            </div>

            {/* Mobile/Tablet Drawer */}
            <Drawer
                open={open}
                onClose={closeDrawer}
                className="lg:hidden w-[260px]"
            >
                <SideBar />
            </Drawer>

            {/* Main Content Area */}
            <div
                className={`flex flex-col transition-all duration-300 ${
                    sidebarOpen ? "lg:ml-[280px]" : "lg:ml-0"
                }`}
            >
                {/* Header */}
                {header && (
                    <header className="bg-white shadow dark:bg-gray-800 px-4 py-2 sm:px-6 lg:px-5 flex items-center justify-between">
                        <div className="flex items-center gap-1">
                            {/* Sidebar Toggle - Works for both Mobile and Desktop */}
                            <Button
                                onClick={toggleSidebar}
                                className="bg-transparent text-black hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 shadow-none border-none p-0 pr-4"
                            >
                                ☰
                            </Button>

                            {/* Header Text */}
                            <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                {header}
                            </span>
                        </div>
                        {/* User Dropdown */}
                        <div className="relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                                        >
                                            {user.name}
                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </header>
                )}

                {/* Main Content */}
                <main className="flex-1 p-4 overflow-auto">{children}</main>
            </div>
        </div>
    );
}
