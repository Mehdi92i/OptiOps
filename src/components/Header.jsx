import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
            <nav className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-green-600">Opti</span>
                    <span className="text-yellow-500">Ops</span>
                </Link>
                <div className="space-x-6 text-sm font-medium">
                    <Link href="/cv" className="text-gray-800 hover:text-green-600 transition-colors duration-150">CV</Link>
                    <Link href="/about" className="text-gray-800 hover:text-green-600 transition-colors duration-150">À propos</Link>
                    <Link href="/services" className="text-gray-800 hover:text-green-600 transition-colors duration-150">Services</Link>
                    <Link href="/contact" className="text-gray-800 hover:text-green-600 transition-colors duration-150">Contact</Link>
                </div>
            </nav>
        </header>
    );
}
