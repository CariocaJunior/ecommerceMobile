import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Login from './pages/Login';
import { Text } from 'react-native';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Datail"
                component={Detail}
                options={{ headerShown: false}}
                />
                <Stack.Screen
                name="Detail"
                component={Home}
                />
                <Stack.Screen
                name="Login"
                component={Detail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;


