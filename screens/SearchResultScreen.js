import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {Icon, Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class App extends React.Component {
  render() {
    return (

      <View style={{flex: 1,}}>
        {/navbar/}
        <View style={{flex: 1,
                      backgroundColor: '#0D1842'}}></View>
        {/map area/}
        <View style={{flex: 8,
                      backgroundColor: '#F29C35',
                      flexDirection: 'column'}}>
          <View style={{flex: 1}}>
            <Button
              icon={{name: 'bell-slash',
                    type: 'font-awesome',
                    color: 'white',
                    style: {left: 4},
                    size: 15}}
              buttonStyle={{height: 50,
                            width: 50,
                            borderRadius: 50/2,
                            backgroundColor: '#000000',
                            marginTop: 20,
                            marginLeft: 10}}
            />
            <Button
              icon={{name: 'calendar',
                    type: 'font-awesome',
                    color: 'white',
                    style: {left: 5},
                    size: 15
                    }}
              buttonStyle={{height: 50,
                            width: 50,
                            borderRadius: 50/2,
                            backgroundColor: '#000000',
                            marginTop: 20,
                            marginLeft: 10}}
            />
            <Text style={{position: 'absolute',
                          top: 35,
                          left: 87,
                          color: '#ffffff',
                          fontSize: 14
                        }}>Set notification</Text>
            <Text style={{position: 'absolute',
                          top: 105,
                          left: 87,
                          color: '#ffffff',
                          fontSize: 14
                        }}>Set schedule</Text>
          </View>
          {/white box/}
          <View style={{flex: 3,
                        position: 'absolute',
                        bottom: 30,
                        left: (SCREEN_WIDTH-337)/2,
                        backgroundColor: '#FFFFFF',
                        height: 185,
                        width: 337,
                        borderRadius: 20,
                        }}>
            <View style={{flex: 3,
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'row'}}>
              <View style={{flex: 7,

                            }}>
                <Icon
                  iconStyle={{fontSize: 40,
                              marginTop: 10,
                              marginLeft: 20}}
                  type='font-awesome'
                  name='bus'
                />

              </View>
              <View style={{flex: 16,
                            flexDirection: 'column',
                            }}>
                <Text style={{flex:3,
                              fontWeight: 'bold',
                              fontSize: 22,
                              marginTop: 20}}>
                  253
                </Text>
                <Text style={{flex:2,
                              color: 'grey',
                              fontSize: 10}}>
                  250m walking, leave in 10 minutes
                </Text>
              </View>
              <Button
                icon={{name: 'star',
                      type: 'font-awesome',
                      style: {left: 5}}}
                buttonStyle={{height: 50,
                              width: 50,
                              borderRadius: 50/2,
                              backgroundColor: '#000000',
                              marginBottom: 60,
                              marginRight: 10
                              }}
              />
            </View>
            <View style={{flex: 1,
                          flexDirection: 'row',
                          justifyContent: 'center',}}>
                {/grey dots/}
                <Icon
                  type='font-awesome'
                  name='circle'
                  iconStyle={{color: '#0d1842',
                              fontSize: 6}}
                />
                <Icon
                  type='font-awesome'
                  name='circle'
                  iconStyle={{color: '#c4c4c4',
                              fontSize: 6,
                              marginLeft: 10}}
                />
            </View>
            <View style={{flex: 2,
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          }}>
              {/route/}
              <Text style={{textAlign: 'center'}}>
                Kajaanintie 40,{"\n"}Oulu
              </Text>
              <Icon
                type='font-awesome'
                name='exchange'
                iconStyle={{color: '#F29C35',
                            fontSize: 14,
                            marginLeft: 30,
                            marginRight: 30}}
              />
              <Text style={{textAlign: 'center'}}>
                Hanhitie 17,{"\n"}Oulu
              </Text>
            </View>
            <View style={{justifyContent: 'center',
                          alignItems: 'center'
                        }}>
              <Button
                title='Show live map'
                buttonStyle={{width: 144,
                              height: 34,
                              borderRadius: 10,
                              backgroundColor: '#F29C35',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
              />
            </View>
            <Icon
              type='font-awesome'
              name='angle-down'
              iconStyle={{justifyContent: 'center',
                          alignItems: 'center',
                          color: '#B2B2B2'
                        }}
            />
          </View>
        </View>
        {/bottombar/}
        <View style={{flex: 1,
                      backgroundColor: '#0D1842'}}></View>
      </View>



    );
  }
}

const styles = StyleSheet.create({

});

export default App;