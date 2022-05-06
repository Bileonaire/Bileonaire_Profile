function Sidebar() {
  return (
    <div className="bg-black h-screen text-white">
      <div className="w-64 p-5 mt-5 sidebar sticky">
        <div className="mb-2">
          <h3 className="text-lg font-medium mb-2">Dashboard</h3>
          <ul className="sidebarList">
            <li className="p-1 cursor-pointer flex items-center rounded-md hover:bg-gray-400 active">
              Home
            </li>
            <li className="p-1 cursor-pointer flex items-center rounded-md hover:bg-gray-400">
              Trades
            </li>
            <li className="p-1 cursor-pointer flex items-center rounded-md hover:bg-gray-400">
              {/* <ChipIcon className="text-xl h-5 w-5 mr-1" /> */}
              Currencies
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
