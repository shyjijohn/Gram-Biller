import React, { FC, ReactElement } from 'react'
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import { BillData } from '../Pages/BillData';



const styles = StyleSheet.create({
    view1: {
        flexDirection: 'column',
        fontFamily: 'Helvetica',
        fontSize: 11,
        marginTop: 15,
        marginHorizontal: 40,
    },
    view2_space: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    view2: {
        flexDirection: 'row',
    },
    old_gold_wt: {
        width: '35%'
    },
    old_gold_wt_value: {
        width: '30%',
    },
    view3: {
        width: '65%'
    },
    textfield_long: {
        width: 135,
        fontSize: 10,
        marginVertical: 10,
        textAlign: 'left',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
    }
})



type TotalProps = {
    bill: BillData
}



const Total: FC<TotalProps> = ({ bill }): ReactElement => {


  return (
    <View style={styles.view1}>
            <View style={styles.view2_space}>
                <View style={styles.view2}>
                    <Text style={styles.old_gold_wt}>Old Gold Total Weight:</Text>
                    <Text style={styles.old_gold_wt_value}>{bill.Old_Gold_Total_Weight}</Text>
                </View>
                <Text>Old Reduced:</Text>
                <Text>{bill.Old_Reduced}</Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text style={styles.textfield_long}></Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text>TOTAL:</Text>
                <Text>{bill.Total}</Text>
            </View>
        </View>
  )
}

export default Total
