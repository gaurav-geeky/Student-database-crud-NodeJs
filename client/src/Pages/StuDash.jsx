
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuLinks from "./MenuLinks"; // << IMPORT THE SHARED MENU

const StuDash = () => {
  const name = localStorage.getItem("aname");

  // STATE FOR MOBILE SIDEBAR
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">

        {/* ================= HEADER ================= */}
        <header className="w-full h-20 bg-white shadow-md flex justify-between items-center px-6">

          {/* HAMBURGER BUTTON (mobile only) */}
          <button
            className="lg:hidden text-indigo-700 text-3xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-2xl font-semibold text-indigo-700">
            Student Dashboard
          </h1>

          <h4 className="text-lg font-medium text-gray-700">
            Welcome {name}
          </h4>
        </header>

        {/* ================ MAIN LAYOUT ================ */}
        <div className="flex flex-1 overflow-hidden">

          {/* =============== DESKTOP SIDEBAR =============== */}
          <aside
            className="hidden lg:flex w-64 bg-white shadow-md p-5 flex-col space-y-5 
            overflow-y-auto border-r border-gray-200"
          >
            {/* Use shared menu */}
            <MenuLinks itemClasses="text-xl font-bold mt-5 hover:text-indigo-600" />
          </aside>

          {/* ================== MOBILE SIDEBAR OVERLAY ================== */}
          {open && (
            <div
              className="fixed inset-0 bg-black/40 z-30 lg:hidden"
              onClick={() => setOpen(false)}
            ></div>
          )}

          {/* ================== MOBILE SLIDE-IN SIDEBAR ================== */}
          <aside
            className={`fixed top-0 left-0 h-full w-56 bg-white shadow-xl p-5 
            flex flex-col space-y-5 border-r border-gray-200 z-40 transform
            transition-transform duration-300 lg:hidden
            ${open ? "translate-x-0" : "-translate-x-full"}`}
          >
            <button
              className="text-2xl text-red-500 self-end mb-4"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {/* Shared menu for mobile (auto close on click) */}
            <MenuLinks
              onClick={() => setOpen(false)}
              itemClasses="text-lg hover:text-indigo-600"
            />
          </aside>

          {/* =================== CONTENT =================== */}
          <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
            <div className="bg-white rounded-xl shadow-md p-6 min-h-full">
              <Outlet />
            </div>
          </main>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="w-full h-16 bg-white shadow-inner flex items-center justify-between px-8">
          <p>© All rights reserved.</p>
          <p>Registered Office: 23 Old Bunglow Farm House</p>
        </footer>
      </div>
    </>
  );
};

export default StuDash;




