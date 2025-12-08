
import axios from 'axios';
import React, { useState } from 'react';

function Search() {

    const [rollno, setRollno] = useState("");
    const [mydata, setMydata] = useState([]);

    const handelSubmit = async () => {
        if (!rollno.trim()) {
            alert("Please enter a Roll Number!");
            return;
        }

        let api = `${import.meta.env.VITE_BACKEND_URL}/search`;
        const response = await axios.post(api, { rollno: rollno });
        setMydata(response.data);
        setRollno(""); 
    };

    // Table rows stored in variable
    const rows = mydata.map((stu, index) => (
        <tr key={index} className="text-center hover:bg-gray-100 transition">
            <td className="border p-2">{stu.rollno}</td>
            <td className="border p-2">{stu.name}</td>
            <td className="border p-2">{stu.city}</td>
            <td className="border p-2">{stu.fees}</td>
        </tr>
    ));

    return (
        <div className="min-h-full">

            {/* PAGE TITLE */}
            <h1 className="text-3xl font-bold text-indigo-700 mb-3">
                Search Student Records
            </h1>

            {/* SUB-TEXT */}
            <p className="text-lg text-gray-700 mb-6">
                Enter a student's <strong>Roll Number</strong> below to find their details.
            </p>

            {/* SEARCH BOX SECTION */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8 max-w-xl mx-auto">

                <input
                    type="text"
                    placeholder="Enter Roll Number"
                    value={rollno}
                    onChange={(e) => setRollno(e.target.value)}
                    className="border border-indigo-300 rounded-lg p-2 flex-1 
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
                />

                <button
                    onClick={handelSubmit}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                     py-2 px-6 rounded-lg transition"
                >
                    Search
                </button>
            </div>

            <hr className="mb-6" />

            {/* RESULT TABLE */}
            {mydata.length > 0 ? (
                <div className="overflow-x-auto flex justify-center">
                    <table className="border border-gray-300 shadow-md rounded-lg w-full max-w-3xl text-lg">

                        <thead>
                            <tr className="bg-indigo-100 text-indigo-800 font-semibold text-center">
                                <th className="border p-3">Roll No.</th>
                                <th className="border p-3">Name</th>
                                <th className="border p-3">City</th>
                                <th className="border p-3">Fees</th>
                            </tr>
                        </thead>

                        <tbody>{rows}</tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-6 text-lg">
                    No student data found. Try searching by a valid roll number.
                </p>
            )}
        </div>
    );
}

export default Search;
 

