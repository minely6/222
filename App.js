import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import Card from './components/Card';
import TabBarIcon from './components/TabBarIcon';
import Test from './screens/TestScreen';
import InterestingFactsScreen from './screens/InterestingFactsScreen';
import GlossaryScreen from './screens/GlossaryScreen';
import AuthorInfoScreen from './screens/AuthorInfoScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hom" component={HomeScreen} options={{headershowm:false}}  />
      <Stack.Screen name="Card" component={Card} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route })  => ({
        tabBarIcon: ({ color, size }) => <TabBarIcon name={route.name} color={color} size={size}   />
       })}>
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Test" component={Test} options={{headerShown:false}} />
        <Tab.Screen name="InterestingFacts" component={InterestingFactsScreen} options={{headerShown:false}} />
        <Tab.Screen name="GlossaryScreen" component={GlossaryScreen} options={{headerShown:false}} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}