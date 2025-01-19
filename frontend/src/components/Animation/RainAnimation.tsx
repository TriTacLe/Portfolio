import React, { useEffect, useState } from "react";

const EmojiRain: React.FC = () => {
  const [emojis, setEmojis] = useState<
    { id: number; emoji: string; left: number; top: number }[]
  >([]);
  const emojiOptions = ["🌸", "🌼", "🌟", "🍕", "🎃", "🎉", "🦋", "❄️"];

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojis((prev) => [
        ...prev,
        {
          id: Date.now(),
          emoji: emojiOptions[Math.floor(Math.random() * emojiOptions.length)],
          left: Math.random() * 100,
          top: -10,
        },
      ]);

      setEmojis((prev) =>
        prev.filter((emoji) => emoji.top < window.innerHeight + 50)
      );
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
        pointerEvents: "none",
        overflow: "hidden",
        zIndex: "1",
      }}
    >
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          style={{
            position: "absolute",
            top: `${emoji.top}vh`,
            left: `${emoji.left}%`,
            fontSize: "2rem",
            animation: "fall 5s linear forwards",
          }}
        >
          {emoji.emoji}
        </div>
      ))}
      <style>{`
                @keyframes fall {
                    0% {
                        transform: translateY(0);
                    }
                    100% {
                        transform: translateY(110vh);
                    }
                }
            `}</style>
    </div>
  );
};

export default EmojiRain;
