import React, { FC, ReactElement } from 'react'
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import { OldBillItem } from '../Pages/BillData';



const borderColor = '#90e5fc'
const styles = StyleSheet.create({
  view: {
    fontFamily: 'Helvetica',
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    fontSize: '9px',
    height: 24,
    textAlign: 'center',
    flexGrow: 1,
},
particulars: {
    width: '30%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
},
wt: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
},
wastage: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
},
total_wt: {
    width: '20%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
},
rate: {
    width: '10%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
},
amount: {
    width: '20%',
    
},
})



type oldbillitemsFromNewBill = {
    oldBillItem: OldBillItem
  } 


const Old_Table_Row: FC<oldbillitemsFromNewBill> = ({ oldBillItem }): ReactElement => {





  return (
    <View style={styles.view}>
            <Text style={styles.particulars}>{oldBillItem.particulars}</Text>
            <Text style={styles.wt}>{oldBillItem.wt}</Text>
            <Text style={styles.wastage}>{oldBillItem.wastage}</Text>
            <Text style={styles.total_wt}>{oldBillItem.total_wt}</Text>
            <Text style={styles.rate}>{oldBillItem.rate}</Text>
            <Text style={styles.amount}>{oldBillItem.amount}</Text>
        </View>
  )
}

export default Old_Table_Row
