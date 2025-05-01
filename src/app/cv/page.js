export default function Cv() {
    return (
        <div className="w-full max-w-5xl mx-auto p-8 space-y-8">

            {/* Phrase d'accroche + Titre principal */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight">
                    Mon <span className="text-yellow-500">Expertise QA</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                    Un parcours de plus de 10 ans dans la qualité logicielle, entre exigence technique, vision stratégique et leadership opérationnel.
                </p>
            </div>


            {/* Bloc introductif */}
            <div className="text-gray-700 text-base md:text-lg space-y-4">
                <p>
                    Fort de plus de 10 ans d&#39;expérience en qualité logicielle, j’ai développé une expertise complète sur les tests Web, Mobile, aussi bien en manuel qu’en automatisé.
                </p>
                <p>
                    Après avoir débuté en tant que QA Engineer, j’ai évolué vers des postes de Lead QA et Manager. Cette trajectoire m’a permis d’encadrer des équipes tout en conservant une forte implication opérationnelle.
                </p>
                <p>
                    Je suis convaincu qu’un leadership efficace repose sur une véritable maîtrise du métier. C’est pourquoi je mêle au quotidien vision stratégique et ancrage technique.
                </p>
                <p>
                    Je me suis également spécialisé dans le QAOps : l’intégration des tests dans les chaînes CI/CD pour renforcer la fiabilité, la rapidité et la fluidité du delivery.
                </p>
            </div>

            {/*trait plus fort et stylisé séparateur*/}
            <div>
                <hr className="border-t-2 border-yellow-500 w-80 mx-auto rounded-full my-8" />
            </div>

            {/* Titre centré */}
            <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Expériences professionnelles</h2>
            </div>

            {/* Contenu des expériences */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-8">

                {/* Poste Chapter Lead QA – MEDIN+ */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">Chapter Lead QA – MEDIN+</h3>
                    <p className="text-sm text-gray-600 mb-4">Depuis Novembre 2023</p>
                    <div className="space-y-6">

                        {/* Bloc 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🧩</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Leadership & coordination transverse</h4>
                                <p className="text-gray-600">
                                    Animation du Chapter QA, accompagnement des testeurs, participation aux comités stratégiques. Collaboration transverse avec les squads produit, IT, sécurité et CTO.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">📘</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Définition & diffusion des bonnes pratiques</h4>
                                <p className="text-gray-600">
                                    Mise en place de la stratégie de tests, harmonisation des pratiques QA, documentation des process, veille technologique continue.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🚀</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Support aux équipes & accompagnement au changement</h4>
                                <p className="text-gray-600">
                                    Conseil aux développeurs et PO, collaboration étroite avec les autres chapter leads pour faire évoluer les méthodes, intégration des tests dans les outils CI/CD.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 4 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🎯</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Montée en compétence & recrutement</h4>
                                <p className="text-gray-600">
                                    Suivi des performances, définition des objectifs individuels, coaching, recrutement et onboarding des QA.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="border-t-4 border-yellow-500 w-64 mx-auto rounded-full my-12" />
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
                                    Recrutement, management d&#39;équipe QA, rôle de référent qualité au sein des squads Agile.
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
                                    élaboration de cas de test manuels, validation d&#39;APIs, réalisation de tests de performance et de charge sur les environnements critiques.
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

                    {/* Bloc 5 - Projets majeurs */}
                    <div className="flex items-start space-x-4">
                        <div className="p-2 rounded">
                            <span className="text-yellow-600 text-2xl">🚀</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700">Projets majeurs</h4>
                            <p className="text-gray-600">
                                Validation de la migration du framework mobile Android/iOS, structuration des processus QA et
                                industrialisation des tests en collaboration avec la team DevOps.
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="border-t-4 border-yellow-500 w-64 mx-auto rounded-full my-12" />
                {/* Poste Lead QA FlexyBeauty/Kiute détaillé */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">Lead QA – FlexyBeauty/Kiute</h3>
                    <p className="text-sm text-gray-600 mb-4">Décembre 2018 – Juillet 2021</p>
                    <div className="space-y-6">

                        {/* Bloc 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">👥</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Création et pilotage du pôle QA</h4>
                                <p className="text-gray-600">
                                    Recrutement, management de l&#39;équipe QA et de la team support 2, rôle de référent qualité au sein des équipes Agile.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">📊</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Stratégie de test & monitoring</h4>
                                <p className="text-gray-600">
                                    Mise en place de la stratégie de tests manuels, architecture des tests automatisés (web, mobile), suivi des environnements, préparation des jeux de données, remontée et analyse des bugs, reporting KPI.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🛠️</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Automatisation & QAOps</h4>
                                <p className="text-gray-600">
                                    Réalisation de POCs, scripts de tests API & e2e, tests de charge & performance, intégration des tests dans la CI/CD, création du référentiel de tests.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 4 - Projets majeurs */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🚀</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Projets majeurs</h4>
                                <p className="text-gray-600">
                                    Partenariat Google : validation de « Reserve with Google », industrialisation des tests avec la team Infra, acculturation QA, validation de l&#39;app mobile iOS.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="border-t-4 border-yellow-500 w-64 mx-auto rounded-full my-12" />
                {/* Poste QA Test Automation Engineer – Aviva */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">QA Test Automation Engineer – Aviva</h3>
                    <p className="text-sm text-gray-600 mb-4">Septembre 2017 – Novembre 2018</p>
                    <div className="space-y-6">

                        {/* Bloc 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🧠</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Référent technique & stratégie de tests</h4>
                                <p className="text-gray-600">
                                    Conception des architectures et des stratégies de tests, référent technique au sein de l’équipe QA, chiffrage et planification des campagnes de test.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🧪</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Automatisation & maintenance des tests</h4>
                                <p className="text-gray-600">
                                    Automatisation des tests e2e pour produits web et AS400, maintenance des tests automatisés sous UFT (VBA), automatisation des régressions.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🔍</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Analyse & amélioration continue</h4>
                                <p className="text-gray-600">
                                    Remontée et analyse des anomalies, réalisation de POCs sur la faisabilité des tests.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 4 - Projets majeurs */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🚀</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Projets majeurs</h4>
                                <p className="text-gray-600">
                                    NMRH Eurofil, ASK IT Never, TRA (Tierce Recette Applicative).
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <hr className="border-t-4 border-yellow-500 w-64 mx-auto rounded-full my-12" />
                {/* Poste Chef de projet Test Junior – AXA Banque */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800">Chef de projet Test Junior – AXA Banque</h3>
                    <p className="text-sm text-gray-600 mb-4">Septembre 2015 – Septembre 2017</p>
                    <div className="space-y-6">

                        {/* Bloc 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🧪</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Automatisation & stratégie de test</h4>
                                <p className="text-gray-600">
                                    Études de faisabilité via POC, choix des technologies de test, mise en place d’un projet d’automatisation des tests Web, mobile et API.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">📊</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Performance & pilotage</h4>
                                <p className="text-gray-600">
                                    Estimation de charges, réalisation de tests de charge et de performance, reporting régulier, indicateurs qualité (KPI), application de la méthode RACI.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🔁</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">CI/CD & industrialisation</h4>
                                <p className="text-gray-600">
                                    Mise en place des tests automatisés dans la chaîne CI/CD pour améliorer la réactivité et la stabilité des livraisons.
                                </p>
                            </div>
                        </div>

                        {/* Bloc 4 - Projets majeurs */}
                        <div className="flex items-start space-x-4">
                            <div className="p-2 rounded">
                                <span className="text-yellow-600 text-2xl">🚀</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-700">Projets majeurs</h4>
                                <p className="text-gray-600">
                                    AUTO’TEST, AXIMMO, migration des services EIP.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/*trait plus fort et stylisé séparateur*/}
            <div>
                <hr className="border-t-2 border-yellow-500 w-80 mx-auto rounded-full my-8" />
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

            {/*trait plus fort et stylisé séparateur*/}
            <div>
                <hr className="border-t-2 border-yellow-500 w-80 mx-auto rounded-full my-8" />
            </div>

            {/* Section Outils techniques */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-yellow-500 mb-4">Outils techniques</h2>
                <p className="text-gray-700">
                    Cypress, Selenium WebDriver, Jest, Katalon, Postman, GitHub, GitLab, JMeter, Retool.
                </p>
            </div>

            {/*trait plus fort et stylisé séparateur*/}
            <div>
                <hr className="border-t-2 border-yellow-500 w-80 mx-auto rounded-full my-8" />
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
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Centres d&#39;intérêt</h2>
                    <p className="text-gray-700">
                        Innovation technologique, Accessibilité numérique, Développement durable.
                    </p>
                </div>

            </div>

            {/*trait plus fort et stylisé séparateur*/}
            <div>
                <hr className="border-t-2 border-yellow-500 w-80 mx-auto rounded-full my-8" />
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
