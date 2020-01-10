import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = <Text>What's up?</Text>
    return (
    <View>
    <Text style={styles.textStyle}>This is the components screen</Text>
    <Text> Hi there!</Text>
    {greeting}
    </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen