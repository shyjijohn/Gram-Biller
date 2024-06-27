import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer';


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
        backgroundColor: '#bff0fd',
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



export default function Table_Header() {
    return (
        <View style={styles.view}>
            <Text style={styles.s_no}>S.No</Text>
            <Text style={styles.product}>Product</Text>
            <Text style={styles.qty}>QTY</Text>
            <Text style={styles.gross_weight}>Gross weight</Text>
            <Text style={styles.stone_weight}>Stone weight</Text>
            <Text style={styles.stone_rate}>Stone rate</Text>
            <Text style={styles.n_wt}>N.WT</Text>
            <Text style={styles.va}>VA%</Text>
            <Text style={styles.mc_hc}>MC/HC</Text>
            <Text style={styles.amount}>Amount</Text>
        </View>
    )
}
