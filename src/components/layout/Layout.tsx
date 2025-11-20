import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import PlaybackBar from "./PlaybackBar";
import MainContent from "./MainContent";

const Layout = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <MainContent>
          <Outlet />
        </MainContent>
        <PlaybackBar />
      </div>
    </div>
  );
};

export default Layout;
