'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-[#002364]">Opti</span>
                    <span className="text-[#D70064]">Ops</span>
                </Link>

                {/* On cache les liens de navigation si on est sur la Home */}
                {!isHome && (
                    <div className="space-x-6 text-sm font-medium">
                        <Link href="/about" className="text-gray-800 hover:text-green-600 transition-colors duration-150">À propos</Link>
                        <Link href="/cv" className="text-gray-800 hover:text-green-600 transition-colors duration-150">CV</Link>
                        <Link href="/contact" className="text-gray-800 hover:text-green-600 transition-colors duration-150">Contact</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}
