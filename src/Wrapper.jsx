const Wrapper = (props) => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        {/* Header */}
        <div>
          <ul className="flex justify-between bg-[#336699] text-[#ffffff] h-16 items-center px-4">
            <div>
            <li>
              <a href="" className="text-2xl">
                Hotel Staff Scheduler
              </a>
            </li>
            </div>

            <div className="flex flex-row gap-4">
            <li>
              <a href=""
              onClick={(e) => {e.preventDefault(); alert("This feature is not available yet")}}>
                Notice
              </a>
            </li>
            <li>
              <a href=""
              onClick={(e) => {e.preventDefault(); alert("This feature is not available yet")}}>
                Training
              </a>
            </li>
            </div>

            {/* <li>
              <a href="">
                <img src="/public/menu-icon.svg" alt="" />
              </a>
            </li> */}
          </ul>
        </div>

        {props.children}
       

        {/* Footer */}
        <div className="flex items-center justify-center bg-[#336699] text-[#ffffff] h-14">
          <p>Powered by Neatyush, Ayush Paudel</p>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
