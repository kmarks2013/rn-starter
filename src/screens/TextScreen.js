import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName]  = useState('')

    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize="sentences"
                autoCorrect={false}
            />
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

