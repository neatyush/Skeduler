import { useForm } from "react-hook-form";
import Table from "../Components/Table";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import useStaffStore from "../Store";

const StaffList = () => {
  const staffData = useStaffStore((state) => state.staffData);
  const addStaff = useStaffStore((state) => state.addStaff);

  // const removeStaff = useStaffStore((state) => state.removeStaff);
  // Initial form data for staff members
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUserData = (data) => {
    setIsUserDataModal(false);
    const newStaffEntry = {
      name: data.name,
      department: data.department,
      outlet: data.outlet,
      designation: data.designation,
      employeeId: data.id,
      // Generate a unique ID for each staff member
      id: uuidv4(),
    };

    addStaff(newStaffEntry);
    console.log(staffData);
  };
  const [isUserDataModal, setIsUserDataModal] = useState(false);

  return (
    <>
      <div className="text-2xl text-center my-4">
        <p>Manage your staff members here.</p>
      </div>
      <div className="addemployee flex justify-center items-center my-4">
        <button
          className="bg-[#2f4858] text-amber-50 p-4"
          onClick={() => setIsUserDataModal(true)}
        >
          Add New
        </button>
      </div>
      {/* modal */}
      {isUserDataModal && (
        <div
          className="bg-white
            p-4 rounded-lg inset-auto shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <h2 className="text-xl font-bold mb-4">Add Staff to the List</h2>
          <form
            className="flex flex-col"
            onSubmit={handleSubmit(handleUserData)}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter full name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              className="border-2 border-gray-300 p-2 rounded-lg mb-2"
            ></input>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            <label htmlFor="id">Employee Id</label>
            <input
              type="id"
              id="name"
              placeholder="Enter full name"
              {...register("id", {
                required: {
                  value: true,
                  message: "Employee Id is required",
                },
              })}
              className="border-2 border-gray-300 p-2 rounded-lg mb-2"
            ></input>
            {errors.id && <p className="text-red-500">{errors.id.message}</p>}

            <label htmlFor="department">Department</label>
            <select
              type="text"
              id="department"
              {...register("department", {
                required: {
                  value: true,
                  message: "Mention the department",
                },
              })}
              className="border-2 border-gray-300 p-2 rounded-lg mb-2"
            >
              <option value="Housekeeping">Housekeeping</option>
              <option value="Front Desk">Front Desk</option>
              <option value="Food and Beverage">Food and Beverage</option>
              <option value="Kitchen">Kitchen/Food Production</option>
              <option value="Maintenance">Maintenance</option>
              <option value="Management">Management</option>
              <option value="Security">Security</option>
              <option value="Sales and Marketing">Sales and Marketing</option>
              <option value="Accounting and Finance">
                Accounting and Finance
              </option>
              <option value="Human Resources">Human Resources</option>
              <option value="IT and Technology">IT and Technology</option>
            </select>
            {errors.department && (
              <p className="text-red-500">{errors.department.message}</p>
            )}

            <label htmlFor="outlet">Outlet</label>
            <input
              type="text"
              id="outlet"
              placeholder="Enter outlet name"
              {...register("outlet", {
                required: {
                  value: true,
                  message: "Outlet Name is required",
                },
              })}
              className="border-2 border-gray-300 p-2 rounded-lg mb-2"
            ></input>
            {errors.outlet && (
              <p className="text-red-500">{errors.outlet.message}</p>
            )}

            <label htmlFor="designation">Designation</label>
            <select
              type="select"
              id="designation"
              placeholder="Employee Designation"
              {...register("designation", {
                required: {
                  value: true,
                  message: "Employee Designation is required",
                },
              })}
              className="border-2 border-gray-300 p-2 rounded-lg mb-2"
            >
              <option value="Executive">Executive</option>
              <option value="Hod">Head Of Department</option>
              <option value="Manager">Manager</option>
              <option value="Asst">Asst Manager</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Leader">Team Leader</option>
              <option value="Associate">Associate</option>
              <option value="Trainee">Waiter</option>
              <option value="Bartender">Bartender</option>
              <option value="hk">HouseKeeping Associate</option>
              <option value="GSA">Front Desk Associate</option>
              <option value="Trainee">Trainee</option>
              <option value="Casual">Casual</option>
            </select>
            {errors.designation && (
              <p className="text-red-500">{errors.designation.message}</p>
            )}

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
  );
};

export default StaffList;
