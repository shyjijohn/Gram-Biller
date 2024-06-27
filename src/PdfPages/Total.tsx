import React from 'react'
import {Text, View, StyleSheet } from '@react-pdf/renderer';



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



export default function Total() {
  return (
    <View style={styles.view1}>
            <View style={styles.view2_space}>
                <View style={styles.view2}>
                    <Text style={styles.old_gold_wt}>Old Gold Total Weight:</Text>
                    <Text style={styles.old_gold_wt_value}>0.000</Text>
                </View>
                <Text>Old Reduced:</Text>
                <Text>$0.00</Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text style={styles.textfield_long}></Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text>TOTAL:</Text>
                <Text>$0.00</Text>
            </View>
        </View>
  )
}
