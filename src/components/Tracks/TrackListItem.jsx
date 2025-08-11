import Image from "next/image";
import { TableCell, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import placeholderTrackImg from '../../assets/images/track-img-placeholder.jpeg'


const TrackListItem = ({ track, trackIndex }) => {
    return (
        <TableRow>
            <TableCell className="hidden sm:table-cell">
                {trackIndex + 1}
            </TableCell>
            <TableCell className="hidden sm:table-cell">
                <Image
                    alt="Product image"
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={placeholderTrackImg}
                    width="64"
                />
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