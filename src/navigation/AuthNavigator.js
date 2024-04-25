
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../screen/RegisterView';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Registro' }}
          />
          {/* Agrega más pantallas de autenticación aquí si es necesario */}
        </Stack.Navigator>
      );

}
