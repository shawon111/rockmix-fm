"use client"

import Image from "next/image";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { usePlayer } from "@/contexts/PlayerContext";
import { AudioLines, Pause, PlayCircle } from "lucide-react";
import { convertDuration } from "@/lib/convertDuration";
import Equalizer from "../Global/Equalizer";


const TrackListItem = ({ track, trackIndex }) => {
    // track states
    const { playTrack, currentTrack, togglePlay} = usePlayer();
    // handle plaing track
    const handlePlayTrack = () => {
        playTrack(`https://rockmixfm.com/${track?.url}`, track?.name, track?._id)
    }
    return (
        <TableRow>
            <TableCell className="hidden sm:table-cell">
                {trackIndex + 1}
            </TableCell>
            <TableCell className="relative">
                <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={`https://rockmixfm.com/${track?.image}`}
                    width="64"
                />
                {/*dark image overlay */}
                <div className="aspect-square rounded-md object-cover bg-[#00000080] w-[64px] absolute top-[8px] left-[8px]"></div>
                {/* render icons by state */}
                {
                    (track?._id === currentTrack?.id && currentTrack.playing === true) ? 
                    <Equalizer /> : 
                    (track?._id === currentTrack?.id && currentTrack.playing === false) ? 
                    <Pause onClick={()=> togglePlay()} className="absolute top-[30px] left-[28px] cursor-pointer text-white hover:text-green-500" size={26} /> : 
                    <PlayCircle onClick={() => handlePlayTrack()} className="absolute top-[30px] left-[28px] cursor-pointer text-white hover:text-green-500" size={26} />
                }

            </TableCell>
            <TableCell onClick={() => handlePlayTrack()} className={`${(track?._id === currentTrack?.id) && "text-green-500"} font-medium text-sm cursor-pointer`}>
                {track?.name}
            </TableCell>
            <TableCell className="hidden sm:table-cell text-sm">
                {
                    track?.artists.length >= 1 && track?.artists[0].name
                }
            </TableCell>
            <TableCell className="hidden sm:table-cell text-sm">

            </TableCell>
            <TableCell>
                <Badge className=" text-sm" variant="outline">
                    {
                        convertDuration(track?.duration)
                    }
                </Badge>
            </TableCell>
        </TableRow>
    );
};

export default TrackListItem;