"use client";
import Link from "next/link";
import { useState } from 'react'; // Import useState for the mobile menu toggle
import SearchInput from "./SearchInput";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react'; // Icons for the mobile menu

// --- Component: NavLink with Animated Underline ---
const NavLink = ({ href, children, pathname, onClick }) => {
    const isActive = pathname === href;
    return (
        <Link 
            href={href} 
            onClick={onClick}
            className={`
                relative text-lg font-medium transition-colors group 
                ${isActive 
                    ? "accent-yellow drop-shadow-md" 
                    : "text-white hover:text-yellow-400"
                }
            `}
        >
            {children}
            {/* Animated Underline */}
            <span
                className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-accent-yellow 
                    transition-transform duration-300 ease-out 
                    ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    transform origin-left
                `}
            />
        </Link>
    );
};

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    // Utility function to close the menu on link click
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="relative sticky top-0 z-50">
            {/* Background + overlay */}
            <div className="absolute inset-0 bg-marine-blue opacity-95" />
            <div className="absolute inset-0 bg-[url('/textures/waves.png')] opacity-10 mix-blend-overlay" />
            {/* Added a subtle blur effect for a professional 'frosted glass' look */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border-b border-white/10 shadow-lg" />

            <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
                
                {/* Logo */}
                <Link
                    href="/"
                    className="text-2xl tracking-wide font-extrabold text-white hover:text-yellow-400 transition-colors drop-shadow-lg flex-shrink-0"
                    onClick={handleLinkClick}
                >
                    SEA CAST <br/>
                    FISHING EQUIPMENTS
                </Link>

                {/* Search Input (Desktop) */}
                <div className="flex-1 hidden lg:block max-w-lg">
                    <SearchInput />
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navItems.map(item => (
                        <NavLink key={item.href} href={item.href} pathname={pathname}>
                            {item.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile/Tablet Menu Button */}
                <button
                    className="text-white lg:hidden p-2 rounded-lg hover:bg-marine-blue/50 transition"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                </button>
            </nav>

            {/* --- Mobile Off-Canvas Menu --- */}
            <div 
                className={`
                    fixed top-0 left-0 h-full w-full bg-marine-blue z-40 
                    transition-transform duration-500 ease-in-out lg:hidden
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                {/* Close Button & Logo (Replaced top bar) */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <Link
                        href="/"
                        className="text-3xl font-extrabold text-white"
                        onClick={handleLinkClick}
                    >
                        SEA CAST FISHING EQUIPMENTS
                    </Link>
                    <button
                        className="text-white p-2"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <X className="h-8 w-8 accent-yellow" />
                    </button>
                </div>
                
                <div className="p-6 space-y-8 flex flex-col">
                    {/* Search Input (Mobile) */}
                    <div className="w-full">
                        <SearchInput />
                    </div>

                    {/* Mobile Links */}
                    {navItems.map(item => (
                        <Link 
                            key={item.href} 
                            href={item.href} 
                            onClick={handleLinkClick}
                            className={`
                                 font-bold py-2 transition-colors 
                                ${pathname === item.href 
                                    ? "accent-yellow" 
                                    : "text-white hover:text-yellow-400/80"
                                }
                            `}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
            
        </header>
    );
}