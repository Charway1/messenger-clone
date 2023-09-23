import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Users from '../screens/Users';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

const HomeTabs = () => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon : ({ color }) => {
                    if(route.name === 'Main'){
                        return <MaterialCommunityIcons name="chat" color={color} size={responsiveFontSize(3)}/>
                    } else if(route.name === 'Users'){
                        return <FontAwesome5 name="user-friends" color={color} size={responsiveFontSize(3)}/>
                    }
                }
            })}
            tabBarOptions={
                {
                    activeTintColor : 'rgba(211,211,211,0.7)',
                    activeTintColor : 'black',
                    style : {
                        height : responsiveHeight(8)
                    }
                }
            }
        >
            <Tab.Screen
                name="Main"
                options={{ title : 'Chats' }}
                component={Home}
            />
            <Tab.Screen
                name="Users"
                component={Users}
            />
        </Tab.Navigator>
    ) 
}
export default HomeTabs