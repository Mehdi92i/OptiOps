import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-yellow-50 shadow-md">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-2xl font-bold">
                    <span className="text-green-600">Opti</span>
                    <span className="text-yellow-500">Ops</span>
                </Link>
                <div className="space-x-6">
                    <Link href="/cv" className="text-gray-700 hover:text-green-600">CV</Link>
                    <Link href="/about" className="text-gray-700 hover:text-green-600">À propos</Link>
                    <Link href="/services" className="text-gray-700 hover:text-green-600">Services</Link>
                    <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
                </div>
            </nav>
        </header>
    );
}
