import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';

function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./image/1.jpeg')}
        style={{width: '100%', height: '100%'}}
      />

      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: '30%',
          position: 'absolute',
          top: 30,
          justifyContent: 'center',
        }}>

{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            position: 'absolute',
            width: '100%',
            height: 150,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                1*2=2
              </Text>
            </View>
          </BlurView>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: '30%',
          position: 'absolute',
          top: 200,
          justifyContent: 'center',
        }}>

{/* --------- --------- */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                1
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            marginRight:20,
            marginLeft:20,
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                2
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                3
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}

      </View>
{/* ---------satr2--------- */}
<View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: '30%',
          position: 'absolute',
          top:320,
          justifyContent: 'center',
        }}>

{/* --------- --------- */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                4
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            marginRight:20,
            marginLeft:20,
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                5
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                6
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}

      </View>
{/* ---------satr2--------- */}
{/* ---------satr3--------- */}
<View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: '30%',
          position: 'absolute',
          top:440,
          justifyContent: 'center',
        }}>

{/* --------- --------- */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                7
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            marginRight:20,
            marginLeft:20,
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                8
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                9
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}

      </View>
{/* ---------satr3--------- */}
{/* ---------satr4--------- */}
<View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: '30%',
          position: 'absolute',
          top:560,
          justifyContent: 'center',
        }}>

{/* --------- --------- */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                +
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            marginRight:20,
            marginLeft:20,
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                0
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                -
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}

      </View>
{/* ---------satr4--------- */}
{/* ---------satr5--------- */}
<View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: '30%',
          position: 'absolute',
          top:680,
          justifyContent: 'center',
        }}>

{/* --------- --------- */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                *
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            marginRight:20,
            marginLeft:20,
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                /
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}
        <View
          style={{
            borderWidth: 1,
            borderColor: 'lightblue',
            width: 100,
            height: 100,
            borderRadius: 20,
            overflow: 'hidden',
          }}>
          <BlurView
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              borderRadius: 20,
            }}
            blurType="light"
            blurAmount={5}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                =
              </Text>
            </View>
          </BlurView>
        </View>
{/* ------------------ */}

      </View>
{/* ---------satr5--------- */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
