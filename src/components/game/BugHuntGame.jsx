import { useEffect, useState } from 'react';

const BugHuntGame = () => {
    const [isActive, setIsActive] = useState(false);
    const [bugs, setBugs] = useState([]);
    const [score, setScore] = useState(0);

    const toggleGame = () => {
        if (isActive) {
            setIsActive(false);
            setBugs([]);
        } else {
            setIsActive(true);
            setScore(0);
        }
    };

    const spawnBug = () => {
        const id = Math.random().toString(36).substring(7);
        const x = Math.random() * 90;
        const y = Math.random() * 90;
        const rotation = Math.random() * 360;
        setBugs((prev) => [...prev, { id, x, y, rotation }]);
        setTimeout(() => removeBug(id), 5000);
    };

    const removeBug = (id) => {
        setBugs((prev) => prev.filter((bug) => bug.id !== id));
    };

    const hitBug = (id) => {
        removeBug(id);
        setScore((s) => s + 1);
        const audio = new Audio('/sounds/squish.mp3');
        audio.play();
    };

    useEffect(() => {
        if (!isActive) return;
        const interval = setInterval(spawnBug, 800);
        const timeout = setTimeout(() => setIsActive(false), 30000);
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [isActive]);

    return (
        <div className="relative">
            <button
                onClick={toggleGame}
                className="bg-gradient-to-r from-pink-600 to-blue-900 text-white font-bold py-2 px-4 rounded-full shadow-xl hover:scale-105 transition"
            >
                {isActive ? 'Arrêter la chasse' : 'Chasser un bug 🐞'}
            </button>

            {isActive && (
                <div>
                    <div className="fixed top-4 right-4 text-white text-lg bg-black/70 px-3 py-1 rounded-full shadow-md">
                        Score : {score}
                    </div>

                    {bugs.map((bug) => (
                        <div
                            key={bug.id}
                            onClick={() => hitBug(bug.id)}
                            className="fixed cursor-pointer animate-pulse"
                            style={{
                                top: `${bug.y}vh`,
                                left: `${bug.x}vw`,
                                transform: `rotate(${bug.rotation}deg)`
                            }}
                        >
                            <span className="text-3xl">🐞</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BugHuntGame;
