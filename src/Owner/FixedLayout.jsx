import { NavLink } from "react-router-dom";
const FixedLayout = (props) => {
  return (
    <div className="flex flex-col justify-around h-screen">
      {/* Header */}
      <header className="bg-white text-black h-12 ">
        <ul className="flex justify-between items-center h-full w-full border-b-2 border-[#dddcd4] box-border px-4">
          {/* Left item */}
          <li>
            <a href="" className="text-2xl font-bold">
              Skeduler
            </a>
          </li>

          {/* Right items */}
          <li>
            <ul className="flex gap-4 items-center">
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    alert("This feature is not available yet");
                  }}
                >
                  Notification <sub className="text-red-500">1</sub>
                </a>
              </li>
              <li>
                <a
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    alert("This feature is not available yet");
                  }}
                >
                  Training and Developement
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-2"
                  href=""
                  onClick={(e) => {
                    e.preventDefault();
                    alert("This feature is not available yet");
                  }}
                >
                  <img
                    src="/profile-picture.jpg"
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  Ashish
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-row justify-between w-full">
        {/* Panel */}
        <div className="flex flex-col bg-[#2F4858] text-white h-full">
          {/* Left Panel */}
          <ul className="flex flex-col gap-4 h-full p-3 box-border w-64">
            <li>
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  "flex items-center gap-2 p-2 rounded-lg text-white " +
                  (isActive ? "bg-[#336699]" : "")
                }
              >
                <img
                  src="/dashboard-icon.svg"
                  alt="Dashboard Tab"
                  className="h-6 w-6"
                />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/stafflist"
                className={({ isActive }) =>
                  "flex items-center gap-2 hover:bg-[#336699] p-2 rounded-lg text-white " +
                  (isActive ? "bg-[#336699]" : "")
                }
              >
                <img src="/employee.svg" alt="Staff Tab" className="h-6 w-6" />
                <span>Staff</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/schedule"
                className={({ isActive }) =>
                  "flex items-center gap-2 hover:bg-[#336699] p-2 rounded-lg text-white " +
                  (isActive ? "bg-[#336699]" : "")
                }
              >
                <img
                  src="/schedule-icon.svg"
                  alt="Schedule Icon"
                  className="h-6 w-6"
                />
                <span>Schedule</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/leave"
                className={({ isActive }) =>
                  "flex items-center gap-2 hover:bg-[#336699] p-2 rounded-lg text-white " +
                  (isActive ? "bg-[#336699]" : "")
                }
              >
                <img
                  src="/leave-icon.svg"
                  alt="Leave Tab"
                  className="h-6 w-6"
                />
                <span>Leave</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/reports"
                className={({ isActive }) =>
                  "flex items-center gap-2 hover:bg-[#336699] p-2 rounded-lg text-white " +
                  (isActive ? "bg-[#336699]" : "")
                }
              >
                <img src="/report.svg" alt="Reports Icon" className="h-6 w-6" />
                <span>Reports</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* App Area */}
        <div className="w-full">{props.children}</div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center bg-[#336699] text-white h-10 ">
        <p>Powered by Neatyush, Ayush Paudel</p>
      </footer>
    </div>
  );
};

export default FixedLayout;
