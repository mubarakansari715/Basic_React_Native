//02compose.tsx
/*
Combines two styles such that style2 will override any styles in style1.
 If either style is falsy, the other one is returned without allocating
 an array, saving allocations and maintaining reference equality for 
 PureComponent checks.

 -> Inshort when we used compose of style, that will return to the second style
*/
import {StyleSheet, Text, View} from 'react-native';

const Compose = () => {
  return (
    <View style={compose}>
      <Text style={style1.box}>Hello Compose</Text>
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
  },
  box: {
    fontSize: 30,
    textAlign: 'center',
    alignItems: 'center',
  },
});

const compose = StyleSheet.compose(style1.container, style2.container)
export default Compose;
