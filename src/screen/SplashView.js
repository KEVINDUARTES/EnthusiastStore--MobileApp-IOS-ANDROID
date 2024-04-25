import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashView = () => {
  return (
    <View style={styles.container}>
      {/* Color de fondo */}
      <View style={styles.backgroundColor}>
        {/* Imagen de splash */}
        <Image
          source={require('../../assets/splash.png')} // Ruta de la imagen de splash
          style={styles.image}
          resizeMode="contain" // Ajusta la imagen al tamaño del contenedor manteniendo la relación de aspecto
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue', // Color de fondo deseado


  },
  backgroundColor: {
    backgroundColor: 'blue', // Color de fondo deseado
    flex: 1, // Para que ocupe todo el espacio disponible
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%', // Ancho de la imagen, ajusta según tus necesidades
    height: '80%', // Altura de la imagen, ajusta según tus necesidades
  },
});

export default SplashView ;
