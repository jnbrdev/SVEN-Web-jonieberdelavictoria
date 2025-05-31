import React from "react";
import { Head, Link } from "@inertiajs/react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";

export function SideBar() {
    return (
        <div className="flex">
            <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none">
                <div className="mb-2 flex items-center gap-4 p-4">
                    <img
                        src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
                        alt="brand"
                        className="h-8 w-8"
                    />
                    <Typography variant="h5" color="blue-gray">
                        Sidebar
                    </Typography>
                </div>
                <List>
                    <Link href={route("dashboard")}>
                        <ListItem selected={route().current('dashboard')}>
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Dashboard
                        </ListItem>
                    </Link>
                    <hr className="my-2 border-blue-gray-50" />
                   
                    <Link href={route("profile.edit")}>
                        <ListItem selected={route().current('profile.edit')}>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Profile
                        </ListItem>
                    </Link>
                    <ListItem>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
            </Card>
        </div>
    );
}