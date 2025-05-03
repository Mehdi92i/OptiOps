'use client';

export default function About() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Arrière-plan dégradé sur toute la page */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#D70064] via-[#412761] to-[#002364]" />

            {/* Contenu principal flouté avec fond blanc semi-transparent */}
            <div className="w-full max-w-3xl mx-auto px-6 py-12">
                <div className="backdrop-blur-sm bg-white/80 border border-white/20 rounded-lg p-8 shadow-lg space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-center">
                        <span className="text-[#D70064]">À</span>
                        <span className="text-[#FFD700]"> propos</span>
                    </h1>
                    <p className="text-base md:text-lg text-center text-gray-700">
                        Chez <span className="font-bold text-[#D70064]">OptiOps</span>, nous combinons expertise en QA et Design System pour aider les entreprises à construire des produits fiables, accessibles et durables.
                    </p>
                </div>
            </div>
        </div>
    );
}
