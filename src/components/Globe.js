"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

export default function Globe({ className }) {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionStart = useRef(0);
  const activeRotation = useRef(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const parentWidth = canvasRef.current.parentElement.clientWidth;
        setSize(parentWidth || 224);
      }
    };
    
    updateSize();
    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    if (size === 0) return;

    let phi = 0;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 12000,
      mapBrightness: 6,
      baseColor: [1, 1, 1], // White dots
      markerColor: [0.18, 0.5, 0.86], // Brand sky blue markers
      glowColor: [0.18, 0.5, 0.86], // Brand sky blue glow
      markers: [
        { location: [28.61, 77.20], size: 0.06 }, // New Delhi
        { location: [19.07, 72.87], size: 0.05 }, // Mumbai
        { location: [12.97, 77.59], size: 0.06 }, // Bangalore
        { location: [13.08, 80.27], size: 0.05 }, // Chennai
        { location: [22.57, 88.36], size: 0.05 }, // Kolkata
        { location: [17.38, 78.48], size: 0.05 }, // Hyderabad
        { location: [23.02, 72.57], size: 0.04 }, // Ahmedabad
        { location: [26.84, 80.94], size: 0.04 }, // Lucknow
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005; // Auto rotate
        }
        state.phi = phi + activeRotation.current;
        state.width = size * 2;
        state.height = size * 2;
      },
    });

    return () => {
      globe.destroy();
    };
  }, [size]);

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        style={{
          width: size || 224,
          height: size || 224,
          maxWidth: "100%",
          aspectRatio: 1,
          cursor: "grab",
        }}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          pointerInteractionStart.current = activeRotation.current;
          canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current.style.cursor = "grab";
        }}
        onPointerMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            activeRotation.current = pointerInteractionStart.current + delta * 0.008;
          }
        }}
      />
    </div>
  );
}
