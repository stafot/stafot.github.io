// src/components/Header.tsx
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const links = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/posts", label: "Posts" },
        { to: "/projects", label: "Projects" },
        { to: "#contact", label: "Contact" },
    ];

    return (
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link to="/" className="text-xl font-bold">
                    Stavros Foteinopoulos
                </Link>
                <nav className="space-x-6">
                    {links.map(({ to, label }) =>
                        to.startsWith("#") ? (
                            <a
                                key={to}
                                href={to}
                                className="hover:underline"
                            >
                                {label}
                            </a>
                        ) : (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === "/"}
                                className={({ isActive }) =>
                                    `hover:underline ${
                                        isActive ? "underline font-semibold" : ""
                                    }`
                                }
                            >
                                {label}
                            </NavLink>
                        )
                    )}
                </nav>
            </div>
        </header>
    );
}
