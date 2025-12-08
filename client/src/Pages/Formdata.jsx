
import React, { useState } from 'react'
import axios from "axios";

function Form() {
    const [data, setData] = useState({});

    let handleinput = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    let handelSubmit = async (e) => {
        e.preventDefault();
        let api = `${import.meta.env.VITE_BACKEND_URL}/save`;
        const resp = await axios.post(api, data);

        console.log(data);
        setData({});       
        alert(resp.data);
    };

    return (
        <div className="min-h-full">

            {/* TITLE */}
            <h1 className="text-3xl font-bold text-purple-700 mb-6">
                Add Student Information
            </h1>

            {/* CENTERED FORM WRAPPER */}
            <div className="flex justify-center">
                
                <form 
                    onSubmit={handelSubmit}
                    className="w-full max-w-lg bg-purple-50 shadow-md rounded-xl p-6"
                >

                    {/* NAME */}
                    <div className="flex flex-col mb-4">
                        <label className="text-lg font-medium text-gray-700 mb-1">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={data.name || ""}
                            onChange={handleinput}
                            className="border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                        />
                    </div>

                    {/* ROLL NO */}
                    <div className="flex flex-col mb-4">
                        <label className="text-lg font-medium text-gray-700 mb-1">
                            Roll No:
                        </label>
                        <input
                            type="text"
                            name="rollno"
                            value={data.rollno || ""}
                            onChange={handleinput}
                            className="border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                        />
                    </div>

                    {/* CITY */}
                    <div className="flex flex-col mb-4">
                        <label className="text-lg font-medium text-gray-700 mb-1">
                            City:
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={data.city || ""}
                            onChange={handleinput}
                            className="border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                        />
                    </div>

                    {/* FEES */}
                    <div className="flex flex-col mb-6">
                        <label className="text-lg font-medium text-gray-700 mb-1">
                            Fees:
                        </label>
                        <input
                            type="text"
                            name="fees"
                            value={data.fees || ""}
                            onChange={handleinput}
                            className="border border-purple-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
                        />
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition"
                    >
                        Save Student
                    </button>

                </form>
            </div>

        </div>
    );
}

export default Form;




