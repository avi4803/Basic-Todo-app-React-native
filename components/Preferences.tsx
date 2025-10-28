import { View, Text, Switch } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme';
import { useState } from 'react';
import { createSettingsStyles } from '@/assets/styles/settings.style';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Preferences = () => {
  const [isAutoSync,setIsAutoSync] = useState(true);
  const [isNotificationsEnabled,setIsNotificationsEnabled] = useState(true);
  const {colors,isDarkMode,toggleDarkMode} = useTheme();
  const settingStyles = createSettingsStyles(colors);


  return (
   <LinearGradient colors={colors.gradients.surface}
   style={settingStyles.section}>
    <Text style={settingStyles.sectionTitle}>
        Preferences
    </Text>


    <View style={settingStyles.settingItem}>
        <View style = {settingStyles.settingLeft}>
            <LinearGradient colors={colors.gradients.primary} style={
                settingStyles.settingIcon}>
                <Ionicons name="moon" size={18} color="#fff"/>
            </LinearGradient>
            <Text style={settingStyles.settingText}>
                Dark Mode
            </Text>
        </View>
        <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        thumbColor= "#fff"
        trackColor={{ false: colors.border, true: colors.primary }}/>
    </View>

    <View style={settingStyles.settingItem}>
        <View style = {settingStyles.settingLeft}>
            <LinearGradient colors={colors.gradients.primary} style={
                settingStyles.settingIcon}>
                <Ionicons name="moon" size={18} color="#fff"/>
            </LinearGradient>
            <Text style={settingStyles.settingText}>
                Autosync
            </Text>
        </View>
        <Switch
        value={isAutoSync}
        onValueChange={setIsAutoSync}
        thumbColor= "#fff"
        trackColor={{ false: colors.border, true: colors.primary }}/>
    </View>

    <View style={settingStyles.settingItem}>
        <View style = {settingStyles.settingLeft}>
            <LinearGradient colors={colors.gradients.primary} style={
                settingStyles.settingIcon}>
                <Ionicons name="moon" size={18} color="#fff"/>
            </LinearGradient>
            <Text style={settingStyles.settingText}>
                Notifications
            </Text>
        </View>
        <Switch
        value={isNotificationsEnabled}
        onValueChange={setIsNotificationsEnabled}
        thumbColor= "#fff"
        trackColor={{ false: colors.border, true: colors.primary }}/>
    </View>


   </LinearGradient>
  )
}

export default Preferences