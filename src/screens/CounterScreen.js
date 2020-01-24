import React, {useState} from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Button 
                title="Increase" 
                onPress={() => {
                    console.log("increase was clicked")
                    }
                }
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    console.log('decrease was clicked')
                    }
                }  
             />
            <Text>Current Count: </Text>
        </View>
    )
}

const styles = StyleSheet.create()

export default CounterScreen 
