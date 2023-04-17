/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
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

  const [count, setCount] = useState(0)
  
  return (
    
      
        <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                
              <Text>Hello, world!</Text>
              <LotsOfGreetings/>
              
              <View>
                  <Text>You clicked {count} times!</Text>
                  <Button onPress={() => setCount(count + 1)} title="Click me!"/>
              </View>
        </View>
  
        
      


  );
}

export default App;
