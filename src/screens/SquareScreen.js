import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const setColor = (color, change) => {
        //color === 'red' 'green' or 'blue'
        //change === + or - 15
        if (color === 'red')
            if (red + change >  255 || red + change < 0 ) {
                return
            } else {
                setRed(red + change)
            }
        if (color=== 'green')
            if (green + change > 255 || green + change < 0){
                return
            } else {
                setGreen(green+change)
            } 
        if (color=== 'blue')
            if (blue + change > 255 || blue + change < 0){
                return
            } else {
                setBlue(blue+change)
            } 
    }

    // console.log(red)
    return <View>
        <ColorCounter 
            onIncrease={() => setColor('red', COLOR_INCREMENT)} 
            onDecrease={() => setColor('red', (-1 * COLOR_INCREMENT))}
            test="test"
            color="Red"
        />
        <ColorCounter 
            onIncrease={() => setBlue(blue + COLOR_INCREMENT)} 
            onDecrease={() => setBlue(-1* - COLOR_INCREMENT)}
            color="Blue"
        />
        <ColorCounter 
            onIncrease={() => setGreen(green + COLOR_INCREMENT)} 
            onDecrease={() => setGreen(-1 * COLOR_INCREMENT)}
            color="Green"
        />
        <View style={{height: 150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        
    </View>
    
}
const styles = StyleSheet.create({})

export default SquareScreen