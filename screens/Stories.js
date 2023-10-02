import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Story from '../components/Story';
import CreateStory from '../components/CreateStory';

const Stories = () => {

    const data = [
    <CreateStory
        picture='https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80' 
        key={0}
    />,
    <Story
        key={1}
        pictures='https://plus.unsplash.com/premium_photo-1695575593603-1f42ca27bb6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60'
        profilePicture='https://images.unsplash.com/photo-1590156551768-41825e731e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lc3NpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
    />,
    <Story
        key={2}
        pictures='https://images.unsplash.com/photo-1695802060433-5670540d760d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=700&q=60'
        profilePicture='https://c.stocksy.com/a/dBj800/za/2080325.jpg'
    />,
    <Story 
        key={3}
        pictures='https://images.unsplash.com/photo-1695990189898-ab6fe9c50eff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mzd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        profilePicture='https://c.stocksy.com/a/y0s100/za/445964.jpg'
    />,
    <Story 
        key={4}
        pictures='https://images.unsplash.com/photo-1695264484766-59141796a049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        profilePicture='https://images.unsplash.com/photo-1695774339385-265b7f54126e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTMwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    />,
    <Story
        key={5}
        pictures='https://images.unsplash.com/photo-1696063195414-696225d1a053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        profilePicture='https://images.unsplash.com/photo-1695802060528-c222760eb3ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTk5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    />,
    <Story
        key={6}
        pictures='https://images.unsplash.com/photo-1692911635160-1188df9e40d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        profilePicture='https://images.unsplash.com/photo-1695931845087-c8803d4e1c07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTMzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60'
    />
]

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => item}
                numColumns={3}
            />
        </View>
    )
}
export default Stories

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'white',
    }
})