export default function CvIntro() {
    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/30">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 tracking-tight text-center">
                Curriculum <span className="text-[#D70064]">Vitae</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Un parcours de plus de 10 ans dans la qualité logicielle, entre exigence technique, vision stratégique et leadership opérationnel.
            </p>

            <div className="mt-8 text-center">
                <a
                    href="/documents/CV_Mehdi_072025.pdf"
                    download
                    className="inline-flex items-center gap-2 bg-[#D70064] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#b00050] transition-colors duration-300"
                >
                    <span>📄</span>
                    <span>Télécharger mon CV (PDF)</span>
                </a>
            </div>
        </div>
    );
}
