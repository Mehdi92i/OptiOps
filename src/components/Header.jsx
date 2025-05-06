'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BugHuntGame from '@/components/game/BugHuntGame';

export default function Header() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Accueil' },
        { href: '/services', label: 'Mes Services' },
        { href: '/cv', label: 'CV' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
            <div className="max-w-screen-xl mx-auto">
                <nav className="flex items-center justify-between px-6 py-4">
                    {/* Bloc logo */}
                    <Link href="/" className="text-2xl font-bold">
                        <span className="text-[#002364]">Opti</span>
                        <span className="text-[#D70064]">Ops</span>
                    </Link>

                    {/* Bloc bouton + liens */}
                    <div className="flex items-center gap-6">
                        {/* Bouton jeu */}
                        <BugHuntGame />

                        {/* Liens à droite */}
                        <div className="flex gap-3 items-center text-sm font-semibold">
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
                    </div>
                </nav>
            </div>
        </header>




    );
}
