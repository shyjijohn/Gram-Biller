import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'



const styles = StyleSheet.create({
    viewCol: {
        fontFamily: 'Helvetica',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop: '20px',
        marginHorizontal: '40px',
    },
    viewRow1: {
        fontFamily: 'Helvetica',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewRow2: {
        fontFamily: 'Helvetica',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        },
    user: {
        fontFamily: 'Helvetica',
        textAlign: 'left',
        fontSize: 11,
        width: 50,
        letterSpacing: 0.5,
        lineHeight: '1.7px',
    },
    invoice: {
        fontFamily: 'Helvetica',
        textAlign: 'left',
        fontSize: 11,
        width: 70,
        letterSpacing: 0.5,
        lineHeight: '1.7px',
    },
    textfield_long: {
        width: 190,
        fontSize: 11,
        textAlign: 'left',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
        // backgroundColor: 'brown',
      },
      textfield_short: {
        width: 80,
        fontSize: 11,
        textAlign: 'left',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
        // backgroundColor: 'brown',
      }
});



export default function User_And_Invoice() {

    return (
        <View style={styles.viewCol}>
            <View style={styles.viewRow1}>
                <View style={styles.viewRow2}>
                    <Text style={styles.user}>Name:</Text>
                    <Text style={styles.textfield_long}>Name</Text>
                </View>
                <View style={styles.viewRow2}>
                    <Text style={styles.invoice}>Invoice No:</Text>
                    <Text style={styles.textfield_short}>Invoice No</Text>
                </View>
            </View>
            
            <View style={styles.viewRow1}>
                <View style={styles.viewRow2}>
                    <Text style={styles.user}>Phone:</Text>
                    <Text style={styles.textfield_long}>Phone</Text>
                </View>
                <View style={styles.viewRow2}>
                    <Text style={styles.invoice}>Date:</Text>
                    <Text style={styles.textfield_short}>Date</Text>
                </View>
            </View>

            <View style={styles.viewRow1}>
                <View style={styles.viewRow2}>
                    <Text style={styles.user}>Address:</Text>
                    <Text style={styles.textfield_long}>Address</Text>
                </View>
                <View style={styles.viewRow2}>
                    <Text style={styles.invoice}>Gold Rate:</Text>
                    <Text style={styles.textfield_short}>Gold Rate</Text>
                </View>
            </View>

            <View style={styles.viewRow1}>
                <View style={styles.viewRow2}>
                    <Text style={styles.user}></Text>
                    <Text style={styles.textfield_long}>Name</Text>
                </View>
                <View style={styles.viewRow2}>
                    <Text style={styles.invoice}>Silver Rate:</Text>
                    <Text style={styles.textfield_short}>Silver Rate</Text>
                </View>
            </View>
        </View>
    )
}
