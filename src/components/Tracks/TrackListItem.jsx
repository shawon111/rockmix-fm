"use client"

import Image from "next/image";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import placeholderTrackImg from '../../assets/images/track-img-placeholder.jpeg'
import { usePlayer } from "@/contexts/PlayerContext";
import { PlayCircle } from "lucide-react";


const TrackListItem = ({ track, trackIndex }) => {
    const { playTrack } = usePlayer();
    return (
        <TableRow>
            <TableCell className="hidden sm:table-cell">
                {trackIndex + 1}
            </TableCell>
            <TableCell className="hidden sm:table-cell relative">
                <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={placeholderTrackImg}
                    width="64"
                />
                <PlayCircle onClick={() => playTrack("https://res.cloudinary.com/dijifnaou/video/upload/v1755097593/cinematic-hip-hop-vlog-music-349853_qjs353.mp3",
                    "Sample Track 1")} className="absolute top-[30px] left-[28px] cursor-pointer text-white hover:text-green-500" size={26} />
            </TableCell>
            <TableCell className="font-medium text-sm">
                The power of love
            </TableCell>
            <TableCell className="hidden sm:table-cell text-sm">Huey Lewis</TableCell>
            <TableCell className="hidden sm:table-cell text-sm">

            </TableCell>
            <TableCell>
                <Badge className=" text-sm" variant="outline">2:05</Badge>
            </TableCell>
        </TableRow>
    );
};

export default TrackListItem;