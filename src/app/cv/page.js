export default function Cv() {
    return (
        <div className="w-full max-w-5xl mx-auto p-8 space-y-8">

            {/* Phrase d'accroche + Titre principal */}
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-700">
                    Mon <span className="text-yellow-500">CV</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                    Découvrez mon parcours professionnel, mes compétences techniques et mes expériences à travers le monde.
                </p>
            </div>

            {/* Section Expériences professionnelles */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-8">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Expériences professionnelles</h2>

                {/* Poste Lead QA Skilleos détaillé */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">Lead QA – Skilleos</h3>
                    <p className="text-sm text-gray-600 mb-4">Juillet 2021 – 2023</p>

                    <div className="space-y-6">

                        {/* Bloc 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">👥</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Création et pilotage du pôle QA</h4>
                                <p className="text-gray-600">
                                    Recrutement, management d'équipe QA, rôle de référent qualité au sein des squads Agile.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🛠️</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Opérationnel QA</h4>
                                <p className="text-gray-600">
                                    Réalisation de tests fonctionnels manuels, maintenance et exécution des tests automatisés (web et mobile),
                                    élaboration de cas de test manuels, validation d'APIs, réalisation de tests de performance et de charge sur les environnements critiques.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">⚙️</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Stratégie qualité & Monitoring</h4>
                                <p className="text-gray-600">
                                    Définition de la stratégie qualité, suivi des environnements, création de jeux de données de test, reporting KPI.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 4 */}
                        <div className="flex items-start space-x-4">
                            <div className=" p-2 rounded">
                                <span className="text-yellow-600 text-2xl">📈</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Industrialisation des tests & Amélioration continue</h4>
                                <p className="text-gray-600">
                                    Mise en place et maintenance de tests manuels et automatisés (web & mobile), création de la bibliothèque de tests, intégration dans la CI/CD, amélioration continue des processus QA.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Projets majeurs */}
                    <div className="pt-6 space-y-2">
                        <p className="text-gray-700 font-semibold">Projets majeurs :</p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Validation de la migration du framework mobile Android/iOS</li>
                            <li>Structuration des processus QA</li>
                            <li>Industrialisation des tests en collaboration avec la team DevOps</li>
                        </ul>
                    </div>
                </div>
                {/* Autres expériences */}
                <div className="pt-4 border-t border-gray-200 space-y-2">
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Lead QA chez FlexyBeauty/Kiute (2018 - 2021)</li>
                        <li>QA Automation Engineer chez Aviva (2017 - 2018)</li>
                        <li>Chef de projet Test Junior chez AXA Banque (2015 - 2017)</li>
                    </ul>
                </div>
            </div>

            {/* Section Compétences */}
            <div className="bg-yellow-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Compétences</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Tests manuels, End-to-End, API, Performance</li>
                    <li>Automatisation Cypress, Selenium, Jest</li>
                    <li>CI/CD avec Bitbucket, GitHub Actions, CircleCI</li>
                    <li>Design System QA</li>
                </ul>
            </div>

            {/* Section Outils techniques */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Outils techniques</h2>
                <p className="text-gray-700">
                    Cypress, Selenium WebDriver, Jest, Katalon, Postman, GitHub, GitLab, JMeter, Retool.
                </p>
            </div>

            {/* Ligne Loisirs et Centres d'intérêt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Section Loisirs */}
                <div className="bg-yellow-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Loisirs</h2>
                    <p className="text-gray-700">
                        Football, Jeux vidéos, Cinéma, Échecs, Astronomie.
                    </p>
                </div>

                {/* Section Centres d'intérêt */}
                <div className="bg-yellow-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Centres d'intérêt</h2>
                    <p className="text-gray-700">
                        Innovation technologique, Accessibilité numérique, Développement durable.
                    </p>
                </div>

            </div>

            {/* Section Voyages */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Voyages</h2>
                <p className="text-gray-700">
                    Espagne, Maroc, Mexique, Jamaïque, USA, Grèce.
                </p>
            </div>

        </div>
    );
}
