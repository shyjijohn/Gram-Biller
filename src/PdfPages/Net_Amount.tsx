import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer';



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
    words: {
        width: '15%'
    },
    words_value: {
        width: '50%',
        lineHeight: '1.5'
    },
    view3: {
        width: '65%'
    },
    net_amount: {
        // width: '15%',
        // alignSelf: 'flex-end'
    },
    net_amount_value: {
        // width: '15%',
        // alignSelf: 'flex-end'
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


export default function Net_Amount() {
    return (
        <View style={styles.view1}>
            <View style={styles.view2_space}>
                <View style={styles.view2}>
                    <Text style={styles.words}>In Words:</Text>
                    <Text style={styles.words_value}>Two Lakhs Twenty four Thousand Three Hundred and Fifty Four Rupees Only</Text>
                </View>
                <Text style={styles.net_amount}>Taxable Amount:</Text>
                <Text style={styles.net_amount_value}>$0.00</Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text style={styles.net_amount}>Discount:</Text>
                <Text style={styles.net_amount_value}>0.00</Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text style={styles.textfield_long}></Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text style={styles.net_amount}>NET AMOUNT:</Text>
                <Text style={styles.net_amount_value}>$0.00</Text>
            </View>
        </View>
    )
}
