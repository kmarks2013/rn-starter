import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    // const greeting = <Text>What's up?</Text>
    const myName = "Kenny"
    return (
    <View>
    {/* <Text style={styles.textStyle}></Text>
    <Text> Hi there!</Text>
    {greeting} */}
    <Text style={styles.textStyle}>Getting started wtih react native!</Text>
    <Text style={styles.greetingStyle}> My name is {myName} </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    greetingStyle: {
        fontSize: 20
    }

})

export default ComponentsScreen