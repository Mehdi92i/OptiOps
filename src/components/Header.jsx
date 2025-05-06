'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Accueil' },
        { href: '/services', label: 'Mes Services' },
        { href: '/cv', label: 'CV' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-[#002364]">Opti</span>
                    <span className="text-[#D70064]">Ops</span>
                </Link>

                <div className="flex gap-3 text-sm font-semibold">
                    {links
                        .filter(link => link.href !== pathname)
                        .map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-lg bg-transparent hover:bg-[#fce4ec] text-[#002364] hover:text-[#D70064] transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                </div>
            </nav>
        </header>
    );
}
