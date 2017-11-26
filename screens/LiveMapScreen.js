import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { MapView } from 'expo';
import _ from 'lodash';
import axios from 'axios';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class LiveMapScreen extends React.Component {
  initialRegion = {
    latitude: 61.498812,
    longitude: 23.7545664,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  state = {
    buses: {}
  };

  randomColors = ['#0D1842', '#F29C35', '#FF7D71'];

  renderBuses = () => {
    return Object.keys(this.state.buses).map(busRef => {
      return (
        <MapView.Marker coordinate={this.state.buses[busRef]} key={busRef}>
          <View
            style={{
              borderRadius: 50,
              width: 35,
              height: 35,
              paddingTop: 5,
              backgroundColor: this.randomColors[
                Math.floor(Math.random() * this.randomColors.length)
              ]
            }}
          >
            <Icon type="font-awesome" name="bus" color="white" size={20} />
          </View>
        </MapView.Marker>
      );
    });
  };

  getData() {
    setInterval(() => {
      //     // Make a request for a user with a given ID
      // let myDate = new Date(2017, 10, 26, 10, 15, 0);
      let myDate = new Date();
      let day = 'sunday';
      let stopPointID = '0514';
      let endStopPointId = '0522';
      let startIndex = 0;
      axios
        .get(
          'http://data.itsfactory.fi/journeys/api/1/journeys?stopPointId=' +
            stopPointID +
            '&dayTypes=' +
            day +
            '&startIndex=' +
            startIndex
        )
        .then(response => {
          //console.log(_.uniqBy(response.data.body, x => x.activityUrl));
          _.uniqBy(response.data.body, x => x.activityUrl)
            .filter(journey => {
              const stopPointNames = journey.calls.map(
                x => x.stopPoint.shortName
              );
              return (
                stopPointNames.indexOf(stopPointID) !== -1 &&
                stopPointNames.indexOf(endStopPointId) !== -1
              );
            })
            .forEach(element => {
              //  console.log(element.calls);
              let arrivalTime = element.calls.find(call => {
                return call.stopPoint.shortName === stopPointID;
              }).arrivalTime;

              let elementTime = new Date(
                2017,
                10,
                26,
                arrivalTime.substr(0, 2),
                arrivalTime.substr(3, 2),
                arrivalTime.substr(6, 2)
              );
              //console.log(elementTime + " -- " + myDate);
              if (elementTime > myDate) {
                //  console.log(element.activityUrl);
                axios.get(element.activityUrl).then(res => {
                  res.data.body.forEach(ele => {
                    console.log(ele);
                    if (ele != null) {
                      const {
                        vehicleRef,
                        vehicleLocation
                      } = ele.monitoredVehicleJourney;
                      const { longitude, latitude } = vehicleLocation;
                      console.log(vehicleRef);
                      console.log(longitude);
                      console.log(latitude);
                      console.log(elementTime.toTimeString());
                      this.setState({
                        buses: {
                          ...this.state.buses,
                          [vehicleRef]: {
                            longitude: Number(longitude),
                            latitude: Number(latitude)
                          }
                        }
                      });
                    }
                  });
                });
              }
            });
        })
        .catch(function(error) {
          console.log(error);
        });

      console.log('--------');
    }, 1000);
  }

  componentDidMount() {
    this.getData();
  }

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
    headerTintColor: 'white',
    tabBarIcon: ({ tintColor }) => (
      <Icon type="font-awesome" name="mail-forward" color={tintColor} />
    ),
    tabBarLabel: 'Go To'
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView initialRegion={this.initialRegion} style={styles.mapContainer}>
          {this.renderBuses()}
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
