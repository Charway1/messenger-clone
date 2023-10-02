import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import AddFriend from '../components/AddFriend';

export default function AddContacts() {
    return (
        <ScrollView style={styles.container}>
            <AddFriend
                name="Kelvin Newman"
                picture='https://images.unsplash.com/photo-1695556406049-8ca4f2ff854c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjMwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
            />
            <AddFriend
                name="Tessani Kumi"
                picture='https://images.unsplash.com/photo-1695221347160-bc425c1b068d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjI3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
            />
            <AddFriend
                name="Bridgette Otoo"
                picture='https://images.unsplash.com/photo-1695711453545-0b33b06df225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white'
    }

})