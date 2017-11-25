import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {Icon, Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height / 3.1;

class App extends React.Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.navbar}>
        </View>

        <View style={styles.picture}>
          <Image source={require('../assets/bus.png')} style={{
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,
          }} />
        </View>

        <View style={styles.behind}>
          <View style={{flex: 4}}></View>
          <View style={{bottom: 25}}>
            <Text style={{color: '#0D1842'}}>Browse from</Text>
          </View>
          <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                bottom: 10}}>
            <View style={{
                  justifyContent: 'center'}}>
              <Button
                icon={{
                  name: 'star',
                  type: 'font-awesome',
                  style: {left: 5},
                  color: '#FFFFFF',
                }}
                buttonStyle={{
                  borderRadius: 30,
                  width: 60,
                  height: 60,
                  backgroundColor: '#0D1842',
                }}
              />
              <Text
                style={{color: '#0D1842',
                fontSize: 10,
                textAlign: 'center',
                marginTop: 5,
                }}>Favourite list
              </Text>
            </View>
            <View style={{justifyContent: 'center',}}>
              <Button
                icon={{
                  name: 'list',
                  type: 'font-awesome',
                  style: {left: 5},
                  color: '#FFFFFF',
                }}
                buttonStyle={{
                  borderRadius: 30,
                  width: 60,
                  height: 60,
                  backgroundColor: '#0D1842',
                }}
              />
              <Text
                style={{color: '#0D1842',
                fontSize: 10,
                textAlign: 'center',
                marginTop: 5,
              }}>Recent
              </Text>
            </View>
            <View style={{justifyContent: 'center',}}>
              <Button
                icon={{
                  name: 'calendar',
                  type: 'font-awesome',
                  style: {left: 5},
                  color: '#FFFFFF',
                }}
                buttonStyle={{
                  borderRadius: 30,
                  width: 60,
                  height: 60,
                  backgroundColor: '#0D1842',
                }}
              />
              <Text
                style={{color: '#0D1842',
                fontSize: 10,
                textAlign: 'center',
                marginTop: 5,
              }}>Schedule
              </Text>
            </View>
          </View>
          </View>

        <View style={styles.bottomBar}>
        </View>
        <View style={styles.box}>
          <View style={styles.route}>
            <View style={styles.from}>
              <Text style={[styles.grey, {bottom: 5}]}>From</Text>
              <Text style={{textAlign: 'center'}}>Kajaanintie 40,{"\n"}Oulu</Text>
            </View>
            <Icon iconStyle={styles.arrow}
              type='font-awesome'
              name='exchange'
            />
            <View style={styles.to}>
              <Text style={[styles.grey, {bottom: 5}]}>To</Text>
              <Text style={{textAlign: 'center'}}>Hanhitie 17,{"\n"}Oulu</Text>
            </View>
          </View>
          <View style={styles.search}>
            <Text style={[styles.grey, {bottom: 20}]}>Date & Time</Text>
            <View style={{flexDirection:'row', bottom: 20}}>
              <Text>Today </Text>
              <Icon iconStyle={styles.smallArrow}
              type='font-awesome'
              name='angle-down'/>
              <Text style={{marginLeft: 10}}>  09:00 </Text>
              <Icon iconStyle={styles.smallArrow}
              type='font-awesome'
              name='angle-down'/>
            </View>
            <View style={{flexDirection:'row'}}>
              <Icon iconStyle={styles.chosen}
              type='font-awesome'
              name='dot-circle-o'/>
              <Text style={{marginRight: 10, top: 18}}> Departure time</Text>
              <Icon iconStyle={styles.chose}
              type='font-awesome'
              name='circle-o'/>
              <Text style={[styles.grey, {top: 18}]}> Arrival time</Text>
            </View>
          </View>
          <View>
            <Button
              title="Find route"
              buttonStyle={styles.orange}
            />
          </View>
          </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0D1842'
  },
  navbar: {
    flex: 1,
    backgroundColor: '#0D1842',
    alignItems: 'center',
  },
  behind: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: '#E5E5E5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  picture: {
    flex: 4,
  },
  box: {
    flex: 1,
    width: 320,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    left: (SCREEN_WIDTH - 320) / 2,
    top: SCREEN_HEIGHT+28,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.26,

  },
  route: {
    marginTop: 10,
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  from: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  grey: {
    color: '#A3A3A3',
    fontSize: 12,

  },
  arrow: {
    flex: 1,
    marginTop: 25,
    color: '#B2B2B2'
  },
  to: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    marginTop: 5,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  smallArrow: {
    color: '#B2B2B2'
  },
  chosen: {
    top: 13
  //  height: 8,
  },
  chose: {
    top: 13,
    //height: 8,
    color: '#B2B2B2'
  },
  browse: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  empty: {
    flex: 6
  },
  smallTitle: {
    flex: 1,
    color: '#0D1842',
    justifyContent: 'center',
    fontSize: 12,
    alignItems: 'center',
    fontWeight: 'bold',
    marginTop:50
  },
  container: {
    flex: 3,
  //  justifyContent: 'center',
    //alignItems: 'center',
    //overflow: 'hidden'

  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'

  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 63,
    height: 63,
    borderRadius: 63/2,
    backgroundColor: '#0D1842',
    marginLeft: 10,
    marginRight: 10
  },
  favourite: {
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#FFFFFF',
    overflow: 'hidden'
  },
  recent: {
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#FFFFFF',
    overflow: 'hidden'
  },
  schedule: {
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#FFFFFF',
    overflow: 'hidden'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  orange: {
    bottom: -11,
    width: 150,
    height: 26,
    borderRadius: 20,
    backgroundColor: '#F29C35',
  },
  bottomBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default App;
