import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from '../screens/home';

function Services() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Services!</Text>
    </View>
  );
}

function Activity() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Activity!</Text>
    </View>
  );
}

function Account() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Account!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabRouter() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "white",height:55 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: { color: "black",fontFamily:"Poppins-Medium",fontSize:12 },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="home" color={focused ? "black" : "gray"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: 'Services',
          tabBarLabelStyle: { color: "black",fontFamily:"Poppins-Medium",fontSize:12  },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="apps" color={focused ? "black" : "gray"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: 'Activity',
          tabBarLabelStyle: { color: "black",fontFamily:"Poppins-Medium",fontSize:12  },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="reader" color={focused ? "black" : "gray"} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle: { color: "black",fontFamily:"Poppins-Medium",fontSize:12  },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="person" color={focused ? "black" : "gray"} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
