import React, { useEffect, useState } from "react";

const Snowfall: React.FC = () => {
  const [flakes, setFlakes] = useState<{ id: number; left: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlakes((prev) => [
        ...prev,
        { id: Date.now(), left: Math.random() * 100 },
      ]);

      setFlakes((prev) => prev.filter((flake) => Date.now() - flake.id < 5000));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {flakes.map((flake) => (
        <div
          key={flake.id}
          style={{
            position: "absolute",
            top: "-5vh",
            left: `${flake.left}%`,
            fontSize: "1.5rem",
            animation: "fall 5s linear forwards",
          }}
        >
          ❄️
        </div>
      ))}
      <style>{`
                @keyframes fall {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(100vh);
                    }
                }
            `}</style>
    </div>
  );
};

export default Snowfall;
