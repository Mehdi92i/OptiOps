export default function Footer() {
    return (
        <footer className="bg-yellow-100 text-green-700 text-center py-4 mt-8">
            <p className="text-sm font-semibold">
                © {new Date().getFullYear()} OptiOps – Tous droits réservés
            </p>
        </footer>
    );
}
