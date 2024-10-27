import React, { useState } from 'react';
import Sidebar from './components/SideBar';
import Applicants from './components/Applicants'; 
import './index.css';

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); 
  const [activePage, setActivePage] = useState('Dashboard'); 
  const userName = "test"; 

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`transition-all duration-300 ${isCollapsed ? 'w-[5%]' : 'w-[13%]'} bg-white shadow-md`}>
        <Sidebar 
          isCollapsed={isCollapsed} 
          setIsCollapsed={setIsCollapsed} 
          setActivePage={setActivePage} 
        />
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 flex-grow bg-gray-100`}>
        {activePage === 'Applicants' ? (
          <Applicants user={userName} />
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-center text-lg text-gray-800">Select a page from the sidebar</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
