'use client'

import { useState } from "react";

interface VideoPlayerProps {
    videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div style={{ paddingRight: "24px", background: "black", position: "relative" }}>
            <video
                src={videoUrl}
                autoPlay
                muted={isMuted}
                loop
                preload="auto"
                playsInline
                style={{
                    height: "100vh",
                    objectFit: "cover"
                }}
                id="background-video"
            />
            <button
                onClick={toggleMute}
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    padding: "10px",
                    background: "rgba(0,0,0,0.9)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
            >
                {isMuted ? "Unmute" : "Mute"}
            </button>
        </div>
    );
}