import React from 'react'
import { Page, Document, Image, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Title from './Title';
import UserAndInvoice from './User_And_Invoice';
import NewBill from './New_Bill';
import NetAmount from './Net_Amount';
import OldBill from './Old_Bill';
import Total from './Total';
import { BillData } from '../Pages/BillData';
import { useLocation } from "react-router-dom";





const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        flexDirection: 'column',
    }
});

//how to pass argument to 'react typescript function component'

export default function Pdf_Main_Page() {


    const location = useLocation();


    // React.useEffect(() => {
        // let OldBillitems = JSON.stringify(location.state.BillFromCreateBill);
        console.log("Name from navigate fn: ", location.state.BillFromCreateBill)
    //   }, [location]);
      
    // let Name = location.state.Name;
    // console.log("Name from navigate fn: " + Name)

    // console.log("Pdf_Main_Page date to date", location.state.BillFromCreateBill.Date?.toDate())

    return (
        <PDFViewer width="100%" height="1000" >
            <Document>
            <Page size="A4" style={styles.page}>
                <Title />
                <UserAndInvoice bill={location.state.BillFromCreateBill}/>
                <NewBill billitems={location.state.BillFromCreateBill.billitems} />
                <NetAmount bill={location.state.BillFromCreateBill} inWords={location.state.InWordsFromCreateBill} />
                <OldBill oldbillitems={location.state.BillFromCreateBill.oldbillitems} />
                <Total bill={location.state.BillFromCreateBill} />
            </Page>
        </Document>
        </PDFViewer>
        
    )
}
