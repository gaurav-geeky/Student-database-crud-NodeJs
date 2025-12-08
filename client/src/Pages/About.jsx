
import React from 'react'

function About() {
    return (
        <>
            <div className="min-h-full">
                
                {/* PAGE TITLE */}
                <h1 className="text-3xl font-bold text-indigo-700 mb-6">
                    About the Student Management System
                </h1>

                {/* DESCRIPTION CARD */}
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        The Student Management System is a centralized platform designed for 
                        administrators to efficiently manage student records. 
                        It enables quick access to student information, seamless updates, 
                        and secure data handling — ensuring accuracy and reliability across 
                        the institution.
                    </p>
                </div>

                {/* FEATURES SECTION */}
                <div className="bg-white shadow-md rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                        Key Features
                    </h2>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Add new student records with complete details.</li>
                        <li>View all stored student data in an organized format.</li>
                        <li>Edit or update existing records instantly.</li>
                        <li>Search students quickly using multiple filters.</li>
                        <li>Delete records that are no longer required.</li>
                        <li>Ensure data integrity and secure access via admin login.</li>
                    </ul>
                </div>

            </div>
        </>
    )
}

export default About; 




