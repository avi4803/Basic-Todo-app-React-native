import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.style';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  const {colors} = useTheme();
  const homeStyles = createHomeStyles(colors);
  const todos = useQuery(api.todos.getTodos);

  const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
  const totalCount = todos ? todos.length : 0;
  const progressPercentage = totalCount > 0 ? (completedTodos/totalCount)*100 : 0;

  


  return (
    
    <View style = {homeStyles.header}>
        <View style = {homeStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={homeStyles.iconContainer}>
                <Ionicons name="flash-outline" size={28} color="#fff"/>
            </LinearGradient>
            <View style = {homeStyles.titleTextContainer}>
                <Text style ={homeStyles.title}>Today&apos;s Tasks</Text>
                <Text style ={homeStyles.subtitle}>
                    {completedTodos} of {totalCount} completed
                </Text>

            </View>

        </View>
        
        {/* Progress bar */}
        {true && (
            <View style = {homeStyles.progressContainer}>
                <View style={homeStyles.progressBarContainer}>
                    <View style={homeStyles.progressBar}>
                        <LinearGradient
                        colors={colors.gradients.success}
                        style={[homeStyles.progressFill, { width: `${progressPercentage}%` }]}/>
                </View>
                <Text style = {homeStyles.progressText}>{Math.round(progressPercentage)}%</Text>
                </View>
                </View>
        )}

    </View>
  )
}

export default Header