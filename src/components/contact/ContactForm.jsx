export default function ContactForm() {
    return (
        <form
            action="https://formspree.io/f/TON_ID_FORMSPREE"
            method="POST"
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
                <label htmlFor="email" className="block text-sm font-medium text-yellow-800">Email* </label>
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
                className="bg-[#D70064] hover:bg-[#c10058] text-white font-bold py-2 px-6 rounded transition"
            >
                Envoyer
            </button>
        </form>
    );
}
