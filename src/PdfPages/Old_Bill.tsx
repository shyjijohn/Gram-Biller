import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import OldTableHeader from './Old_Table_Header';
import OldTableRow from './Old_Table_Row';


const styles = StyleSheet.create({
    view: {
        fontFamily: 'Helvetica',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '50%',
        marginTop: '24px',
        marginHorizontal: '40px',
        borderWidth: 1,
        borderColor: '#bff0fd',
    },
})


export default function Old_Bill() {
  return (
    <View style={styles.view}>
      <OldTableHeader />
      <OldTableRow />
    </View>
  )
}
