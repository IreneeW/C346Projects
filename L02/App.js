import React from 'react';
import {View, Text} from 'react-native';
/*L01 Exercise 1*/
const Welcome = ()=> {
  return (
      <View>
        <Text>
          Welcome to C346 - Mobile App Development
        </Text>
      </View>
  );
};

//export default Welcome;

/*L01 Exercise 2*/
const Welcome2 = ()=> {
  return (
      <View>
        <Text>
          These are my modules this semester:
        </Text>
      </View>
  );
};

class ModuleInfo2 extends React.Component {
  render() {
    return (
        <View>
          <Welcome2/>
        </View>
    )
  }
}

//export default ModuleInfo2;

/*L01 Exercise 3*/
const Welcome3 = ({code,name})=> {
  return (
      <View>
        <Text>
          Welcome to {code} - {name}
        </Text>
      </View>
  );
};

class ModuleInfo3 extends React.Component {
  render() {
    return (
        <View>
          <Welcome2/>
          <Welcome3 code="C346" name="Mobile App Development"/>
          <Welcome3 code="C382" name="IT Service Delivery"/>
          <Welcome3 code="A002" name="Eating well, Living well"/>
        </View>
    )
  }
}

export default ModuleInfo3;
