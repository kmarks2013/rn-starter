import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            {/* <Text style={styles.text1Style}>Child 1</Text>
            <Text style={styles.text2Style}>Child 2</Text>
            <Text style={styles.text3Style}>Child 3</Text> */}
            <View style={styles.view1Style}></View>
            <View style={styles.view2Style}></View>
            <View style={styles.view3Style}></View>
        </View>
    )
}

const styles= StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height:200,
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-around'
    },
    text1Style: {
        borderWidth: 3,
        borderColor: 'red',
        // flex: 4
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'red',
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
        // right: 10
        // left: 10
        // top: 10,
        // bottom: 10
        // alignSelf: 'stretch'
        // flex: 4
    },
    text3Style: {
        borderWidth: 3,
        borderColor: 'red',
        // flex:2
    }
})  

export default BoxScreen
