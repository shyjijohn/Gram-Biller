import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'



const styles = StyleSheet.create({
    view: {
        fontFamily: 'Helvetica',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '55px'
    },
    title1: {
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.5,
        lineHeight: '1.3px'
    },
    title2: {
        fontFamily: 'Helvetica',
        fontWeight: 'thin',
        fontSize: 14,
        letterSpacing: 0.5,
        lineHeight: '1.3px'
    },
    textfield_long: {
        marginTop: '30px',
        marginHorizontal: '40px',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
        // backgroundColor: 'brown',
      }
});



export default function Title() {
    return (
        <View style={styles.view}>
            <Text style={styles.title1}>Shyji Jewellers</Text>
            <Text style={styles.title2}>Kulasekharam</Text>
            <Text style={styles.title2}>8438607589</Text>
            <Text style={styles.textfield_long}></Text>            
        </View>
    )
}
