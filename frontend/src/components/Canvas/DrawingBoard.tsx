import React, { useRef, useEffect } from "react";

const DrawingBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (ctx) {
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
      }
    }
  }, []);

  const startDrawing = () => {
    isDrawing.current = true;
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const draw = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!isDrawing.current || !ctx || !canvas) return;

    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      style={{ border: "1px solid black", display: "block" }}
    />
  );
};

export default DrawingBoard;
