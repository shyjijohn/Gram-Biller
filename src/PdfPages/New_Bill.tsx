import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import TableHeader from './Table_Header';
import TableRow from './Table_Row';


const styles = StyleSheet.create({
    view: {
        fontFamily: 'Helvetica',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '24px',
        marginHorizontal: '40px',
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
})


export default function New_Bill() {
  return (
    <View style={styles.view}>
      <TableHeader />
      <TableRow />
    </View>
  )
}
