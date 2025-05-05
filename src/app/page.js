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

            <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 py-20 flex flex-col items-center space-y-12">
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-lg p-10 text-center space-y-6 max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Bienvenue chez <span className="text-[#002364]">Opti</span>
                        <span className="text-[#D70064]">Ops</span>
                    </h1>

                    <div className="space-y-4 text-gray-700 text-base md:text-lg">
                        <p>
                            Vous développez des produits ambitieux ? Je vous aide à mettre en
                            place une démarche qualité solide, efficace et adaptée à votre
                            rythme de delivery.
                        </p>
                        <p>
                            Fort de plus de 10 ans d’expérience, je conçois des stratégies QA
                            sur mesure, j’automatise les tests (E2E, API, performance) et
                            j’intègre la qualité dans vos chaînes CI/CD.
                        </p>
                        <p>
                            Objectif : des livraisons fiables, des équipes responsabilisées,
                            et des retours utilisateurs sereins.
                        </p>
                        <p className="italic text-gray-800 mt-4">
                            ➜ Vous voulez structurer votre QA ou sécuriser votre delivery ?
                            Parlons-en.
                        </p>
                    </div>
                </div>

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
