import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';

export default function HomeScreen() {
    const [messages, setMessages] = useState([]);
  return (
    <View style={styles.header1}>
      <SafeAreaView style={styles.header2}>
       {/* Bot Icon */}
       <View style={styles.class1}>
        <Image 
        style={styles.Image1}
        source={require('../../assets/images/Welcome1.png')} />
       </View>

       {/* features \\ messages */}
       {
        messages.length>0? (
            <View>

            </View>
        ) : (
            <Features/>
        )
       }
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
    header1:{
        flex:1,
        backgroundColor:'white',
    },
    header2:{
        flex:1,
        flexDirection:'column',
        margin:5,
    },
    class1:{
        flexDirection:'row',
        justifyContent:'center',
    },
    Image1:{
        height: hp(15),
        width: hp(15),

    },
})