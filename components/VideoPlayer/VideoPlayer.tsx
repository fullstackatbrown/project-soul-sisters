'use client'

import { useState } from "react";
import {Volume2, VolumeOff} from 'lucide-react';

interface VideoPlayerProps {
    videoUrl: string;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    return (
        <div style={{ paddingLeft: "3.2vh", paddingRight: "3.2vh", background: "black", position: "relative" }}>
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
                    bottom: "4vh",
                    right: "4vh",
                    // padding: "10px",
                    // background: "rgba(0,0,0,0.9)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer"
                }}
            >
                {isMuted ? <VolumeOff size={24} /> : <Volume2 size={24}/>}
            </button>
        </div>
    );
}