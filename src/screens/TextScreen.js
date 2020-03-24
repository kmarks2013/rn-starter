import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [password, setPassword]  = useState('')
    return (
        <View>
            <Text> Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="sentences"
                autoCorrect={false}
                value={password}
                textContentType= "password"
                onChangeText={ (newValue) => setPassword(newValue) }
            />
            <Text>My name is {name}</Text>
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

