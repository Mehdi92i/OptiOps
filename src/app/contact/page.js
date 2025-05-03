'use client';

import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
    return (
        <div className="relative w-full min-h-screen">
            {/* Arrière-plan CV-style */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#D70064] via-[#412761] to-[#002364]" />

            <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 py-20">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                    <span className="text-yellow-300">Contactez</span><span className="text-white">-moi</span>
                </h1>

                {/* Phrase d'accroche */}
                <p className="text-center text-yellow-100 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                    🔧 N’attends plus ! Si tu veux découvrir comment je travaille, ou comment je peux améliorer la qualité de ta structure ou optimiser tes projets, je suis à ton écoute.
                </p>

                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
