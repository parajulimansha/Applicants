import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCog, faExclamationCircle, faArrowLeft, faCaretDown, faTimes, faFilter, faEllipsisH, faSearch, faChevronRight, faChevronLeft, faDownload  } from '@fortawesome/free-solid-svg-icons';

const Applicants = ({ user }) => {
  const [isUpgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isSettingsDropdownOpen, setSettingsDropdownOpen] = useState(false);
  const [isExclamationPopupOpen, setExclamationPopupOpen] = useState(false);
  const [isEllipsisDropdownOpen, setEllipsisDropdownOpen] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false); 

  const [notifications] = useState(['Your personal code is ABC123', 'Upgrade available', 'New applicant added']);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest('.popup') && 
        !event.target.closest('.exclamation') && 
        !event.target.closest('.profile-btn') && 
        !event.target.closest('.settings-btn')&&
        !event.target.closest('.ellipsis-btn')&&
        !event.target.closest('.filter-btn')
      ) {
        setNotificationsOpen(false);
        setExclamationPopupOpen(false);
        setSettingsDropdownOpen(false);
        setProfileDropdownOpen(false);
        setEllipsisDropdownOpen(false);
        setFilterVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col h-full w-full bg-white p-2">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center space-x-2">
          <button className="text-gray-600 hover:text-blue-600">
            <FontAwesomeIcon icon={faArrowLeft} /> Dashboard
          </button>
        </div>

        <div className="flex space-x-2 items-center">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gray-600 text-xs">You are on free plan</span>
            <button
              onClick={() => setUpgradeModalOpen(true)}
              className="font-bold text-xs bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Upgrade
            </button>
            <span className="font-bold text-gray-600 text-xs" style={{ marginLeft: '10px' }}>to enjoy all features</span>
            <button onClick={() => setExclamationPopupOpen(!isExclamationPopupOpen)} className="text-gray-600 exclamation">
              <FontAwesomeIcon icon={faExclamationCircle} />
            </button>

            {isExclamationPopupOpen && (
              <div className="absolute right-10 mt-20 w-68 bg-white shadow-lg rounded-md p-4 popup">
                <div className="flex justify-between items-center">
                  <p className="font-semibold">Your personal code is:</p>
                </div>
                <p className="mb-2">hs8j8240</p>
                <p className="font-semibold">Your organization code is:</p>
                <p className="mb-2">TES3061</p>
                <p className="text-gray-700">Use this code to share applicants' details with users from other organizations.</p>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setNotificationsOpen(!isNotificationsOpen)}
              className="relative text-gray-600 hover:text-blue-600 popup"
            >
              <FontAwesomeIcon icon={faBell} />
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs">2</span>
            </button>

            {isNotificationsOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg rounded-md p-4 popup">
                <div className="flex justify-between mb-2">
                  <button className="text-blue-600">View all unread</button>
                  <button className="text-blue-600">Mark all read</button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setSettingsDropdownOpen(!isSettingsDropdownOpen)}
              className="text-gray-600 hover:text-blue-600 settings-btn"
            >
              <FontAwesomeIcon icon={faCog} />
            </button>

            {isSettingsDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                <button className="block w-full text-sm text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Admin
                </button>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setProfileDropdownOpen(!isProfileDropdownOpen)}
              className="text-gray-600 bg-green-200 p-2 rounded-md profile-btn"
            >
              {user} <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                <button className="block w-full text-sm text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                  My Profile
                </button>
                <hr className="my-2 border-gray-300" />
                <button className="block w-full text-sm text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Change Password
                </button>
                <hr className="my-2 border-gray-300" />
                <button className="block w-full text-sm text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                  EOD Reports
                </button>
                <hr className="my-2 border-gray-300" />
                <button className="block w-full text-sm text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Send Feedback
                </button>
                <hr className="my-2 border-gray-300" />
                <button className="block w-full text-sm text-left px-4 py-2 text-gray-600 hover:bg-gray-100">
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Second Row: Filter, Buttons, Search */}
      {/* Container for buttons and dropdown */}
      <div className="bg-gray-100 p-4 ">
      <div className="flex items-center space-x-2 mb-4 flex-nowrap">
        {/* Filter Button */}
        <button
          className="bg-gray-200 p-2 h-8 rounded-md hover:bg-gray-300 flex items-center text-sm px-4"
          onClick={() => setIsFilterVisible(!isFilterVisible)} // Toggle filter visibility
        >
          <FontAwesomeIcon icon={faFilter} className="text-gray-600" />
        </button>
        {isFilterVisible && (
      <div className="absolute top-10 mt-16 left-[200px] bg-gray-100 shadow-lg rounded-md p-4 w-90 filter-btn">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Applicants Filter</h3>
      <div className="space-y-4 text-gray-600 text-sm">
        {/* Name */}
        <div>
          <label className="text-sm font-medium">Name</label>
          <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
        </div>

      {/* Applicant's Email */}
      <div>
        <label className="text-sm font-medium">Applicant's Email</label>
        <input type="email" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Phone Number */}
      <div>
        <label className="text-sm font-medium">Phone Number</label>
        <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Interested Country */}
      <div>
        <label className="text-sm font-medium">Interested Country</label>
        <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Interested Course */}
      <div>
        <label className="text-sm font-medium">Interested Course</label>
        <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Added By */}
      <div>
        <label className="text-sm font-medium">Added By</label>
        <select className="w-full mt-1 border border-gray-300 rounded-md p-2 text-gray-300 bg-white">
          <option>Select User</option>
        </select>
      </div>

      {/* Applicant Manager */}
      <div>
        <label className="text-sm font-medium">Applicant Manager</label>
        <select className="w-full mt-1 border border-gray-300 rounded-md p-2 text-gray-300 bg-white">
          <option>Not Assigned</option>
        </select>
      </div>

      {/* Reference */}
      <div>
        <label className="text-sm font-medium">Reference</label>
        <select className="w-full mt-1 border border-gray-300  text-gray-300 rounded-md p-2 bg-white">
          <option>Friends</option>
          <option>Advertisement</option>
        </select>
      </div>

      {/* Date Range */}
      <div>
        <label className="text-sm font-medium">Start Date (By Created Date)</label>
        <input type="date" className="w-full mt-1 border text-gray-300 border-gray-300 rounded-md p-2 bg-white" />
      </div>
      <div>
        <label className="text-sm font-medium">End Date (By Created Date)</label>
        <input type="date" className="w-full mt-1 border border-gray-300 rounded-md p-2 text-gray-300 bg-white" />
      </div>

      {/* Updated Dates */}
      <div>
        <label className="text-sm font-medium">Updated Start Date</label>
        <input type="date" className="w-full mt-1 border text-gray-300 border-gray-300 rounded-md p-2 bg-white" />
      </div>
      <div>
        <label className="text-sm font-medium">Updated End Date</label>
        <input type="date" className="w-full mt-1 border text-gray-300 border-gray-300 rounded-md p-2 bg-white" />
      </div>

      {/* Filter By Test Score Section */}
      <div className="bg-white p-4 border border-gray-300 rounded-md mb-4">
        <h3 className="font-semibold text-gray-700 mb-2">Filter By Test Score</h3>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div>
            <label className="text-sm">Test</label>
            <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
              <option>TOEFL</option>
              <option>IELTS</option>
              <option>PTE</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Comparison</label>
            <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
              <option>Greater than {'>'}</option>
              <option>Less than {'<'}</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Value</label>
            <input type="text" className="w-full p-2 border text-gray-300 border-gray-300 rounded" />
          </div>
        </div>
        <button className="text-blue-500 text-sm">Add another filter</button>
      </div>

      {/* Filter By Academic Score Section */}
      <div className="bg-white p-4 border border-gray-300 rounded-md">
        <h3 className="font-semibold text-gray-700 mb-2">Filter By Academic Score</h3>
        <div className="mb-2">
          <label className="text-sm">Degree</label>
          <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
            <option >Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-2">
          <div>
            <label className="text-sm">Aggregate Type</label>
            <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
              <option>Percentage</option>
              <option>CGPA</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Comparison</label>
            <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
              <option>Greater than {'>'}</option>
              <option>Less than {'<'}</option>
            </select>
          </div>
          <div>
            <label className="text-sm">Value</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </div>
        </div>
        <button className="text-blue-500 text-sm">Add another filter</button>
      </div>

       {/* Filter By Class Section */}
      <div className="bg-white p-4 border border-gray-300 rounded-md mt-4">
        <h3 className="font-semibold text-gray-700 mb-2">Filter By Class</h3>
        <div className="mb-2">
          <label className="text-sm text-gray-600">Class</label>
          <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
           
            <option>Select class</option>
          
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-600">Status</label>
          <select className="w-full p-2 border text-gray-300 border-gray-300 rounded">
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        </div>

      

      {/* Action Buttons */}
      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Apply Filter</button>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Clear</button>
      </div>
          </div>
        </div>
        )}


        {/* Ellipsis Button */}
      <button
        onClick={() => setEllipsisDropdownOpen(!isEllipsisDropdownOpen)} // Toggle state on click
        className="bg-gray-200 p-2 h-8 rounded-md hover:bg-gray-300 flex items-center text-sm px-4 ellipsis-btn"
      >
        <FontAwesomeIcon icon={faEllipsisH} className="text-gray-600" />
      </button>

      {/* Dropdown Menu */}
      {isEllipsisDropdownOpen && (
          <div className="absolute mt-44 left-[230px] bg-white shadow-lg rounded-md p-2 left-0 w-48">
            <button className="block text-sm px-4 py-2 hover:bg-gray-100">Import Applicants</button>
            <button className="block text-sm px-4 py-2 hover:bg-gray-100">Export Applicants</button>
            <button className="block text-sm px-4 py-2 hover:bg-gray-100">File Sample of Applicants</button>
          </div>
        )}
        {/* Add Applicant Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200 text-sm whitespace-nowrap">
          Add Applicant
        </button>

        <div className="relative inline-block w-full">
        <button className="bg-gray-200 text-gray-600 w-full py-2 px-4 rounded hover:bg-gray-300 flex justify-between items-center">
          <span>Tags</span>
          <div className="flex-grow"></div> 
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </button>
      </div>

     
        <div className="flex-grow"></div>

        {/* Search Bar */}
        <div className="flex items-center border border-gray-300 rounded px-2">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search Applicant"
            className="outline-none text-gray-600 px-2 py-1"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 ml-2">
          Search
        </button>
      </div>

            {/* Main Content Area */}
            
      <div className="flex-grow bg-white p-6 rounded-lg shadow-md text-xs ">
        {/* Top Filters Bar */}
        <div className="bg-gray-100 p-2 rounded-md mb-4 flex items-center justify-between ">

          <div className="flex items-center space-x-2 ml-auto ">
            <span className="flex items-center space-x-1">
            <button className="text-gray-600 hover:text-gray-800">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
          </button>
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Hot(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <span>Warm(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span>Cold(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
              <span>No Priority(0)</span>
            </span>

            {/* Separator line */}
            <div className="w-px h-4 bg-gray-300 mx-2"></div>

            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span>Lead(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              <span>Inquiring(0)</span>
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              <span>Abroad Enrollments(0)</span>
              {/* Dropdown icon */}
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </span>
            <span className="flex items-center space-x-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Decision(0)</span>
              {/* Dropdown icon */}
              <FontAwesomeIcon icon={faCaretDown} className="ml-1" />
            </span>
          </div>

         
          <button className="text-blue-600 text-xs hover:underline underline decoration-blue-500 ml-4">
            Remove Filters
          </button>
        </div>
        
        
      {/* Table Header */}
      <div className="bg-gray-50 rounded-md shadow-sm overflow-hidden">
        <div className="flex items-center p-2 text-gray-700 text-xs font-semibold">
          {/* Checkbox */}
          <div className="flex items-center w-12">
            <input type="checkbox" className="mr-1" />
          </div>

          {/* Column Headers */}
          <div className="flex w-full justify-between">
            
            <div className="w-1/12 flex items-center">
              <FontAwesomeIcon icon={faDownload} />
              <span>Name</span>
            </div>
            <div className="w-1/12 flex items-center">Status</div>
            <div className="w-2/12 flex items-center">Phone Number</div>
            <div className="w-1/12 flex items-center">Interested</div>
            <div className="w-1/12 flex items-center">
            <FontAwesomeIcon icon={faDownload} className="ml-1" />
              Priority 
            </div>
            <div className="w-1/12 flex items-center">Comments</div>
            <div className="w-2/12 flex items-center">Aplicant Manager</div>
            <div className="w-1/12 flex items-center">Score</div>
            <div className="w-2/12 flex items-center">
            <FontAwesomeIcon icon={faDownload} className="ml-1" />
            Latest Updated 
            </div>
            <div className="w-1/12 flex items-center">Added By</div>
            <div className="w-1/12 flex items-center">Tags</div>
            <div className="w-1/12 flex items-center">Actions</div>
          </div>
        </div>

        {/* Table Content */}
        <div className="p-4 text-center text-gray-500">
          No data available
        </div>
      </div>

          {/* Pagination */}
          <div className="flex justify-between items-center p-4">
            <p className="text-gray-600 text-sm">Showing 0 to 0 of 0 entries</p>
            <div className="flex space-x-2 items-center">
          {/* Previous button */}
          <button className="bg-gray-200 text-gray-500 px-3 py-1 rounded hover:bg-gray-300 disabled:opacity-50" disabled>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Page numbers */}
          <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
            1
          </button>

          {/* Next button */}
          <button className="bg-gray-200 text-gray-500 px-3 py-1 rounded hover:bg-gray-300">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
          </div>
        </div>

      </div>

      {/* Upgrade Modal */}
      {isUpgradeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-2">Upgrade Your Plan</h2>
            <p className="text-gray-600 mb-4">Upgrade to access more features and capabilities.</p>
            <button
              onClick={() => setUpgradeModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setUpgradeModalOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              >
                Upgrade
              </button>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Applicants;
