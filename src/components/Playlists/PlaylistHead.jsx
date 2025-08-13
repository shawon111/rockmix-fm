import Image from "next/image";
import playlistPlaceholderImg from '../../assets/images/playlistDemo.jpg';
import rockMixLogo from '../../assets/images/rockmix-user-avatar.png'
import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { PlayListActiondropdown } from "./PlayListActionDroipdown";

const PlaylistHead = () => {
    return (
        <div>
            <div className="flex gap-8">
                <div className="w-[265px] h-[265px]">
                    <Image
                        src={playlistPlaceholderImg}
                        alt="Playlist Image"
                        className="rounded object-cover w-full h-full"
                    />
                </div>
                <div>
                    <h2 className="text-[32px] font-[500] leading-[46px]">Rock On</h2>
                    <div className="flex items-center gap-2 mt-2 mb-5">
                        <Image
                            src={rockMixLogo}
                            alt="RockMixFM Logo"
                            width={28}
                            height={28}
                        />
                        <h4 className="text-sm leading-[20px]">RockMixFM</h4>
                    </div>
                    <div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-[17px] leading-[24px] font-[500]">Start Creating your Own Playlist!! Follow us On Facebook</p>
                        <div className="flex items-center gap-2">
                            <div className="text-gray-600 dark:text-gray-400 text-sm leading-[20px]">1 tracks</div>
                            <div className="w-[3px] h-[3px] bg-gray-500 rounded-full"></div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm leading-[20px]">3hr 46min</div>
                            <div className="w-[3px] h-[3px] bg-gray-500 rounded-full"></div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm leading-[20px]">Collaborative</div>
                        </div>
                    </div>
                    <div className="mt-7 flex items-center gap-4">
                        <Button className="bg-[#689f38] hover:bg-[#689f38] text-white text-[15px] rounded-3xl min-w-[120px] h-[40px] px-4 py-0 flex items-center gap-2 cursor-pointer">
                            <Play color="#fff" size={16} />
                            <span>Play</span>
                        </Button>
                        <PlayListActiondropdown />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaylistHead;