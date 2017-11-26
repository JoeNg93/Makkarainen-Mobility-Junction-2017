import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import LiveMapScreen from './screens/LiveMapScreen';
import BottomNavBar from './components/BottomNavBar';
import ManageScreen from './screens/ManageScreen';

const MainNavigator = TabNavigator(
  {
    mapContainer: { screen: StackNavigator({ map: { screen: MapScreen } }) },
    searchContainer: {
      screen: StackNavigator({
        search: { screen: SearchScreen },
        searchResult: { screen: SearchResultScreen },
        liveMap: { screen: LiveMapScreen }
      })
    },
    manageContainer: {
      screen: ManageScreen
    }
  },
  {
    animationEnabled: true,
    lazy: true,
    tabBarOptions: {
      style: {
        backgroundColor: '#0D1842',
      },
      activeTintColor: '#F29C35',
      inactiveTintColor: 'white',
      labelStyle: { fontSize: 12 },
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
