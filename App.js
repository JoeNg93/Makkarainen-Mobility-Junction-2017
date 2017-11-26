import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MapScreen from './screens/MapScreen';
import SearchScreen from './screens/SearchScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import LiveMapScreen from './screens/LiveMapScreen';

const MainNavigator = TabNavigator(
  {
    mapContainer: { screen: StackNavigator({ map: { screen: MapScreen } }) },
    searchContainer: {
      screen: StackNavigator({
        search: { screen: SearchScreen },
        searchResult: { screen: SearchResultScreen },
        liveMap: { screen: LiveMapScreen }
      })
    }
  },
  { animationEnabled: true, lazy: true }
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
