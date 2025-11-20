import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Bell, User } from "lucide-react";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="flex-grow bg-gradient-to-b from-neutral-900 to-black p-6 overflow-y-auto">
      <header className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
            <ChevronLeft className="h-5 w-5 text-white" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
            <ChevronRight className="h-5 w-5 text-white" />
          </Button>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" className="rounded-full bg-black/50 hover:bg-black/70 text-white">
            Explore Premium
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
            <Bell className="h-5 w-5 text-white" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-black/50 hover:bg-black/70">
            <User className="h-5 w-5 text-white" />
          </Button>
        </div>
      </header>
      {children}
    </main>
  );
};

export default MainContent;
