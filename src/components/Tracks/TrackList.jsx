import React from 'react';
import { Table, TableBody, TableHead, TableHeader, TableRow } from "../ui/table";
import TrackListItem from './TrackListItem';

const TrackList = () => {
    const tracks = [
        { title: 'Track One', artist: 'Artist A', duration: '3:45' },
        { title: 'Track Two', artist: 'Artist B', duration: '4:20' },
        { title: 'Track Three', artist: 'Artist C', duration: '2:30' },
    ];
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                        #
                    </TableHead>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                    </TableHead>
                    <TableHead className=" text-xs text-[#ffffffb3] font-[500]">Title</TableHead>
                    <TableHead className="hidden md:table-cell text-xs text-[#ffffffb3] font-[500]">Artist</TableHead>
                    <TableHead className="hidden md:table-cell text-xs text-[#ffffffb3] font-[500]">
                        Album
                    </TableHead>
                    <TableHead className=" text-xs text-[#ffffffb3] font-[500]">Duration</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {tracks.map((track, index) => (
                    <TrackListItem key={index} track={track} trackIndex={index} />
                ))}
            </TableBody>
        </Table>
    );
};

export default TrackList;