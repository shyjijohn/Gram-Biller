import React, { FC, ReactElement } from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer';
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



type NetAmountProps = {
    bill: BillData
    inWords: string
}
  
  
  const Net_Amount: FC<NetAmountProps> = ({ bill, inWords }): ReactElement => {

    return (
        <View style={styles.view1}>
            <View style={styles.view2_space}>
                <View style={styles.view2}>
                    <Text style={styles.words}>In Words:</Text>
                    <Text style={styles.words_value}>{inWords}</Text>
                </View>
                <Text style={styles.net_amount}>Taxable Amount:</Text>
                <Text style={styles.net_amount_value}>{bill.Taxable_Amount}</Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text style={styles.net_amount}>Discount:</Text>
                <Text style={styles.net_amount_value}>{bill.Discount}</Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text style={styles.textfield_long}></Text>
            </View>
            <View style={styles.view2_space}>
                <Text style={styles.view3}></Text>
                <Text style={styles.net_amount}>NET AMOUNT:</Text>
                <Text style={styles.net_amount_value}>{bill.Net_Amount}</Text>
            </View>
        </View>
    )
}

export default Net_Amount
