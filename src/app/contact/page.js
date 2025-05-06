import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Fond dégradé harmonisé */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#D70064] via-[#412761] to-[#002364]" />

            <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 py-20 flex flex-col items-center space-y-16">
                {/* Bloc titre + accroche */}
                <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-lg p-10 text-center space-y-6 max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        <span className="text-[#002364]">Envie de</span>{' '}
                        <span className="text-[#D70064]">collaborer</span> ?
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700">
                        Que ce soit pour un accompagnement QA, un audit, ou une mission courte, je suis à votre écoute. Parlons qualité, efficacité et livraisons sereines.
                    </p>
                </div>

                {/* Formulaire centré dans un bloc harmonisé */}
                <div className="w-full flex justify-center">
                    <div className="bg-white/90 backdrop-blur-sm border border-white/30 shadow-lg rounded-lg p-10 w-full max-w-xl">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
