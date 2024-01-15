import React from "react";
import { Home, Activity, Heart, User } from "lucide-react"; // Import Lucide icons
import "./bottomBar.css"; // Import your custom CSS file
//link
import { useRouter } from "next/navigation";
 
import { usePathname } from "next/navigation";

const BottomBar = () => {
     const router = useRouter();
    const currentPath = usePathname();

    console.log('currentPath', currentPath);

  return (
    <div className="bottomBar-container">
      <div className="bottomBar-box">
        <div
          className={`menuItem ${
            currentPath == '/' ? "menuItem-active" : ""
          }`}
          onClick={() => router.push("/")}
        >
          <Home size={24} />
          <span>Home</span>
        </div>
        <div
          className={`menuItem ${
            currentPath == '/activity' ? "menuItem-active" : ""
          }`}
          onClick={() => router.push("/activity")}
        >
          <Activity size={24} />
          <span>activity</span>
        </div>
        <div className="menuItem">
          <Heart size={24} />
          <span>Favorite</span>
        </div>
        <div className="menuItem">
          <User size={24} />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
