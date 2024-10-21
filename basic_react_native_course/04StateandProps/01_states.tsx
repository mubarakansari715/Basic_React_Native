//State

import {useState} from 'react';
import {Button, Text, View} from 'react-native';

//set types of value
type userModel = {
  username: String;
  age: any;
};

//pass direct object model to another component
const dataModel = {
  username: 'Mubarak',
  age: 26,
  lastname: 'ansari',
};

const StateManagementApp = () => {
  const [username, setusername] = useState('Mubarak');
  return (
    <View>
      <Text style={{fontSize: 24, textAlign: 'center'}}>State Management</Text>
      <Text style={{fontSize: 20, textAlign: 'center', marginTop: 20}}>
        Username is : {username}
      </Text>
      <View style={{marginHorizontal: 40, marginTop: 20}}>
        <Button
          title="pressMe"
          onPress={() => {
            setusername('Happyji');
          }}
        />
      </View>
      <PassValueComponent username={'mubarak'} location={'las vagas'} />
      <PassObjectValueComponent {...dataModel} />
    </View>
  );
};

//pass value
const PassValueComponent = (props: any) => {
  console.log('value', props);
  return (
    <View>
      <Text> Selected Username is : {props.username} </Text>
    </View>
  );
};

//pass object
const PassObjectValueComponent = (props: any) => {
  console.log('Objectvalue', props);

  return (
    <View>
      <Text> Selected Username is : {props.username} </Text>
      <Text> Selected age is : {props.age} </Text>
    </View>
  );
};

export default StateManagementApp;
