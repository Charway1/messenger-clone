import React from 'react'
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import ActiveUsersOnHOme from '../components/ActiveUserOnHome'
import CreateRoom from '../components/CreateRoom.js'
import Chat from '../components/Chat'

const Home = () => {
    return (
        <ScrollView contentContainerStyle={{ alignItems : 'center' }} style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchIconContainer}>
                    <Ionicons name="ios-search" size={responsiveFontSize(3)} color="gray"/>
                </View>
                <TextInput style={styles.search} placeholder="Search"/>
            </View>
            <View style={styles.activeUsersContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginVertical : 10 }}>
                    <CreateRoom/>
                    <ActiveUsersOnHOme/>
                    <ActiveUsersOnHOme/>
                    <ActiveUsersOnHOme/>
                    <ActiveUsersOnHOme/>
                    <ActiveUsersOnHOme/>
                    <ActiveUsersOnHOme/>
                    <ActiveUsersOnHOme/>
                    <ActiveUsersOnHOme/>
                </ScrollView>
            </View>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
                </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
        paddingTop : 10
    },
    searchContainer : {
        width : responsiveWidth(90),
        height : responsiveHeight(5),
        backgroundColor : 'rgba(211, 211, 211, 0.2',
        borderRadius : 30,
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center'
        // background : 'red'
    },
    search : {
        flex : 1
    },
    searchIconContainer : {
        paddingHorizontal : 10
    },
    activeUsersContainer : {
        height : responsiveHeight(13),
        width : responsiveWidth(100),
        marginVertical : 5
    }
})