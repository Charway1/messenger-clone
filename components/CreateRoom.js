import React from 'react';
import { View, Text, TouchOpacity, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'

const CreateRoom = () => {
    return (
        <View style={styles.container}>
            <TouchOpacity style={styles.imageContainer}>
                <View style={styles.image}>
                    <MaterialIcons name="video-call" size={responsiveFontSize(3)} color="black"/>
                </View>
            </TouchOpacity>
            <Text style={styles.name}>Create Room</Text>
        </View>
    )
}

export default CreateRoom;

const styles = StyleSheet.create({
    container : {
        width : responsiveWidth(20),
        justifyContent : 'center',
        alignItems : 'center'
    },
    imageContainer : {
        height : responsiveHeight(7),
        width : responsiveHeight(7),
        margin : 2,
    },
    image : {
        width : '100%',
        height : '100%',
        borderRadius : 200,
        backgroundColor : 'rgba(211,211,211,0.3)',
        alignItems : 'center',
        justifyContent : 'center',
    },
    name : {
        flex : 1,
        textAlign : 'center',
        fontSize : responsiveFontSize(1.5)
    }

})