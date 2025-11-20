import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";

const categories = [
  "Podcasts", "Made For You", "Charts", "New Releases", "Discover",
  "Live Events", "Pop", "Hip Hop", "Rock", "R&B", "Dance/Electronic",
  "Country", "Latin", "Metal", "Jazz", "Classical", "Folk", "Blues",
  "Indie", "Workout", "Sleep", "Party", "Gaming", "Kids & Family"
];

const SearchPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-6">Search</h1>
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
        <Input
          type="text"
          placeholder="What do you want to listen to?"
          className="w-full pl-10 pr-4 py-2 rounded-full bg-neutral-800 border-none text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-green-500"
        />
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Browse all</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Card key={index} className="bg-gradient-to-br from-green-600 to-blue-600 p-4 rounded-lg h-36 flex items-end justify-start text-white font-bold text-xl hover:scale-105 transition-transform cursor-pointer">
            {category}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
