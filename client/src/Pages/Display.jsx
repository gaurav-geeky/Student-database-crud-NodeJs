
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Display() {

  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = `${import.meta.env.VITE_BACKEND_URL}/display`;
    const response = await axios.get(api);
    setMydata(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // STORE TABLE ROWS IN A VARIABLE
  const rows = mydata.map((student, index) => (
    <tr 
      key={index} 
      className="text-center border hover:bg-gray-100 transition"
    >
      <td className="p-3 border">{student.name}</td>
      <td className="p-3 border">{student.rollno}</td>
      <td className="p-3 border">{student.city}</td>
      <td className="p-3 border">{student.fees}</td>
    </tr>
  ));

  return (
    <>
      <div className="min-h-full">

        {/* PAGE TITLE */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-3">
          Student Records
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Below are all the students currently registered in the system.
        </p>

        {/* TABLE WRAPPER */}
        <div className="overflow-x-auto flex justify-center">

          <table className="w-full max-w-4xl border border-gray-300 shadow-md rounded-lg text-lg">

            {/* HEADER */}
            <thead>
              <tr className="bg-indigo-100 text-indigo-800 font-semibold text-center">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Roll No.</th>
                <th className="p-3 border">City</th>
                <th className="p-3 border">Fees</th>
              </tr>
            </thead>

            {/* BODY WITH VARIABLE */}
            <tbody>
              {rows}
            </tbody>

          </table>
        </div>
      </div>
    </>
  );
}

export default Display;




