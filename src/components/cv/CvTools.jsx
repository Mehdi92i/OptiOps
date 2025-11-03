export default function CvTools() {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/30">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Outils techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Frameworks & Languages</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "🧪 Cypress",
                            "🧰 Katalon",
                            "📈 K6",
                            "💻 JavaScript",
                            "📘 TypeScript",
                            "🐍 Python",
                            "🐚 Bash / Shell",
                            "🐳 Dockerfile"
                        ].map((tool, i) => (
                            <span key={i} className="flex items-center gap-1 text-gray-800 border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Logiciels</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "📮 Postman",
                            "🐙 GitHub",
                            "🦊 GitLab",
                            "🧱 Bitbucket",
                            "📊 JMeter",
                            "📋 Jira",
                            "📌 Trello",
                            "🐳 Docker",
                            "💠 Aqua",
                            "🌐 WebStorm"
                        ].map((tool, i) => (
                            <span key={i} className="flex items-center gap-1 text-gray-800 border border-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
