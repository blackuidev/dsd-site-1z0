import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { List, Grid, ArrowDownUp } from "lucide-react";

const LibraryPage = () => {
  const libraryItems = [
    { type: "Playlist", title: "Liked Songs", count: "1,234 songs", image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Liked" },
    { type: "Playlist", title: "My Top Songs", count: "50 songs", image: "https://via.placeholder.com/150/00FF00/FFFFFF?text=Top" },
    { type: "Artist", title: "Artist Name 1", count: "Artist", image: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Artist1" },
    { type: "Album", title: "Album Title 1", count: "Artist Name 2", image: "https://via.placeholder.com/150/FFFF00/000000?text=Album1" },
    { type: "Playlist", title: "Workout Mix", count: "75 songs", image: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Workout" },
    { type: "Podcast", title: "Podcast Name", count: "Show", image: "https://via.placeholder.com/150/00FFFF/000000?text=Podcast" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-6">Your Library</h1>

      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          <Button variant="secondary" className="rounded-full bg-neutral-800 text-white hover:bg-neutral-700">Playlists</Button>
          <Button variant="secondary" className="rounded-full bg-neutral-800 text-white hover:bg-neutral-700">Artists</Button>
          <Button variant="secondary" className="rounded-full bg-neutral-800 text-white hover:bg-neutral-700">Albums</Button>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <List className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-white">
            <Grid className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="text-neutral-400 hover:text-white">
            <ArrowDownUp className="h-4 w-4 mr-2" /> Recents
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {libraryItems.map((item, index) => (
          <Card key={index} className="bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer flex flex-col items-start">
            <img src={item.image} alt={item.title} className="w-full h-auto rounded mb-2" />
            <h3 className="text-white font-bold text-lg mt-2">{item.title}</h3>
            <p className="text-neutral-400 text-sm">{item.type} • {item.count}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
