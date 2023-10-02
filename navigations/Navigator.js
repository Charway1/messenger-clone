import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Header, createStackNavigator } from '@react-navigation/stack'
import HomeTabs from '../navigations/HomeTabs';
import { Button, Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import HeaderButtons from '../components/HeaderButtons';
import ChatView from '../screens/ChatView';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/Context'
import AddContacts from '../screens/AddContacts';
import AllPeople from '../screens/AllPeople';

const Navigator = () => {
    const Stack = createStackNavigator()

    const [ { header, headerTitle }, dispatch ] = useAppContext()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={
                        ({navigation}) => ({
                            title : headerTitle,
                            headerRight : () => {
                                return !header ? <HeaderButtons navigation={navigation}/> : <HeaderButtons navigation={navigation} changeToUsers={header}/> 
                            },
                            headerLeft : () => {
                                return <Image style={styles.Image} source={
                                    {
                                        uri : 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'
                                    }

                                }/>
                            },
                            headerLeftContainerStyle : {
                                paddingLeft : 10
                            },
                            headerRightContainerStyle: {
                                paddingHorizontal : 10
                            }

                        })


                    }
                    name="Home"
                    component={HomeTabs}
                />
                <Stack.Screen
                    name='ChatView'
                    component={ChatView}
                    options={
                        ({navigation,route}) => ({
                            title : null,
                            headerRight : () => {
                                return (
                                    <View style={styles.chatViewHeaderRightContainer}>
                                        <TouchableOpacity style={styles.call}>
                                            <Ionicons name="ios-call" size={responsiveFontSize(3)} color="#006AFF" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.video}>
                                            <FontAwesome name="video-camera" size={responsiveFontSize(3)} color="#006AFF"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.info}>
                                            <FontAwesome5 name="info-circle" size={responsiveFontSize(3)} color="#006AFF"/>
                                        </TouchableOpacity>
                                    </View>
                                )
                            },
                            headerLeft : () => {
                                return (
                                    <View style={styles.chatViewHeaderLeftContainer}>
                                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                            <Ionicons name="md-arrow-back" size={responsiveFontSize(3)} color='#006AFF'/>
                                        </TouchableOpacity>
                                        <View style={styles.chatViewProPicContainer}>
                                            <Image style={styles.profilePic} source={{ uri: 'https://c.stocksy.com/a/dBj800/za/2080325.jpg' }}/>
                                        </View>
                                        <View>
                                            <Text style={styles.name}>Name</Text>
                                            <Text style={styles.lastOnlineText}>Active 12 hours ago</Text>
                                        </View>
                                    </View>
                                )
                            },
                            headerLeftContainerStyle : {
                                paddingHorizontal : 10
                            } 
                        })
                    }
                />
                <Stack.Screen
                    name="AddContacts"
                    component={AddContacts}
                />
                <Stack.Screen
                    name="AllPeople"
                    component={AllPeople}
                /> 
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigator

const styles = StyleSheet.create({
    Image : {
        width : responsiveHeight(5),
        height : responsiveHeight(5),
        borderRadius : 200
    },
    profilePic: {
        borderRadius: 200,
        width: responsiveHeight(5),
        height: responsiveHeight(5),
    },
    chatViewHeaderLeftContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold'
    },
    chatViewProPicContainer: {
        padding: 10
    },
    lastOnlineText: {
        fontSize: responsiveFontSize(1.5),
        color: 'gray'
    },
    chatViewHeaderRightContainer: {
        flexDirection: 'row'
    },
    call: {
        paddingHorizontal: 10
    },
    video: {
        paddingHorizontal: 10
    },
    info: {
        paddingHorizontal: 10
    }
})