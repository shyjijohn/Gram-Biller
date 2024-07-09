import React, { FC, ReactElement } from 'react'
import { View, StyleSheet } from '@react-pdf/renderer'
import OldTableHeader from './Old_Table_Header';
import OldTableRow from './Old_Table_Row';
import { OldBillItem } from '../Pages/BillData';


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


type oldbillitemsFromPdfMainPage = {
  oldbillitems: OldBillItem[]
}


const Old_Bill: FC<oldbillitemsFromPdfMainPage> = ({ oldbillitems }): ReactElement => {


  return (
    <View style={styles.view}>
      <OldTableHeader />
      {
        oldbillitems.map(item => <OldTableRow oldBillItem={item}/>)
       }
    </View>
  )
}

export default Old_Bill