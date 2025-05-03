export default function CvLeisure() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">Loisirs</h2>
                <p className="text-gray-700 text-center">Football, Jeux vidéos, Cinéma, Échecs, Astronomie.</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4 text-center">Centres d'intérêt</h2>
                <p className="text-gray-700 text-center">Innovation technologique, Accessibilité numérique, Développement durable.</p>
            </div>
        </div>
    );
}