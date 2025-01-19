import React, { useEffect, useState } from "react";

const Fireworks: React.FC = () => {
  const [fireworks, setFireworks] = useState<
    { id: number; left: number; top: number }[]
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFireworks((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          top: Math.random() * 80,
        },
      ]);

      setFireworks((prev) => prev.filter((fw) => Date.now() - fw.id < 2000));
    }, 500);

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
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: "1",
      }}
    >
      {fireworks.map((fw) => (
        <div
          key={fw.id}
          style={{
            position: "absolute",
            left: `${fw.left}%`,
            top: `${fw.top}%`,
            width: "10px",
            height: "10px",
            backgroundColor: "transparent",
            borderRadius: "50%",
            animation: "explode 1.5s ease-out",
          }}
        >
          <div
            style={{
              width: "50px",
              height: "50px",
              background: "radial-gradient(circle, #ff0000, transparent)",
              position: "absolute",
              borderRadius: "50%",
              animation: "expand 1.5s ease-out",
            }}
          />
        </div>
      ))}
      <style>{`
                @keyframes explode {
                    0% {
                        transform: scale(0.2);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(3);
                        opacity: 0;
                    }
                }
                @keyframes expand {
                    0% {
                        transform: scale(0.5);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `}</style>
    </div>
  );
};

export default Fireworks;
