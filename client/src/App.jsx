import { useState } from 'react'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import Overview from './Pages/Overview';
import Form from './Pages/Form.jsx'
import Report from './Pages/Reports.jsx'
import Settings from './Pages/Settings.jsx'
import Transactions from './Pages/Transactions.jsx'
import NavigationTab from './Component/NavigationTab.jsx';

function App() {

  return (
    <BrowserRouter>
      <div className="flex h-lvh m-2">
        <NavigationTab />

        <main className="Main_Routes flex-1 min-w-0 p-6 border  border-l-0 rounded-2xl rounded-tl-none rounded-bl-none">
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
