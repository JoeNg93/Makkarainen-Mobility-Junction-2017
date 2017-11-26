import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ActivityIndicator } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { MapView } from 'expo';
import axios from 'axios';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const MAP_STYLE = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#212121 '
      }
    ]
  },
  {
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#0d1842 '
      },
      {
        lightness: -15
      }
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#757575 '
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e '
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: 'off'
      }
    ]
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd '
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#1b3189 '
      },
      {
        saturation: -50
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575 '
      }
    ]
  },
  {
    featureType: 'poi.attraction',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#1b3189 '
      },
      {
        saturation: -50
      }
    ]
  },
  {
    featureType: 'poi.business',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#1b3189 '
      },
      {
        saturation: -50
      }
    ]
  },
  {
    featureType: 'poi.medical',
    stylers: [
      {
        color: '#1b3189 '
      },
      {
        saturation: -50
      }
    ]
  },
  {
    featureType: 'poi.park',
    stylers: [
      {
        color: '#1b3189 '
      },
      {
        saturation: -50
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#181818 '
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#187216 '
      },
      {
        saturation: -70
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161 '
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#1b1b1b '
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#b1b1b1 '
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#373737 '
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2747c9 '
      },
      {
        saturation: -70
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#3c3c3c '
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2747c9 '
      },
      {
        saturation: -70
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: '#4e4e4e '
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#2747c9 '
      },
      {
        saturation: -40
      },
      {
        lightness: -20
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#1a2e7d '
      },
      {
        saturation: -55
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575 '
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#000000 '
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#5aa3f3 '
      },
      {
        saturation: -50
      },
      {
        lightness: -20
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#3d3d3d '
      }
    ]
  }
];

class SearchResultScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Route',
    headerStyle: { backgroundColor: '#0D1842' },
    headerTitleStyle: { color: 'white' },
    headerRight: (
      <Icon
        type="font-awesome"
        name="bars"
        iconStyle={styles.navBarRightIconStyle}
      />
    ),
    headerTintColor: 'white',
    tabBarIcon: ({ tintColor }) => (
      <Icon type="font-awesome" name="mail-forward" color={tintColor} />
    ),
    tabBarLabel: 'Go To'
  });

  initialRegion = {
    latitude: 61.498812,
    longitude: 23.7545664,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  state = {
    coordinates: []
  };

  componentWillMount = async () => {
    const response = await axios.get(
      'http://data.itsfactory.fi/journeys/api/1/journeys/542280?dayTypes=sunday'
    );
    const { body } = response.data;
    const coordinates = body[0].calls.reduce((acc, currentCall) => {
      const latitude = Number(currentCall.stopPoint.location.split(',')[0]);
      const longitude = Number(currentCall.stopPoint.location.split(',')[1]);
      return acc.concat({ latitude, longitude });
    }, []);
    this.setState({ coordinates });
  };

  render() {
    if (this.state.coordinates.length) {
      return (
        <View style={{ flex: 1 }}>
          <MapView
            initialRegion={this.initialRegion}
            style={{ flex: 1, justifyContent: 'flex-end' }}
          >
            <MapView.Polyline
              coordinates={this.state.coordinates}
              strokeWidth={3}
              strokeColor="#F29C35"
            />
            <MapView.Circle
              center={this.state.coordinates[0]}
              radius={50}
              strokeColor="white"
              fillColor="#F29C35"
            />
            <MapView.Circle
              center={this.state.coordinates[this.state.coordinates.length - 1]}
              radius={50}
              strokeColor="white"
              fillColor="#F29C35"
            />
            <MapView.Marker coordinate={{ latitude: 61.498361, longitude: 23.769732 }}/>
          </MapView>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: 'transparent'
            }}
          >
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
                top: 25,
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
              bottom: 30,
              left: (SCREEN_WIDTH - 337) / 2,
              backgroundColor: '#FFFFFF',
              height: 185,
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
              <Button
                icon={{
                  name: 'star',
                  type: 'font-awesome',
                  style: { left: 5 }
                }}
                buttonStyle={{
                  height: 50,
                  width: 50,
                  borderRadius: 50 / 2,
                  backgroundColor: '#000000',
                  marginBottom: 60,
                  marginRight: 10
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Icon
                type="font-awesome"
                name="circle"
                iconStyle={{
                  color: '#0d1842',
                  fontSize: 6
                }}
              />
              <Icon
                type="font-awesome"
                name="circle"
                iconStyle={{
                  color: '#c4c4c4',
                  fontSize: 6,
                  marginLeft: 10
                }}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ textAlign: 'center' }}>
                Koskipuisto G ,{'\n'}Tempere
              </Text>
              <Icon
                type="font-awesome"
                name="exchange"
                iconStyle={{
                  color: '#F29C35',
                  fontSize: 14,
                  marginLeft: 30,
                  marginRight: 30
                }}
              />
              <Text style={{ textAlign: 'center' }}>Haurala,{'\n'}Tempere</Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Button
                title="Show live map"
                buttonStyle={{
                  width: 144,
                  height: 34,
                  borderRadius: 10,
                  backgroundColor: '#F29C35',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={() => this.props.navigation.navigate('liveMap') }
              />
            </View>
            <Icon
              type="font-awesome"
              name="angle-down"
              iconStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                color: '#B2B2B2'
              }}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="small"/>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  navBarRightIconStyle: {
    margin: 20,
    color: '#ffffff'
  }
});

export default SearchResultScreen;
