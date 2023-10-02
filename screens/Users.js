import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import ActiveUser from '../components/ActiveUser';

const Users = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ActiveUser
                    name="Patrick Wayoe"
                    profile='https://images.unsplash.com/photo-1590156551768-41825e731e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lc3NpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
                />
                <ActiveUser
                    name="Karen Anderson"
                    profile='https://c.stocksy.com/a/dBj800/za/2080325.jpg'
                />
                <ActiveUser
                    name="Amanda Green"
                    profile='https://c.stocksy.com/a/y0s100/za/445964.jpg'
                />
            </ScrollView>
        </View>
    )
}

export default Users

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white'
    }
})