import "./table.css";
import React from "react";

const Table = () => {
    
  return (
    <>

    {/* static table component */}
    <div>
      <table className="table border-2 border-collapse">
        <thead>
        <tr className="table-header border-2">
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Departement</th>
          <th>Outlet</th>
          <th>Designation</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
        </thead>
        <tbody>
        <tr className="table-row">
          <td className="">123</td>
          <td>Ojaswi Basnet</td>
          <td>Sales and Marketing</td>
          <td>Sales</td>
          <td>Sales Manager</td>
          <td>
            <button className="hover:bg-gray-300 rounded-3xl p-2"><img src="/edit-icon.svg"></img></button>
          </td>
          <td>
            <button className="hover:bg-gray-300 rounded-3xl p-2"><img src="/delete-icon.svg"></img></button>
          </td>
        </tr>
        </tbody>
        
      </table>
    </div>
    </>
  );
};

export default Table;
