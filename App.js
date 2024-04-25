import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';
import SplashView from './src/screen/SplashView'; // Importa el componente SplashScreen

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga para el splash screen
    setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 3000 milisegundos (3 segundos) - ajusta según sea necesario
  }, []);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* Renderiza el SplashScreen solo mientras isLoading sea true */}
        {isLoading ? (
          <SplashView />
        ) : (
          <AuthNavigator />
        )}
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
