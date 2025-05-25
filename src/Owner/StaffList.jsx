import { useForm } from 'react-hook-form';
import Table from '../Components/Table'
import { useState } from 'react';



const StaffList = () => {
    const staffFormData = {
        name: "",
        position: "",
        department: "",
        outlet: "",
        designation: "",
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleUserData = (data) =>{
        setIsUserDataModal(false);
        const userData = {...staffFormData,
        name: data.name,
            
        }
        console.log(userData);
    }
    const [isUserDataModal, setIsUserDataModal] = useState(false);
  
  return (
  <>
    <div className='text-2xl text-center my-4'>
        <p>Manage your staff members here.</p> 
    </div>
    <div className='addemployee flex justify-center items-center my-4'>
      <button className='bg-[#2f4858] text-amber-50 p-4'
      onClick={()=>setIsUserDataModal(true)}>Add New</button>
    </div>
    {/* modal */}
    {isUserDataModal && (
         <div className="bg-white
           p-4 rounded-lg inset-auto shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-2xl font-bold mb-4">Request Leave</h2>
            <form  className="flex flex-col" onSubmit={handleSubmit(handleUserData)}>

            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                {...register("name", { required:
                    {
                        value: true,
                        message: "Name is required"
                    }
                 })}
                className="border-2 border-gray-300 p-2 rounded-lg mb-4"></input>
                {errors.name &&(
                <p className="text-red-500">{errors.name.message}</p>
                )}

            <label htmlFor="position">Position</label>


                <button
                className="bg-[#336699] text-[#ffffff] px-4 py-2 mb-4 rounded-lg w-[300px]"
                type="submit"
              >
                Add Staff Member
              </button>
               <button
                className="bg-[#336699] text-[#ffffff] px-4 py-2 rounded-lg w-[300px]"
                onClick={() => setIsUserDataModal(false)}
                type="button"
              >
                Cancel
              </button>   
            </form>
            </div>
    )}
   

    {/* Table for displaying staff members */}
  <Table></Table>
  </>
  )
}


export default StaffList