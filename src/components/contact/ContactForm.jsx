'use client';

import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const data = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                toast.success('📬 Message envoyé avec succès !');
                form.reset();
            } else {
                toast.error('❌ Une erreur est survenue.');
            }
        } catch (err) {
            toast.error('❌ Impossible d’envoyer le message.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white/90 backdrop-blur-md border border-white/30 shadow-lg rounded-lg p-8 space-y-6"
            >
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-yellow-800">Nom*</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded px-4 py-2 bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-yellow-800">Email*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded px-4 py-2 bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-yellow-800">Message*</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="w-full rounded px-4 py-2 bg-white/80 text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#D70064] hover:bg-[#c10058] text-white font-bold py-2 px-6 rounded transition disabled:opacity-50"
                >
                    {isSubmitting ? 'Envoi...' : 'Envoyer'}
                </button>
            </form>

            {/* Container du toast */}
            <ToastContainer
                position="bottom-center"
                autoClose={4000}
                hideProgressBar={false}
                closeButton={false}
                pauseOnFocusLoss={false}
                pauseOnHover={false}
                draggable={false}
            />
        </>
    );
}
