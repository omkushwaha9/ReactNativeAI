import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';
import { dummyMessages } from '../constaints';


export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
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
            <View style={styles.class2}>
               <Text style={styles.Text1}>
                 Assistant
               </Text>
               <View style={styles.class3}>

               </View>
            </View>
        ) : (
            <Features/>
        )
       }
      </SafeAreaView>
      <ScrollView
         bounces={false}
         style={styles.scview}
         showsVerticalScrollIndicator={false}
      >
        {
            messages.map((messages, index)=> {
                if (messages.role=='assistant'){
                    if (messages.content.includes('https')){
                        // its an ai image
                        return (
                            <View key={index} style={styles.class4}>
                          <View style={styles.class7}>
                             <Image
                             source={{uri: messages.content}}
                             style={styles.Image1}
                             />
                          </View>
                        </View>
                        )
                    } else {
                        //Text response
                        return (
                            <View key={index} >
                              <View style={styles.class6}>
                                <Text style={styles.Text2}>
                                    {messages.content}
                                </Text>
                              </View>
                            </View>
                        )
                    }
                } else {
                    // userinput
                    return (
                        <View key={index} style={styles.class4}>
                          <View style={styles.class5}>
                            <Text style={styles.Text2}>
                                {messages.content}
                            </Text>
                          </View>
                        </View>
                    )
                }
                
            })
        }

      </ScrollView>


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
    class2:{
         marginHorizontal:10,
         flex:1,
    },
    Text1:{
        color:'grey',
        fontWeight:'600',
        margin:1,
        fontSize:wp(5),
    },
    class3:{
        height:hp(58),
        backgroundColor:"lightgrey",
        borderRadius:27,
        
    },
    scview:{
        margintop: 4,
        
    },
    Text2:{
        fontSize:17,
        
    },
    class4:{
       flexDirection:'row',
       justifyContent:'flex-end',
    },
    class5:{
       
        backgroundColor:'white',
        borderRadius:9,
        padding:7,
        borderTopRightRadius:'none'
    },
    class6:{
        
        backgroundColor:'lightgreen',
        borderRadius:9,
        padding:7,
        borderTopLeftRadius:'none'
    },
    class7:{
        
        backgroundColor:'lightgreen',
        borderRadius:9,
        padding:2,
        borderTopLeftRadius:'none'
    },
    Image1:{
        borderRadius:8,
        resizeMode:'contain',
        height:wp(60),
        width:wp(60),
    },
})