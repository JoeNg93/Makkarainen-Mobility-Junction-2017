import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

class ManageScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Manage',
    headerStyle: { backgroundColor: '#0D1842' },
    headerTitleStyle: { color: 'white' },
    headerRight: (
      <Icon
        type="font-awesome"
        name="bars"
        iconStyle={styles.navBarRightIconStyle}
      />
    ),
    tabBarIcon: ({ tintColor }) => (
      <Icon type="font-awesome" name="edit" color={tintColor} />
    ),
    tabBarLabel: 'Manage'
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Manage Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBarRightIconStyle: {
    margin: 20,
    color: '#ffffff'
  }
});

export default ManageScreen;
