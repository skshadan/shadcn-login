//import { Header } from "./Header";
import React, { useState } from 'react';
import Tab from "./tab";
import Noob from "./Box";


function MainPage() {
  const [selectedTab, setSelectedTab] = useState("Generate");

  return (
    <div className="min-h-screen overflow-hidden">
        <Tab onTabSelect={setSelectedTab} />
        <Noob selectedTab={selectedTab} />
        
    </div>
  );
}

export default MainPage;

