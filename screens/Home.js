import React from 'react'
import { View, StyleSheet, Text, ScrollView, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import ActiveUsersOnHOme from '../components/ActiveUserOnHome'
import CreateRoom from '../components/CreateRoom.js'
import Chat from '../components/Chat'


const Home = ({navigation}) => {
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
            <Chat
                navigation={navigation}
                profilePicture='https://images.unsplash.com/photo-1590156551768-41825e731e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lc3NpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                seenPicture='https://images.unsplash.com/photo-1590156551768-41825e731e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lc3NpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                name="Michael Wayoe"
                isLastMessageYours={true}
                hasSeen={true}
                time="19:35"
                message="Okay"
            />
            <Chat
                navigation={navigation}
                profilePicture="https://c.stocksy.com/a/dBj800/za/2080325.jpg"
                name="Karen Anderson"
                isLastMessageYours={false}
                hasSeen={false}
                time="21:00"
                message="Hello there"
            />
            <Chat
                navigation={navigation}
                profilePicture="https://c.stocksy.com/a/y0s100/za/445964.jpg"
                seenPicture='https://c.stocksy.com/a/y0s100/za/445964.jpg'
                name="Amanda Green"
                isLastMessageYours={true}
                hasSeen={true}
                time="21:55"
                message="I'm doing well!"
            />
            
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