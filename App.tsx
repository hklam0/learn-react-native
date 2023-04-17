/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const style = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const Greeting = (props) => {
  return (
    <View>
      <Text>Hello {props.name!}</Text>
    </View>
  )
}

const LotsOfGreetings = () => {
  return (
    <View>
      <Greeting name="Jen"/>
      <Greeting name="Ash"/>
      <Greeting name="Ally"/>
    </View>
  )
}



function App(): JSX.Element {
  
  return (
    

        <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Hello, world!</Text>
              <LotsOfGreetings/>
        </View>



  );
}

export default App;
