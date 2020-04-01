import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Child 1</Text>
            <Text style={styles.textStyle}>Child 2</Text>
            <Text style={styles.textStyle}>Child 3</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height:200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text1Style: {
        borderWidth: 3,
        borderColor: 'red',
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'red',
    },
    text3Style: {
        borderWidth: 3,
        borderColor: 'red',
    }
})  

export default BoxScreen
