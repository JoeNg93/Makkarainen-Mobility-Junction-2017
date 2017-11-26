import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { MapView } from 'expo';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LiveMapScreen extends React.Component {
  initialRegion = {
    latitude: 61.498812,
    longitude: 23.7545664,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Live Map',
    headerStyle: { backgroundColor: '#0D1842' },
    headerTitleStyle: { color: 'white' },
    headerRight: (
      <Icon
        type="font-awesome"
        name="bars"
        iconStyle={styles.navBarRightIconStyle}
      />
    ),
    headerTintColor: 'white'
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          initialRegion={this.initialRegion}
          style={styles.mapContainer}
        />
        <View style={{ flex: 1, position: 'absolute', backgroundColor: 'transparent' }}>
          <Button
            icon={{
              name: 'bell-slash',
              type: 'font-awesome',
              color: 'white',
              style: { left: 4 },
              size: 15
            }}
            buttonStyle={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: '#000000',
              marginTop: 20,
              marginLeft: 10
            }}
          />
          <Button
            icon={{
              name: 'calendar',
              type: 'font-awesome',
              color: 'white',
              style: { left: 5 },
              size: 15
            }}
            buttonStyle={{
              height: 50,
              width: 50,
              borderRadius: 50 / 2,
              backgroundColor: '#000000',
              marginTop: 20,
              marginLeft: 10
            }}
          />
          <Text
            style={{
              position: 'absolute',
              top: 35,
              left: 87,
              color: '#000000',
              fontSize: 14
            }}
          >
            Set notification
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 105,
              left: 87,
              color: '#000000',
              fontSize: 14
            }}
          >
            Set schedule
          </Text>
        </View>
        <View
          style={{
            flex: 3,
            position: 'absolute',
            bottom: -15,
            left: (SCREEN_WIDTH - 337) / 2,
            backgroundColor: '#FFFFFF',
            height: 113,
            width: 337,
            borderRadius: 20
          }}
        >
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}
          >
            <View
              style={{
                flex: 7
              }}
            >
              <Icon
                iconStyle={{
                  fontSize: 40,
                  marginTop: 10,
                  marginLeft: 20
                }}
                type="font-awesome"
                name="bus"
              />
            </View>
            <View
              style={{
                flex: 16,
                flexDirection: 'column'
              }}
            >
              <Text
                style={{
                  flex: 3,
                  fontWeight: 'bold',
                  fontSize: 22,
                  marginTop: 20
                }}
              >
                253
              </Text>
              <Text
                style={{
                  flex: 2,
                  color: 'grey',
                  fontSize: 10
                }}
              >
                250m walking, leave in 10 minutes
              </Text>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <Icon
              type="font-awesome"
              name="angle-up"
              iconStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                color: '#B2B2B2'
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1
  }
});

export default LiveMapScreen;
