import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27
import { SecondScreen } from './SecondScreen.js'

class HomeScreen extends React.Component {

  state = {
    count:0,
  }

  // affects the header, amongst other things
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.pageTitle : 'Home Page',
    }
  }

  modifyCount(num) {
    const {count} = this.state;
    this.setState({
      count: count+num,
    })
  }


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{this.state.count}</Text>
        <Button
          title="Second Sreen"
          onPress={() => {this.props.navigation.navigate('SecondScreen', {
            passedInt: 78,
            passedTxt:'fo sho',
            pageTitle:'SecondScreen!',
          });
        }}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({pageTitle: 'Updated!'})}
        />
        <View style={{flexDirection:'row'}}>
          <Button
            style={{color:'green'}}
            title="+"
            onPress={() => this.modifyCount(1)}
          />
          <Button
            title="-"
            onPress={() => this.modifyCount(-1)}
          />
          <Button
            title="-"
            onPress={() => console.log("-")}
          />                  
        </View>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    SecondScreen:{
      screen: SecondScreen,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}