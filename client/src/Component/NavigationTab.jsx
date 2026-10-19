import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx';

const NavigationTab = () => {
  return (
    <div className="bg-[#21262B] w-58 min-h-screen py-8 pr-3 pl-8 text-white flex flex-col rounded-2xl rounded-tr-none rounded-br-none ">
      <Logo/>

      <main className="font-semibold">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `block p-3 mb-2 rounded-lg ${isActive && `bg-[#D9A441]`} text-white `
          }
        >
          Overview
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `block p-3 mb-2 rounded-lg ${isActive && `bg-[#D9A441]`} text-white `
          }
          to="/transactions"
        >
          Transactions
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `block p-3 mb-2 rounded-lg ${isActive && `bg-[#D9A441]`} text-white `
          }
          to="/report"
        >
          Reports
        </NavLink>
        <NavLink
          className={({ isActive }) => `block p-3 mb-2 rounded-lg ${isActive && `bg-[#D9A441]`} text-white `}
          to="/settings"
        >
          Settings
        </NavLink>
      </main>
    </div>
  );
}

export default NavigationTab
