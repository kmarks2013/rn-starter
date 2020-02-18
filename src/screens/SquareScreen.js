import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

//the color will cahnge faster by addning or subtracting 15 instead of 1
const COLOR_INCREMENT = 15

const SquareScreen = () => {
    //creates the state for red blue and green
    const [red, setRed] = useState(0)
    const [blue, setBlue] = useState(0)
    const [green, setGreen] = useState(0)


    const setColor = (color, change) => {
        // collor is going to be  equal too "red" "green" or 'blue'
        // change will = +15, -15
        if (color === 'red') {
            if (red + change > 255 || red + change < 0){
                return
            } else{
                setRed( red + change )
            }
        } else if (color === 'blue') {
            if (blue + change > 255 || blue +change < 0) {
                return
            } else{
                setBlue( blue + change)
            }
        } else if (color === 'green') {
            if (green + change > 255 || green +change < 0) {
                return
            } else{
                setGreen( green + change)
            }
        }
    }


    // console.log(red)
    return (
        <View>
        <ColorCounter 
            onIncrease={() => setColor("red", COLOR_INCREMENT)}
            onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
            color="Red" 

        />
        <ColorCounter 
            onIncrease={() => setBlue( blue + COLOR_INCREMENT )}
            onDecrease={() => setBlue( blue - COLOR_INCREMENT )}
            color="Blue"
        />
        <ColorCounter
            onIncrease={() => setGreen( green + COLOR_INCREMENT )}
            onDecrease={() => setGreen( green - COLOR_INCREMENT )} 
            color="Green"
        />
        <View style={{height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}
const styles = StyleSheet.create({})

export default SquareScreen