import { Card } from "@/components/ui/card";

const HomePage = () => {
  const categories = [
    { title: "Good Morning", items: ["Daily Mix 1", "Discover Weekly", "Release Radar", "Workout", "Chill", "Focus"] },
    { title: "Recently Played", items: ["Song A", "Album B", "Playlist C", "Artist D", "Podcast E", "Song F"] },
    { title: "Made for you", items: ["Daily Mix 2", "On Repeat", "Repeat Rewind", "Your Top Songs 2023", "Blend", "Discover Weekly"] },
  ];

  const renderCards = (items: string[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <Card key={index} className="bg-neutral-800 p-4 rounded-lg hover:bg-neutral-700 transition-colors cursor-pointer">
          <img src={`https://via.placeholder.com/150?text=${encodeURIComponent(item)}`} alt={item} className="w-full h-auto rounded mb-2" />
          <h3 className="text-white font-bold text-lg">{item}</h3>
          <p className="text-neutral-400 text-sm">Description or Artist</p>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-white mb-6">Good morning</h1>

      {categories.map((category, index) => (
        <section key={index}>
          <h2 className="text-2xl font-bold text-white mb-4">{category.title}</h2>
          {renderCards(category.items)}
        </section>
      ))}
    </div>
  );
};

export default HomePage;
