import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            {/* <Text style={styles.text1Style}>Child 1</Text>
            <Text style={styles.text2Style}>Child 2</Text>
            <Text style={styles.text3Style}>Child 3</Text> */}
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    )
}

const styles= StyleSheet.create({
    // parentStyle: {
    //     borderWidth: 3,
    //     borderColor: 'black',
    //     height:200,
    //     flexDirection: 'row',
    //     // alignItems: 'flex-start',
    //     // justifyContent: 'space-around'
    // },
    // text1Style: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     // flex: 4
    // },
    // text2Style: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     // ...StyleSheet.absoluteFillObject
    //     // position: "absolute",
    //     // top: 0,
    //     // right: 0,
    //     // bottom: 0,
    //     // left: 0
    //     // right: 10
    //     // left: 10
    //     // top: 10,
    //     // bottom: 10
    //     alignSelf: 'center'
    //     // flex: 4
    // },
    // text3Style: {
    //     borderWidth: 3,
    //     borderColor: 'red',
    //     // flex:2
    //     alignSelf: "flex-end"
    // }
    // MY SOLUTION
    // viewOneStyle :{
    //     // margin: 10,
    //     width: 100,
    //     height:100,
    //     backgroundColor: 'red',
    //     flex:1
    // },
    // viewTwoStyle :{
    //     marginTop: 100,
    //     width: 100,
    //     height:100,
    //     backgroundColor: 'green',
    //     alignSelf: "center",
    //     flex:1
    // },
    // viewThreeStyle :{
    //     width: 100,
    //     height:100,
    //     backgroundColor: 'blue',
    //     // position:"absolute",
    //     // alignSelf: "flex-end",
    //     flex:1
    // }
    // COURSE SOLUTION
    parentStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height:200,
        //option 2
        // height:100,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        // option 1
        // marginTop: 50
        // option 2,
        // alignSelf: 'flex-end'
        //option 3
        top: 50
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    },
})  

export default BoxScreen
