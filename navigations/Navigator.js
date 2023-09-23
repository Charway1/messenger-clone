import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Header, createStackNavigator } from '@react-navigation/stack'
import HomeTabs from '../navigations/HomeTabs';
import { Button, Image, StyleSheet } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions'
import HeaderButtons from '../components/HeaderButtons';

const Navigator = () => {
    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={
                        ({navigation}) => ({
                            title : 'Chats',
                            headerRight : () => {
                                return <HeaderButtons/>
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
    }
})