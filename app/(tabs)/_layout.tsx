import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import useTheme from '@/hooks/useTheme'

const tabsLayout = () => {
    const {colors} = useTheme();
    

  return (
    <Tabs
    screenOptions = {{
        tabBarActiveTintColor:colors.primary,
        tabBarInactiveTintColor:colors.textMuted,
        tabBarStyle : {
            borderTopWidth: 1,
            borderTopColor: colors.bg,
            paddingBottom: 40,
            paddingTop: 2,
            backgroundColor:colors.backgrounds.input
        },
        headerShown: false
    }}>

    <Tabs.Screen
    name='index'
    options={{
        title:"Todos",
        tabBarIcon:({color, size}: { color: string; size: number }) => (
            <Ionicons name="flash-outline" size={size} color={color}/>
        )
    }}/>

    <Tabs.Screen
    name='settings'
    options={{
        title:"Settings",
        tabBarIcon:({color, size}: { color: string; size: number }) => (
            <Ionicons name="settings-outline" size={size} color={color}/>
        )
    }}/>

    </Tabs>
)
}

export default tabsLayout