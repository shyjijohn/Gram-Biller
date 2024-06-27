import React from 'react'
import {Text, View, StyleSheet } from '@react-pdf/renderer';



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



export default function Old_Table_Row() {
  return (
    <View style={styles.view}>
            <Text style={styles.particulars}>Earring</Text>
            <Text style={styles.wt}>12</Text>
            <Text style={styles.wastage}>2.3</Text>
            <Text style={styles.total_wt}>33</Text>
            <Text style={styles.rate}>6.00</Text>
            <Text style={styles.amount}>56.00</Text>
        </View>
  )
}
