import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  console.log(props.navigation)
  return (
    <View>
      <Text style={styles.text}>Hello World! </Text>
      <Button 
        onPress={() => console.log('button pressed')}
        title="Go to Components Demo" 
      />
      <TouchableOpacity onPress={() => console.log('list press')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
