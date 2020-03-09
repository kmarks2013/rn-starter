import React, { useReducer } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

//the color will cahnge faster by addning or subtracting 15 instead of 1

const COLOR_INCREMENT = 15

//state === {red: number, green:number, blue:number}
//action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

const reducer = (state, action) =>{
    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount }
        case 'green':
            return {...state, green: state.green + action.amount }
        case 'blue':
            return {...state, blue: state.blue +  action.amount }
        default:
            return state
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

    console.log(state)
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