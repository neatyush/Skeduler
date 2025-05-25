
import { NavLink } from "react-router";

const LandingPage = () => {
  return (
    <>
    {/* top nav */}
    <div className="flex flex-col h-screen">
      <nav className="w-full h-20 text-[#000000] justify-around flex items-center bg-[#ffffff] mb-0 pb-0">
        <div>
          <p className="font-extrabold text-2xl">Skeduler</p>
        </div>
        <div>
          <ul className="flex gap-4 bg-[#ebe8e8] rounded-4xl p-4">
            <li>
              <a href="" className="text-l">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-l">
                About
              </a>
            </li>
            <li>
              <a href="" className="text-sl">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* MAIN HERO SECTION */}
      <div className="flex justify-around pt-10">
      {/* left section */}
        <div>
        <img src="/man.jpg" alt=""  className="w-[300px] rounded-2xl"/>
        </div>

        {/* right section */}
        <div>
        <div className="pt-[100px] flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">
            Welcome to{" "}
            <span className="bg-[#2a4d66] text-[#ffffff] p-2 rounded-2xl">
              Skeduler
            </span>
          </h1>
          <p className="text-2xl flex pt-6">
            Your one-stop solution for hotel staff scheduling
          </p>
          <div className="flex flex-row gap-4 items-center">
            <NavLink to='/dashboard' className="mt-4 p-4 bg-[#336699] text-[#ffffff] rounded-4xl hover:bg-[#2a4d66]">
              Login as Owner
            </NavLink>
            <NavLink to='user-login' className="mt-4 p-4 bg-[#ffffff] text-[#000000] rounded-4xl border-2 border-[#336699] ">
              Login as Employee
            </NavLink>
          </div>
        </div>
      </div>
      </div>
      
       {/* Footer */}
       
        <div className="flex mt-auto items-center justify-center bg-[#336699] text-[#ffffff] h-14">
          <p>Powered by Neatyush, Ayush Paudel</p>
        </div>
    </div>
        
    </>
  );
};

export default LandingPage;
