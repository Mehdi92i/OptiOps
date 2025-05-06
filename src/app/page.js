export const metadata = {
    title: 'OptiOps – Optimisation QA',
    description:
        'Structuration qualité, stratégie QA, automatisation de test, intégration continue.',
    keywords: [
        'QA',
        'Quality Assurance',
        'Cypress',
        'Next.js',
        'Automation',
        'Freelance QA',
        'DevOps',
    ],
};

import Link from 'next/link';

export default function Home() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Fond dégradé comme le CV */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#D70064] via-[#412761] to-[#002364]" />

            <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 py-20 flex flex-col items-center space-y-16">
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-lg p-10 text-center space-y-6 max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Structurer la qualité. <br />
                        Accélérer le delivery.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700">
                        Bienvenue chez <span className="text-[#002364]">Opti</span>
                        <span className="text-[#D70064]">Ops</span>, un accompagnement
                        freelance sur-mesure en qualité logicielle.
                    </p>

                    <p className="italic text-gray-800 mt-4 text-center">
                        ➜ Vous voulez fiabiliser vos livraisons et gagner en sérénité ?
                        Contactez-moi.
                    </p>
                </div>

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl px-4">
                    <div className="bg-white/90 text-[#D70064] rounded-2xl p-6 shadow-lg text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
                        <span className="text-4xl mb-2">🎯</span>
                        <h3 className="font-bold text-lg">Stratégie QA</h3>
                        <p className="text-sm text-gray-700 mt-1">Alignée produit & delivery</p>
                    </div>

                    <div className="bg-white/90 text-[#412761] rounded-2xl p-6 shadow-lg text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
                        <span className="text-4xl mb-2">🧪</span>
                        <h3 className="font-bold text-lg">Tests automatisés</h3>
                        <p className="text-sm text-gray-700 mt-1">E2E, API, Performance</p>
                    </div>

                    <div className="bg-white/90 text-[#002364] rounded-2xl p-6 shadow-lg text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
                        <span className="text-4xl mb-2">⚙️</span>
                        <h3 className="font-bold text-lg">CI/CD & QAOps</h3>
                        <p className="text-sm text-gray-700 mt-1">Intégration continue</p>
                    </div>

                    <div className="bg-white/90 text-[#D70064] rounded-2xl p-6 shadow-lg text-center flex flex-col items-center hover:scale-105 transition-transform duration-300">
                        <span className="text-4xl mb-2">🤝</span>
                        <h3 className="font-bold text-lg">Accompagnement</h3>
                        <p className="text-sm text-gray-700 mt-1">Audit, support, coaching</p>
                    </div>
                </section>


                {/* CTA */}
                <div className="flex flex-wrap justify-center gap-6">
                    <Link
                        href="/about"
                        className="bg-white/80 text-[#412761] font-semibold px-6 py-3 rounded shadow-md hover:bg-white transition"
                    >
                        En savoir plus
                    </Link>
                    <Link
                        href="/cv"
                        className="bg-[#D70064] text-white font-semibold px-6 py-3 rounded shadow-md hover:bg-[#c10058] transition"
                    >
                        Voir mon CV
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-white/80 text-[#002364] font-semibold px-6 py-3 rounded shadow-md hover:bg-white transition"
                    >
                        Me contacter
                    </Link>
                </div>
            </div>
        </div>
    );
}
