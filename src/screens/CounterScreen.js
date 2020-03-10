import React, {useReducer} from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

const CounterScreen = () => {
    
    const [state, dispatch] = useReducer(reducer, {counter:0})
    const {counter} = state
 
    return (
        <View>
            <Button
                title="Increase"
                onPress={() =>
                    setCounter(counter + 1)
                }
            />
            <Button 
                title="Decrease"
                onPress={() =>
                    setCounter(counter - 1)
                }
             />
            <Text>Current Count: {counter} </Text>
        </View>
    )
}

const styles = StyleSheet.create()

export default CounterScreen
