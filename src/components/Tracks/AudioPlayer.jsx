"use client";

import { usePlayer } from "@/contexts/PlayerContext";
import { useEffect, useRef } from "react";
import H5AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function AudioPlayer() {
    const { currentTrack, togglePlay } = usePlayer();
    const playerRef = useRef();

    // Sync context playing state with the player
    useEffect(() => {
        if (!playerRef.current) return;

        if (currentTrack.playing) {
            playerRef.current.audio.current.play().catch(e => console.log("Play error:", e));
        } else {
            playerRef.current.audio.current.pause();
        }
    }, [currentTrack.playing, currentTrack.url]);

    if (!currentTrack.url) return null;

    return (
        <div
            className="fixed bottom-0 z-50 w-full md:left-[var(--sidebar-width)] md:w-[calc(100%-var(--sidebar-width))]"
        >
            <H5AudioPlayer
                ref={playerRef}
                src={currentTrack.url}
                showJumpControls={false}
                onPlay={() => console.log("Playing:", currentTrack.title)}
                onPause={()=> togglePlay()}
                autoPlay={currentTrack.playing}
                className="rounded-lg bg-[#171717] text-white"
                progressBarClassName="h-1 bg-green-500"
                volumeControlsClassName="text-white"
                mainControlsClassName="gap-3"
            />
        </div>
    );
}
