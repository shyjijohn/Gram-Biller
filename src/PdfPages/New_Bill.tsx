import React, { FC, ReactElement } from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import TableHeader from './Table_Header';
import TableRow from './Table_Row';
import { BillItem } from '../Pages/BillData';


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


type billitemsFromPdfMainPage = {
  billitems: BillItem[]
}


const New_Bill: FC<billitemsFromPdfMainPage> = ({ billitems }): ReactElement => {

  return (
    <View style={styles.view}>
      <TableHeader />
       {
        billitems.map(item => <TableRow billItem={item}/>)
       }
     
    </View>
  )
}

export default New_Bill
