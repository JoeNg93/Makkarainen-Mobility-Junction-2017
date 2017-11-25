import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { MapView } from 'expo';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

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

class MapScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Makkarainen',
    headerStyle: { backgroundColor: '#0D1842' },
    headerTitleStyle: { color: 'white' },
    headerRight: (
      <Icon
        type="font-awesome"
        name="bars"
        iconStyle={styles.navBarRightIconStyle}
      />
    )
  });

  state = {
    mapIsLoaded: false
  };

  initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  test() {
    if (this.state.mapIsLoaded) {
      return (
        <View style={styles.bottomNavContainer}>
          <View style={styles.mapPlace}>
            <Icon type="font-awesome" name="map" iconStyle={styles.icons} />
          </View>
          <View style={styles.searchButton}>
            <Icon type="font-awesome" name="share" iconStyle={styles.icons} />
          </View>
          <View style={styles.navButton}>
            <Icon
              type="font-awesome"
              name="location-arrow"
              iconStyle={styles.icons}
            />
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <MapView
          initialRegion={this.initialRegion}
          style={styles.mapContainer}
          provider={MapView.PROVIDER_GOOGLE}
          customMapStyle={MAP_STYLE}
        />
        <View style={styles.bottomNavContainer}>
          <Button icon={{name: 'map', type: 'font-awesome'}}/>
          <Button icon={{name: 'share', type: 'font-awesome', large: true}}/>
          <Button icon={{name: 'location-arrow', type: 'font-awesome'}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  navBarRightIconStyle: {
    margin: 20,
    color: '#ffffff'
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  mapPlace: {
    height: 63,
    width: 63,
    borderRadius: 31,
    backgroundColor: '#F29C35',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#F29C35',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  navButton: {
    height: 63,
    width: 63,
    borderRadius: 31,
    backgroundColor: '#F29C35',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {
    color: '#ffffff'
  }
});

export default MapScreen;
