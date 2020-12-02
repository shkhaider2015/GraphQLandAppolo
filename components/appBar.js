import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Platform, View } from 'react-native'
import { Appbar } from "react-native-paper";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical'

const MyAppBar = () => {

    const handleMenu = () => 
    {
        console.log("Menu Clicked")
    }
    const handleMagnify = () => 
    {
        console.log("Magnify Clicked")
    }
    const handleDots = () => 
    {
       console.log("Dots Clicked")   
    }

    return (
        <Appbar.Header>
            <Appbar.Action icon="menu" onPress={() => handleMenu() } />
            <Appbar.Content title="Title" subtitle={'Subtitle'} />
            <Appbar.Action icon="magnify" onPress={() => handleMagnify() } />
            <Appbar.Action icon={MORE_ICON} onPress={() => handleDots() } />
        </Appbar.Header>
    )
}

export default MyAppBar