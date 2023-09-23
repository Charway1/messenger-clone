import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const ActiveUsersOnHOme = () => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={{
                        uri : 'https://cdn.pixabay.com/photo/2018/04/04/18/45/ball-3290624_640.jpg'
                    }}
                />
                <View style={styles.onlineStatus}/>
            </View>
            <Text style={styles.name}>Name</Text>
        </TouchableOpacity>
    )
}

export default ActiveUsersOnHOme

const styles = StyleSheet.create({
    container : {
        width : responsiveWidth(20),
        justifyContent : 'center',
        alignItems : 'center'
    },
    imageContainer : {
        height : responsiveHeight(7),
        width : responsiveHeight(7)
    },
    name : {
        flex : 1,
        textAlign : 'center',
        fontSize : responsiveFontSize(1.5),
    },
    image : {
        width : '100%',
        height : '100%',
        borderRadius : 200,
    },
    onlineStatus : {
        width : 15,
        height : 15,
        backgroundColor : 'green',
        borderRadius : 200,
        position : 'absolute',
        bottom : 1,
        right : 1,
        borderWidth : 2,
        borderColor : 'white'
    }
})