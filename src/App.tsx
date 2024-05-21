import React from 'react';
import ReactDOM from "react-dom/client";
import { Routes, Route, Link } from "react-router-dom";
import Appbar from './Appbar';
import HomePage from './Pages/HomePage';
import AddStock from './Pages/AddStock';
import CreateBill from './Pages/CreateBill';
import ViewBills from './Pages/ViewBills';
import ViewStocks from './Pages/ViewStocks';
import ViewBalance from './Pages/ViewBalance';
import ViewSales from './Pages/ViewSales';
import UserSettings from './Pages/UserSettings';
import NoPage from './Pages/NoPage';




function App() {

  
  return (
                <div className="App">
                  <Appbar />
                    <ul className="App-header">
                        <li>
                            <Link to="/home">Home Page</Link>
                        </li>
                        <li>
                            <Link to="/createBill">
                            Create Bill
                            </Link>
                        </li>
                        <li>
                            <Link to="/addStock">
                            Add Stock
                            </Link>
                        </li>
                        <li>
                            <Link to="/viewBills">
                            View Bills
                            </Link>
                        </li>
                        <li>
                            <Link to="/viewStocks">
                            View Stocks
                            </Link>
                        </li>
                        <li>
                            <Link to="/viewBalance">
                            View Balance
                            </Link>
                        </li>
                        <li>
                            <Link to="/viewSales">
                            View Sales
                            </Link>
                        </li>
                        <li>
                            <Link to="/userSettings">
                            User Settings
                            </Link>
                        </li>
                        <li>
                            <Link to="*">
                            No Page
                            </Link>
                        </li>
                    </ul>
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/createBill" element={<CreateBill />} />
          <Route path="/addStock" element={<AddStock />} />
          <Route path="/viewBills" element={<ViewBills />} />
          <Route path="/viewStocks" element={<ViewStocks />} />
          <Route path="/viewBalance" element={<ViewBalance />} />
          <Route path="/viewSales" element={<ViewSales/>} />
          <Route path="/userSettings" element={<UserSettings />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      </div>
  );
}

export default App;
