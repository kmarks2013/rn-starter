import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        // option 1 for adding keys
        { name: 'Friend #1', age: "Age 20" /*key: "1"*/},
        { name: 'Friend #2', age: "Age 45"/*key: "2"*/},
        { name: 'Friend #3', age: "Age 32"/*key: "3"*/},
        { name: 'Friend #4', age: "Age 27"/*key: "4"*/},
        { name: 'Friend #5', age: "Age 53"/*key: "5"*/},
        { name: 'Friend #6', age: "Age 30"/*key: "6"*/},
        { name: 'Friend #7', age: "Age 20"/*key: "7"*/},
        { name: 'Friend #8', age: "Age 29"/*key: "8"*/},
        { name: 'Friend #9', age: "Age 40"/*key: "9"*/}
    ]

    return (
        <FlatList 
            // horizontal={false} //same as horizontal = {true} allows for side scrolling
            // showsHorizontalScrollIndicator={false}
            keyExtractor= {friend => friend.name}
            data={friends} 
            renderItem={({item}) =>{
                // destructures element from this: element === {item: {name: 'Friend #1'}, index : 0}
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }} 
       />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen