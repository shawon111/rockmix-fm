import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function PlayListActiondropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-[15px] rounded-3xl min-w-[120px] h-[40px] px-4 py-0 cursor-pointer" variant="outline">More</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel className="font-[500] text-base">Rock On</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>
            Delete
          </DropdownMenuItem>
          <DropdownMenuItem>
            Collaborative Playlist
          </DropdownMenuItem>
          <DropdownMenuItem>
            Make Private
          </DropdownMenuItem>
          <DropdownMenuItem>
            Copy Link
          </DropdownMenuItem>
          <DropdownMenuItem>
            Share
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
