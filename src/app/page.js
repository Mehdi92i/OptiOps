export default function Home() {
    return (
        <>
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
                Bienvenue chez{' '}
                <span>
          <span className="text-green-600">Opti</span>
          <span className="text-yellow-500">Ops</span>
        </span>
            </h1>
            <p className="text-base md:text-lg text-center max-w-md text-yellow-700">
                Experts en optimisation QA pour vos projets numériques.
            </p>
        </>
    );
}
