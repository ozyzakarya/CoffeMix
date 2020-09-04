import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetStarted, Register, Login, Home } from '../pages';
import {BottomNavigator} from '../components'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="GetStarted"
                component={GetStarted}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Register"
                component={Register}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="MainApp"
                component={MainApp}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router

