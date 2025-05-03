export default function CvTools() {
    return (
        <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Outils techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Frameworks & Librairies</h3>
                    <div className="flex flex-wrap gap-2">
                        {["🧪 Cypress", "🧭 Selenium WebDriver", "📦 Jest", "🧰 Katalon"].map((tool, i) => (
                            <span key={i} className="flex items-center gap-1 bg-yellow-50 text-gray-800 border border-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-100 transition">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Logiciels & Plateformes</h3>
                    <div className="flex flex-wrap gap-2">
                        {["📮 Postman", "🐙 GitHub", "🦊 GitLab", "📊 JMeter", "🔧 Retool"].map((tool, i) => (
                            <span key={i} className="flex items-center gap-1 bg-yellow-50 text-gray-800 border border-gray-200 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-100 transition">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}