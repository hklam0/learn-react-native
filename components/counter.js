import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';


const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <View>
                  <Text>COUNTER: {count}</Text>
                  <Button onPress={() => setCount(count + 1)} title="Add"/>
                  <Button onPress={() => {setCount(count - 1)}} title="Decrease"/>
              </View>
  )
}

export default Counter;