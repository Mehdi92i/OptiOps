export default function Contact() {
    return (
        <>
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
                <span className="text-green-600">Contactez</span><span className="text-yellow-500">-nous</span>
            </h1>

            <form
                action="https://formspree.io/f/TON_ID_FORMSPREE"
                method="POST"
                className="flex flex-col space-y-4 w-full max-w-md bg-white p-6 rounded shadow-md"
            >
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-sm font-semibold mb-1 text-gray-700">Nom :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold mb-1 text-gray-700">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-semibold mb-1 text-gray-700">Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-yellow-50 font-bold py-2 px-4 rounded hover:bg-green-700 transition"
                >
                    Envoyer
                </button>
            </form>
        </>
    );
}
