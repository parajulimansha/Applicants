import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserFriends,
  faClipboardCheck,
  faCalendarAlt,
  faPlane,
  faSuitcase,
  faGraduationCap,
  faDollarSign,
  faCog,
  faPhone,
  faTicketAlt,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isCollapsed, setIsCollapsed, setActivePage }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: faHome },
    { name: "Applicants", icon: faUserFriends },
    { name: "Tasks", icon: faClipboardCheck },
    { name: "Appointments", icon: faCalendarAlt },
    { name: "Abroad Section", icon: faPlane },
    { name: "Services", icon: faSuitcase },
    { name: "Classes", icon: faGraduationCap },
    { name: "Payments", icon: faDollarSign },
    { name: "Workflow", icon: faCog },
    { name: "Contacts", icon: faPhone },
    { name: "Applicant App", icon: faTicketAlt },
    { name: "Flight Booking", icon: faPlane },
    { name: "Settings", icon: faCog }
  ];

  return (
    <div className={`h-full fixed bg-white shadow-md flex flex-col transition-all duration-300 ${isCollapsed || isMobile ? 'w-[5%]' : 'w-[13%]'}`}>
      {/* Logo Section */}
      <div className="p-2 mb-2 flex justify-center items-center bg-green-500 w-full cursor-pointer" onClick={() => setIsCollapsed(!isCollapsed)}>
        <img src="./cmstlogo.PNG" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Menu Items */}
      <div className="flex-1 space-y-1 px-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveItem(item.name);
              setActivePage(item.name);
            }}
            className={`w-full flex items-center py-2 px-4 text-xs rounded-lg ${activeItem === item.name ? "bg-green-100 text-green-600" : "text-gray-500"} hover:bg-gray-100 ${isCollapsed || isMobile ? 'justify-center' : ''}`}
          >
            <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
            {!(isCollapsed || isMobile) && <span className="ml-6">{item.name}</span>} {/* Increased margin between icon and text */}
          </button>
        ))}
      </div>

      {/* Footer Button */}
      <div className="bg-blue-600 text-white text-center p-2 mt-2">
        <button className="w-full text-base flex items-center justify-center">
          <FontAwesomeIcon icon={faHeadset} className="w-2 h-2 mr-2" />
          {!(isCollapsed || isMobile) && "Request For Training"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
