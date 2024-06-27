import React from 'react'
import { Page, Document, Image, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import UserAndInvoice from './User_And_Invoice';
import NewBill from './New_Bill';
import NetAmount from './Net_Amount';
import OldBill from './Old_Bill';
import Total from './Total';


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        flexDirection: 'column',
    }
});



export default function Pdf_Main_Page() {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <Title />
                <UserAndInvoice />
                <NewBill />
                <NetAmount />
                <OldBill />
                <Total />
            </Page>
        </Document>
    )
}
