import { useState } from "react";
import { useForm } from "react-hook-form";
import Wrapper from "../Wrapper";

const EmployeePage = () => {
  // state for request modal
  const leaveFormData = {
    leaveReason: "",
    leaveDate: "",
  };
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const{register, handleSubmit, formState:{errors}} = useForm();
  const onSubmit = (data) => {
    setIsRequestModalOpen(false);
    const leaveData = {...leaveFormData, 
    leaveReason: data.leaveReason,
    leaveDate: data.leaveDate
    };
    console.log(leaveData);
  };
  
  return (
    <Wrapper>
      {/* Welcome Message */}
      <div className="flex flex-col items-center justify-center ">
        <p className="text-2xl text-center line-height-10">
          Welcome ,<br />
          <span className="text-3xl"> Ayush Paudel </span>
          {/* Welcome, {employeeName}! */}
        </p>
      </div>

      {/* Employee side features */}
      <div>
        <div className="flex justify-center">
          <button className="bg-[#336699] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[#2a4d66]">
            View Schedule
          </button>
        </div>

        <div
          className="flex justify-center mt-4"
          onClick={() => setIsRequestModalOpen(true)}
        >
          <button className="bg-[#336699] text-[#ffffff] px-4 py-2 rounded-lg hover:bg-[#2a4d66]">
            Request Leave
          </button>
        </div>
      </div>
      {/* modal */}
      {isRequestModalOpen && (
        <>
          <div className="bg-white
           p-4 rounded-lg inset-auto shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl font-bold mb-4">Request Leave</h2>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="leaveReason">Reason for leave</label>
              <input
                type="text"
                id="leaveReason"
                {...register("leaveReason",{
                    required:{
                        value:true,
                        message:"Leave reason is required"
                    }
                })}
                placeholder="Enter reason for leave"
                className="border border-gray-300 rounded-lg px-2 py-1 mb-4 w-[300px]"
              />
              {errors.leaveReason && (
                <p className="text-red-500">{errors.leaveReason.message}</p>
              )}
              <label htmlFor="leaveDate">Leave Date</label>
              <input
                type="date"
                id="leaveDate"
                className="border border-gray-300 rounded-lg px-2 py-1 mb-4 w-[300px]"
                 {...register("leaveDate", {
                    required: {
                        value:true,
                        message:"Leave date is required"
                    },
    
                })}
              />
              {errors.leaveDates && (
                <p className="text-red-500">{errors.leaveDate.message}</p>
              )}

              <button
                className="bg-[#336699] text-[#ffffff] px-4 py-2 mb-4 rounded-lg w-[300px]"
                type="submit"
              >
                Request Now
              </button>
               <button 
                className="bg-[#336699] text-[#ffffff] px-4 py-2 rounded-lg w-[300px]"
                onClick={() => setIsRequestModalOpen(false)}
                type="button"
              >
                Cancel
              </button>
            </form>
          </div>
          {/* <div className="bg-white p-4 rounded-lg shadow-lg"></div> */}
          
        </>
      )}
    </Wrapper>
  );
};

export default EmployeePage;
