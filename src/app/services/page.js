export default function Services() {
    return (
        <>
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
                <span className="text-green-600">Nos</span><span className="text-yellow-500"> services</span>
            </h1>
            <ul className="text-base md:text-lg list-disc list-inside text-yellow-700 max-w-md space-y-2">
                <li>Stratégie et organisation QA sur mesure</li>
                <li>Automatisation de tests (E2E, API, Performance)</li>
                <li>Création et évolution de Design Systems</li>
            </ul>
        </>
    );
}
