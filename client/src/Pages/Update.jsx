
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Update() {

  const [mydata, setMydata] = useState([]);
  let navigate = useNavigate();

  const loadData = async () => {
    let api = `${import.meta.env.VITE_BACKEND_URL}/updatedata`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const myDel = async (id) => {
    let api = `${import.meta.env.VITE_BACKEND_URL}/updatedelete?id=${id}`;
    const response = await axios.delete(api);
    alert(response.data.msg);
    loadData();
  };

  let myEdit = (id) => {
    navigate(`/stu-dash/edit/${id}`);
  };

  // TABLE ROWS
  const rows = mydata.map((stu, index) => (
    <tr key={index} className="text-center border-b hover:bg-gray-100 transition text-lg">

      <td className="p-3 border-r">{stu.name}</td>
      <td className="p-3 border-r">{stu.rollno}</td>
      <td className="p-3 border-r">{stu.city}</td>
      <td className="p-3 border-r">{stu.fees}</td>

      {/* ACTION BUTTONS */}
      <td className="p-3 flex flex-col sm:flex-row justify-center gap-3">

        <button
          onClick={() => myEdit(stu._id)}
          className="bg-indigo-500 hover:bg-indigo-400 text-white py-1 px-4 rounded-lg transition font-medium"
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => myDel(stu._id)}
          className="bg-red-500 hover:bg-red-400 text-white py-1 px-4 rounded-lg transition font-medium"
        >
          🗑️ Delete
        </button>

      </td>
    </tr>
  ));


  
  return (
    <div className="min-h-full">

      {/* PAGE TITLE */}
      <h1 className="text-3xl font-bold text-indigo-700 mb-3">
        Update Student Data
      </h1>

      {/* DESCRIPTION */}
      <p className="text-lg text-gray-700 mb-6">
        Here you can <strong>edit</strong> or <strong>delete</strong> any student's information
        from the database. Use the action buttons provided in each row.
      </p>

      {/* TABLE WRAPPER */}
      <div className="overflow-x-auto flex justify-center">

        <table className="w-full max-w-5xl bg-white shadow-md rounded-xl border border-gray-300">

          {/* TABLE HEADER */}
          <thead>
            <tr className="bg-indigo-100 text-indigo-800 text-lg font-semibold text-center">
              <th className="p-3 border-r">Name</th>
              <th className="p-3 border-r">Roll No.</th>
              <th className="p-3 border-r">City</th>
              <th className="p-3 border-r">Fees</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>{rows}</tbody>

        </table>
      </div>
    </div>
  );
}

export default Update;



