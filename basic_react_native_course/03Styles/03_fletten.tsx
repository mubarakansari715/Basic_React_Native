//Fletten

import {StyleSheet, Text, View} from 'react-native';

/* 
Flattens an array of style objects, into one aggregated style object.
-> Inshot combine two style into one
*/
const Fletten = () => {
  return (
    <View style={flettenDemoStyle}>
      <Text style={style1.box}>Demo Fletten</Text>
    </View>
  );
};

const style1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
  },
  box: {
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
});

const style2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
});

const flettenDemoStyle = StyleSheet.flatten([
  style1.container,
  style2.container,
]);

console.log(flettenDemoStyle);

export default Fletten;
