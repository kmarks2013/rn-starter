import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

//the color will cahnge faster by addning or subtracting 15 instead of 1

const COLOR_INCREMENT = 15

const SquareScreen = () => {


    // console.log(blue)
    return (
        <View>
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Red"
            />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Blue"
            />
            <ColorCounter
                onIncrease={() => }
                onDecrease={() => }
                color="Green"
            />
            <View style={{height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}
const styles = StyleSheet.create({})

export default SquareScreen