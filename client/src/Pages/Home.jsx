import React from 'react';

function Home() {
  return (
    <>
      <div className="min-h-full">

        {/* MAIN TITLE */}
        <h1 className="text-4xl font-extrabold text-indigo-700">
          Welcome to the Student Dashboard
        </h1>

        {/* SUBTITLE */}
        <p className="mt-3 text-gray-700 text-lg">
          A centralized space for quick access to all student information and administrative actions.
        </p>

        {/* OVERVIEW SECTION */}
        <div className="mt-8 bg-indigo-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-indigo-800">
            Dashboard Overview
          </h2>

          <p className="mt-2 text-gray-700 text-lg leading-relaxed">
            From here, administrators can efficiently navigate between different modules such as 
            adding new students, reviewing stored records, updating existing information, and managing 
            system operations with ease. This home section provides quick insight and acts as the 
            starting point for all student-related activities.
          </p>
        </div>

        {/* QUICK PURPOSE SECTION */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-indigo-800">What You Can Do Here</h2>

          <ul className="mt-3 space-y-2 text-gray-700 text-lg">
            <li>✔ Access and manage complete student records</li>
            <li>✔ Perform quick searches and filter results instantly</li>
            <li>✔ Add, update, or delete student information with ease</li>
            <li>✔ Navigate seamlessly across all dashboard modules</li>
            <li>✔ Maintain accuracy and improve workflow efficiency</li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Home;
