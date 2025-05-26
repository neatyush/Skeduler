import "./table.css";
import React from "react";
import useStaffStore from "../Store";
import { useState } from "react";

const Table = () => {
  const allStaffData = useStaffStore((state) => state.staff);
  const removeStaff = useStaffStore((state) => state.removeStaff);
  const [editModal, setEditModal] = useState(false);


  return (
    <div className="max-h-[400px] overflow-y-auto">
      <table className="table border-2 border-collapse w-full overflow-x-auto">
        <thead>
          <tr className="table-header border-2 bg-gray-100">
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Outlet</th>
            <th>Designation</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {allStaffData.map((item, index) => (
            <tr key={index} className="table-row hover:bg-gray-50">
              <td>{item.employeeId}</td>
              <td>{item.name}</td>
              <td>{item.department}</td>
              <td>{item.outlet}</td>
              <td>{item.designation}</td>
              <td>
                <div className="flex justify-center items-center">
                  <img
                    src="/edit-icon.svg"
                    alt="Edit"
                    className="hover:bg-gray-300 rounded-3xl p-2"
                    onClick={() => setEditModal(true)}
                  />
                  {editModal && (
                    <div className="edit-modal bg-white
            p-4 rounded-lg inset-auto shadow-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      {/* Modal content for editing staff member */}
                      <h2>Edit Info</h2>
                      {/* Add form fields to edit staff details */}
                      <button onClick={() => setEditModal(false)}>Close</button>
                    </div>
                  )}
                </div>
              </td>
              <td>
                <button className="hover:bg-gray-300 rounded-3xl p-2">
                  <img
                    src="/delete-icon.svg"
                    alt="Delete"
                    onClick={() => removeStaff(item.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
