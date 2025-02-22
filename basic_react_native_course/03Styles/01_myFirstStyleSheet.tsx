//03StyleSheet.txs

import {StyleSheet, Text, View} from 'react-native';

/*
  React native styles:
  1) Create() //create a style
  2) Compose() //combine two style
  3) Fletten() // give you first style in object
  4) absoluteFill // create overlays with position absolute and zero positioning
  5) absoluteFillObject() //almost same, just decaltion is diffrent
  6) hairlineWidth //This is defined as the width of a thin line on the platform. like border line
*/

const MyStyleSheet = () => {
  return (
    <View style={mStyle.container}>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
        MyStyleSheet Example
      </Text>
      <CreateMyStyle />
      <FlexBoxDemo />
    </View>
  );
};

const CreateMyStyle = () => {
  return (
    <View>
      <Text style={mStyle.box}> ReactNative</Text>
    </View>
  );
};

const mStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  box: {
    fontSize: 24,
    color: 'black',
    backgroundColor: 'lightblue',
    padding: 24,
    margin: 24,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});

//flex box example
const FlexBoxDemo = () => {
  return (
    <View style={flexBoxStyle.container}>
      <Text style={flexBoxStyle.box}>Happy</Text>
      <Text style={flexBoxStyle.box}>Happy ansari</Text>
      <Text style={flexBoxStyle.box}>React</Text>
      <Text style={flexBoxStyle.box}>android developer</Text>
      <Text style={flexBoxStyle.box}>Mubarak ansari</Text>
      <Text style={flexBoxStyle.box}>Javascript</Text>
      <Text style={flexBoxStyle.box}>Happy</Text>
    </View>
  );
};

const flexBoxStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  box: {
    fontSize: 24,
    padding: 10,
    backgroundColor: 'lightpink',
    borderColor: 'black',
    borderWidth: 1.5,
    margin: 5,
    borderRadius: 6,
  },
});

export default MyStyleSheet;