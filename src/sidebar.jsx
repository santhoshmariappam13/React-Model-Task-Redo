

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ width: "250px" }}
      >
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-0 lg:ml-64">
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-10 p-2 bg-blue-500 text-white rounded-md focus:outline-none"
        >
          {isOpen ? "Close" : "Open"} Menu
        </button>
        <div className="p-4">
          <h1 className="text-4xl font-bold">Main Content</h1>
          <p className="mt-4 text-gray-700">
            This is the main content area. Click the button to toggle the sidebar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;