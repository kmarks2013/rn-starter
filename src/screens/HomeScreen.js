import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  // console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Hello World! </Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo" 
      />
      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Demo"
      />
      {/* <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        onPress={() => navigation.navigate("Images")}
        title="Images Demo"
      />
      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate("Color")}
        title="Color Demo"
      />
      <Button
        onPress={() => navigation.navigate("Square")}
        title="Square Demo"
      />
      <Button
        onPress={() => navigation.navigate("Text")}
        title="Text Demo"
      />
      <Button
        onPress={() => navigation.navigate("Box")}
        title="Box Demo"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
