import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat, Volume2, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";

const PlaybackBar = () => {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 p-4 flex items-center justify-between h-24">
      <div className="flex items-center gap-4 w-1/4">
        <img src="https://via.placeholder.com/64" alt="Album Art" className="h-16 w-16 rounded" />
        <div>
          <p className="text-white font-medium">Song Title</p>
          <p className="text-neutral-400 text-sm">Artist Name</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-1/2">
        <div className="flex items-center gap-6 mb-2">
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Shuffle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-white text-black hover:scale-105">
            <Play className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <SkipForward className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Repeat className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full max-w-xl">
          <span className="text-xs text-neutral-400">0:00</span>
          <Slider defaultValue={[0]} max={100} step={1} className="w-full [&>span:first-child]:h-1 [&>span:first-child]:bg-neutral-700 [&>span>span]:bg-green-500 [&>span>span]:h-3 [&>span>span]:w-3" />
          <span className="text-xs text-neutral-400">3:45</span>
        </div>
      </div>

      <div className="flex items-center gap-4 w-1/4 justify-end">
        <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Volume2 className="h-5 w-5" />
          </Button>
          <Slider defaultValue={[70]} max={100} step={1} className="w-24 [&>span:first-child]:h-1 [&>span:first-child]:bg-neutral-700 [&>span>span]:bg-green-500 [&>span>span]:h-3 [&>span>span]:w-3" />
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Maximize2 className="h-5 w-5" />
          </Button>
      </div>
    </footer>
  );
};

export default PlaybackBar;
