import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const ReactNativeTimers = () => {
  const [message, setMessage] = useState('Press the button');

  const onPressButtonHandling = () =>{
    setMessage("")
  }

  return (
    <View>
      <Text style={{color: 'red', fontSize: 24, textAlign: 'center'}}>
        React Native Timers
      </Text>

      <Text style={{fontSize: 20}}> 1. setTimeout, clearTimeout</Text>
      <Text style={{margin: 20}}>Set Timer message is : {message}</Text>
      <View style={{marginHorizontal: 20}}>
        <Button title="Tapping me" onPress={onPressButtonHandling} />
      </View>
    </View>
  );
};

export default ReactNativeTimers;
