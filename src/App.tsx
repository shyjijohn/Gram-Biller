import React, {Fragment} from 'react';
import ReactDOM from "react-dom/client";
import Appbar from './Appbar';
import { PDFViewer } from '@react-pdf/renderer';
import PdfMainPage from './PdfPages/Pdf_Main_Page'
import './App.css';



function App() {


  return (


    <div className="App">
      <PDFViewer width="100%" height="100%" >
        <PdfMainPage />
      </PDFViewer>
    </div>



    // <div className="App">
    //   <Appbar />



    //   {/* <ul className="App-header">
    //     <li>
    //       <Link to="/home">Home Page</Link>
    //     </li>
    //     <li>
    //       <Link to="/createBill">
    //         Create Bill
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/addStock">
    //         Add Stock
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/viewBills">
    //         View Bills
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/viewStocks">
    //         View Stocks
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/viewBalance">
    //         View Balance
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/viewSales">
    //         View Sales
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/userSettings">
    //         User Settings
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="*">
    //         No Page
    //       </Link>
    //     </li>
    //   </ul> */}

    // </div>
  );
}

export default App;
