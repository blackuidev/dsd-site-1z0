import { Link } from "react-router-dom";
import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Sidebar = () => {
  const playlists = [
    "My Top Songs", "Workout Mix", "Chill Vibes", "Focus Music",
    "Road Trip", "Party Hits", "Acoustic Covers", "Indie Gems",
    "Classical Study", "Jazz Lounge", "Morning Coffee", "Evening Drive",
    "Summer Jams", "Winter Warmers", "Spring Awakening", "Autumn Leaves",
    "Deep Focus", "Coding Soundtrack", "Gaming Anthems", "Relax & Unwind",
    "Discover Weekly", "Release Radar"
  ];

  return (
    <aside className="w-64 bg-black p-4 flex flex-col border-r border-neutral-800">
      <div className="mb-6">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-green-500">
          <img src="/spotify-logo.png" alt="Spotify" className="h-8 w-8" />
          Spotify Clone
        </Link>
      </div>

      <nav className="flex flex-col gap-2 mb-6">
        <Link to="/">
          <Button variant="ghost" className="w-full justify-start text-lg text-neutral-300 hover:text-white">
            <Home className="mr-4 h-6 w-6" /> Home
          </Button>
        </Link>
        <Link to="/search">
          <Button variant="ghost" className="w-full justify-start text-lg text-neutral-300 hover:text-white">
            <Search className="mr-4 h-6 w-6" /> Search
          </Button>
        </Link>
        <Link to="/library">
          <Button variant="ghost" className="w-full justify-start text-lg text-neutral-300 hover:text-white">
            <Library className="mr-4 h-6 w-6" /> Your Library
          </Button>
        </Link>
      </nav>

      <div className="flex flex-col gap-2 mb-6">
        <Button variant="ghost" className="w-full justify-start text-lg text-neutral-300 hover:text-white">
          <Plus className="mr-4 h-6 w-6" /> Create Playlist
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg text-neutral-300 hover:text-white">
          <Heart className="mr-4 h-6 w-6" /> Liked Songs
        </Button>
      </div>

      <ScrollArea className="flex-grow pr-2">
        <div className="flex flex-col gap-2">
          {playlists.map((playlist, index) => (
            <Link to={`/playlist/${index}`} key={index}>
              <Button variant="ghost" className="w-full justify-start text-neutral-400 hover:text-white text-sm">
                {playlist}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-auto pt-4 border-t border-neutral-800">
        <Button variant="ghost" className="w-full justify-start gap-3 text-neutral-300 hover:text-white">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          John Doe
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
