import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    return (
        <View>
            <TextInput/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen

