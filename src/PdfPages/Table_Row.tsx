import React, { FC, ReactElement } from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { BillItem } from '../Pages/BillData';


const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    view: {
        fontFamily: 'Helvetica',
        flexDirection: 'row',
        fontSize: '9px',
        flexGrow: 1,
        height: 24,
        alignItems: 'center',
        textAlign: 'center',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
    },
    s_no: {
        width: '5%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    product: {
        width: '24%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '5%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    gross_weight: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    stone_weight: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    stone_rate: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    n_wt: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    va: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    mc_hc: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '14%',
    }
})


type billitemsFromNewBill = {
    billItem: BillItem
  } 


const Table_Row: FC<billitemsFromNewBill> = ({ billItem }): ReactElement => {


  return (
    <View style={styles.view}>
            <Text style={styles.s_no}>{billItem.id}</Text>
            <Text style={styles.product}>{billItem.product}</Text>
            <Text style={styles.qty}>{billItem.qty}</Text>
            <Text style={styles.gross_weight}>{billItem.gross_weight}</Text>
            <Text style={styles.stone_weight}>{billItem.stone_weight}</Text>
            <Text style={styles.stone_rate}>{billItem.stone_rate}</Text>
            <Text style={styles.n_wt}>{billItem.n_wt}</Text>
            <Text style={styles.va}>{billItem.va_percent}</Text>
            <Text style={styles.mc_hc}>{billItem.mc_hc}</Text>
            <Text style={styles.amount}>{billItem.amount}</Text>
        </View>
  )
}

export default Table_Row 
