//02ReactFundamentals.tsx
import React, {useState} from 'react';
import {Button, Image, Text, View} from 'react-native';

/*
    This is react native fundamentals.
    1) Components
    2) JSX
    3) Props
    4) State
*/

//==>Components==================================================================

const ReactFundamentals = () => {
  return (
    <View>
      <ReactNativeComponent />
      <ReactNativeJSX />
      <ReactNativeProps />
      <ReactnativeState />
    </View>
  );
};

//rect native component example
const ReactNativeComponent = () => {
  return (
    <Text style={{fontSize: 20, textAlign: 'center'}}>
      React native Component
    </Text>
  );
};

//react native JSX example
/* 
In the react native jsx syntax  is : {}. 
Whatever you eant to print using the jsx just wrote in {}.
anything you add in {}, like veriables, functions, etc.
*/
const ReactNativeJSX = () => {
  const username = 'Reactnative JSX';
  return (
    <View>
      <Text>Hello {username}</Text>
    </View>
  );
};

//ReactNativeProps
const ReactNativeProps = () => {
  return (
    <View>
      <Text>ReactNativeProps</Text>
      <CatsColor color="black" />
      {/* <CatsColor color="white" /> */}
    </View>
  );
};

//type script
type CatColor = {
  color: string;
};

const CatsColor = (props: CatColor) => {
  return (
    <View>
      <Text>Cats color is : {props.color}</Text>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat1.png'}}
        style={{width: 200, height: 200}}
      />
    </View>
  );
};

//ReactnativeState
const ReactnativeState = function () {
  const [username, setUsername] = useState('Muabrak');

  return (
    <View>
      <Text>ReactnativeState</Text>
      <Text>Username is : {username}</Text>
      <Button
        title="change Username"
        onPress={() => {
          setUsername('Happy');
        }}
      />
    </View>
  );
};

export default ReactFundamentals;
