import { useState } from 'react'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Overview from './pages/Overview.jsx';
import Form from './pages/Form.jsx'
import Report from './pages/Reports.jsx'
import Settings from './pages/Settings.jsx'
import Transactions from './pages/Transactions.jsx'
import NavigationTab from './component/NavigationTab.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className="flex h-lvh m-2">
        <NavigationTab />

        <main className="Main_Routes flex-1 min-w-0 px-6 pt-4 pb-6 border-2  border-l-0 rounded-2xl border-[#F1EAD9] rounded-tl-none rounded-bl-none">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/add-Transaction" element={<Form />} />
            <Route path="/report" element={<Report />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
