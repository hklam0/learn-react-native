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
  Button,Image, ScrollView, TextInput
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
    
      <ScrollView>
        <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                
              <Text>Hello, world!</Text>
              <LotsOfGreetings/>
              
              <View>
                  <Text>COUNTER: {count}</Text>
                  <Button onPress={() => setCount(count + 1)} title="Add"/>
                  <Button onPress={() => {setCount(count - 1)}} title="Decrease"/>
              </View>
              <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }}
                style={{width: 200, height: 200}}
              />

            <TextInput
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              defaultValue="Try to type in me!"
            />
        </View>
        </ScrollView>
        
      


  );
}

export default App;
