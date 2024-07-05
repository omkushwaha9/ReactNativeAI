import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Features from '../components/Features';
import { dummyMessages } from '../constaints';


export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
  return (
    <View className='flex-1 bg-white'>
      <SafeAreaView className='flex-1 flex mx-5'>
       {/* Bot Icon */}
       <View className='flex-row justify-center'>
        <Image 
        style={{height:hp(15), width:hp(15)}}
        source={require('../../assets/images/Welcome1.png')} />
       </View >
           
       {/* features \\ messages */}
       {
        
        messages.length>0? (
            <View className='space-y-2 flex-1'>
               <Text style={{fontSize: wp(5)}} className='text-gray-700 font-semibold'>
                 Assistant
               </Text>
               <View style={{height: hp(58)}}  className='bg-neutral-200  rounded-3xl p-4'>
               <ScrollView
         bounces={false}
         class='space-y-4'
         showsVerticalScrollIndicator={false}
      >
          
          {
            messages.map((messages, index)=> {
                if (messages.role=='assistant'){
                    if (messages.content.includes('https')){
                        // its an ai image
                        return (
                            <View key={index} class='flex-row justify-end'>
                              <View style={{width: wp(70)}} class='bg-white rounded-xl p-2 rounded-tr-none'>
                                <Text >
                                    {messages.content}
                                </Text>
                                <Text  >
                                    om kushwaha
                                </Text>
                              </View>
                            </View>
                        )
                    } else {
                        //Text response
                        return (
                            <View key={index} className='flex-row justify-end'>
                              <View style={{width: wp(70)}} className='bg-white rounded-xl p-2 rounded-tr-none'>
                                <Text >
                                    {messages.content}
                                </Text>
                              </View>
                            </View>
                        )
                    }
                } else {
                    // userinput
                    return (
                        <View key={index} className='flex-row justify-end'>
                          <View style={{width: wp(70)}} className='bg-white rounded-xl p-2 rounded-tr-none'>
                            <Text >
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
            </View>
        ) : (
            <Features/>
        )
       }
      </SafeAreaView>
    


    </View>
  )
}
