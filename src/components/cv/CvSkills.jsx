export default function CvSkills() {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/30">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Compétences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Expertises fonctionnelles</h3>
                    <div className="flex flex-wrap gap-2">
                        {["📝 Tests manuels", "🔁 Tests E2E", "🔌 Tests API", "⚡ Tests de performance", "📈 Tests de charge"].map((skill, i) => (
                            <span key={i} className="flex items-center gap-1 bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-100 transition">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Méthodologies & CI</h3>
                    <div className="flex flex-wrap gap-2">
                        {["🔄 CI/CD", "🧬 QAOps", "🎨 Design System QA", "📅 Agilité"].map((skill, i) => (
                            <span key={i} className="flex items-center gap-1 bg-white text-gray-800 border border-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-100 transition">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}