import React, { FC, ReactElement } from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { BillData } from '../Pages/BillData';
import dayjs from 'dayjs';



const styles = StyleSheet.create({
    viewCol: {
        fontFamily: 'Helvetica',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '20px',
        marginHorizontal: '40px',
    },
    viewRow1: {
        fontFamily: 'Helvetica',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewRow2: {
        fontFamily: 'Helvetica',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    user: {
        fontFamily: 'Helvetica',
        textAlign: 'left',
        fontSize: 11,
        width: 50,
        letterSpacing: 0.5,
        lineHeight: '1.7px',
    },
    invoice: {
        fontFamily: 'Helvetica',
        textAlign: 'left',
        fontSize: 11,
        width: 70,
        letterSpacing: 0.5,
        lineHeight: '1.7px',
    },
    textfield_long: {
        width: 190,
        fontSize: 11,
        textAlign: 'left',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
        // backgroundColor: 'brown',
    },
    textfield_short: {
        width: 80,
        fontSize: 11,
        textAlign: 'left',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
        // backgroundColor: 'brown',
    }
});


type UserInvoiceProps = {
    bill: BillData
}


function convertDateToString(dateStr: string | undefined): string {
    if(dateStr == undefined){
        return ''
    }


    var sqlDateTime = new Date(dateStr);
    console.log("sqlDateTime...2", sqlDateTime)
    const year = sqlDateTime.getFullYear();
    const month = String(sqlDateTime.getMonth() + 1).padStart(2, '0');
    const day = String(sqlDateTime.getDate()).padStart(2, '0');
    console.log(`hhi${year}-${month}-${day}`)
    return (`${year}-${month}-${day}`);
    // }
}

const User_And_Invoice: FC<UserInvoiceProps> = ({ bill }): ReactElement => {
   



    //console.log("dayjs toDate: ", bill.Date?.toDate());
    
    // const dd = dayjs('2019-01-25');
    
    // console.log("new dayjs : ", dd);
    // console.log("new dayjs toDate: ", dd.toDate());

    // const newDate = dayjs(bill.Date)
    // console.log("new dayjs toDate: ", newDate.toDate());



    // // const dd = new dayjs.Dayjs();
    // // console.log("new dayjs : ", dd);
    // // console.log("new dayjs : ", dd.toDate());


    // console.log("bill typeof: ", typeof(bill));
    // console.log("dayjs typeof: ", typeof(bill.Date));
    // // console.log("dayjs instanceof: ", instanceof(bill.Date));
    // console.log("dayjs : ", bill.Date);
    // console.log("dayjs toJSON: ", bill.Date?.toJSON());
    // console.log("dayjs toString: ", bill.Date?.toString());

    //     console.log("|Date from Comp : ", convertDateToString(bill.Date));

    return (
        <View style={styles.viewCol}>
            <View style={styles.viewRow1}>
                <View style={styles.viewRow2}>
                    <Text style={styles.user}>Name:</Text>
                    <Text style={styles.textfield_long}>{bill.Name}</Text>
                </View>
                <View style={styles.viewRow2}>
                    <Text style={styles.invoice}>Invoice No:</Text>
                    <Text style={styles.textfield_short}>{bill.Invoice_No}</Text>
                </View>
            </View>

            <View style={styles.viewRow1}>
                <View style={styles.viewRow2}>
                    <Text style={styles.user}>Phone:</Text>
                    <Text style={styles.textfield_long}>{bill.Phone}</Text>
                </View>
                <View style={styles.viewRow2}>
                    <Text style={styles.invoice}>Date:</Text>
                    <Text style={styles.textfield_short}>{convertDateToString(bill.Date)}</Text>
                </View>
            </View>

            <View style={styles.viewRow1}>
                <View style={styles.viewRow2}>
                    <Text style={styles.user}>Address:</Text>
                    <Text style={styles.textfield_long}>{bill.Address}</Text>
                </View>
                <View style={styles.viewRow2}>
                    <Text style={styles.invoice}>Gold Rate:</Text>
                    <Text style={styles.textfield_short}>{bill.Gold_Rate}</Text>
                </View>
            </View>

            <View style={styles.viewRow1}>
                <View style={styles.viewRow2}>
                    <Text style={styles.user}></Text>
                    <Text style={styles.textfield_long}>{bill.Address}</Text>
                </View>
                <View style={styles.viewRow2}>
                    <Text style={styles.invoice}>Silver Rate:</Text>
                    <Text style={styles.textfield_short}>{bill.Silver_Rate}</Text>
                </View>
            </View>
        </View>
    )
};

export default User_And_Invoice