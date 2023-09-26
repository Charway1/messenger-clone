import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const  HeaderButtons = ({changeToUsers}) => {
    return (
        <View style={styles.headerLeftCOntainer}>
            <TouchableOpacity style={styles.button}>
            {
                !changeToUsers ? <Ionicons name="ios-camera" size={responsiveFontSize(3)}/> : 
                    <MaterialIcons name="perm-contact-calendar" style={{paddingHorizontal : 3}} size={responsiveFontSize(2.5)} color="black"/>
            }
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Ionicons name="md-create" size={responsiveFontSize(3)}/>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderButtons

const styles = StyleSheet.create({
    headerLeftCOntainer : {
        flexDirection : 'row',
        display : 'flex',
        justifyContent : 'space-around'
    },
    button : {
        backgroundColor : 'rgba(211,211,211,0.2)',
        borderRadius : 200,
        padding : 5,
        marginHorizontal : 5,
        justifyContent :'center',
        alignItems : 'center',
        width : 35,
        height : 35
    }
})