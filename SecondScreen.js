import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export class SecondScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.pageTitle : 'Home Page',
    }
  }
  
  render() {
    const { params } = this.props.navigation.state;

    const keyz = this.props.navigation.state;

    const params2 = this.props.navigation.state;
    const num = params ? params.passedInt : null;
    const str = params ? params.passedTxt : null;
    console.log(params2);
    
    console.log('key: '+keyz.key);
    console.log(keyz.params);

    console.log('passedInt: '+keyz.params.passedInt);

    return (
      <View style={styles.container}>
        <Text>This is the second Screen</Text>
        <Text>passedInt: {JSON.stringify(num)}</Text>
        <Text>passedTxt: {JSON.stringify(str)}</Text>
        <Text>passedTxt: {JSON.stringify(str)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

