import React from "react";
import {
    Navbar,
    Typography,
} from "@material-tailwind/react";
import { Link, usePage } from "@inertiajs/react";
import logoNav from "../../images/logo-nav.png";

export function CustomNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const { auth } = usePage().props;

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <Navbar
            fullWidth
            className="fixed top-0 left-0 z-50 w-full bg-transparent p-0 shadow-none mt-4"
            style={{
                backdropFilter: "none",
                filter: "none",
                border: "none",
                borderBottom: "none",
                boxShadow: "none",
                        }}
        >
            <div className="container mx-auto flex flex-wrap items-center justify-between text-white-gray-900 py-2 px-5">
                <div className="flex items-center gap-3">
                    <img
                        src={logoNav}
                        alt="Logo"
                        style={{
                            width: "auto",
                            height: "70px",
                        }}
                    />
                    <Typography
                        as="span"
                        className="text-xl text-white-gray-900"
                    >
                        PAWTASTIC
                    </Typography>
                </div>

                <div className="hidden lg:flex items-center gap-6">
                    <Link href="#about" className="nav-link text-white-gray-700 hover:text-white-500 transition-colors">
                        About us
                    </Link>
                    <Link href="#schedule" className="nav-link text-white-gray-700 hover:text-white-500 transition-colors">
                        Schedule a visit
                    </Link>
                </div>
            </div>
        </Navbar>
    );
}
