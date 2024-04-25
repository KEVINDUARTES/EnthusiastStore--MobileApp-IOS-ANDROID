
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegisterForm from '../components/RegisterForm';



const RegisterScreen = ({ navigation }) => {
  const handleRegister = (email, password) => {
    console.log('Registrando usuario:', email, password);
    // Por ejemplo, podrías hacer una llamada a una API para enviar los datos de registro
    // Y luego, si el registro es exitoso, puedes navegar a la siguiente pantalla
    navigation.navigate('Home'); // Reemplaza 'Home' con el nombre de tu pantalla de inicio
  };

  return (
    <View style={styles.container} >
     <View style={styles.subContainer} >
      <Text style={styles.title}>STORE ENTHUSIASTIC</Text>
      <Text style={styles.subTitle}>buying and selling has never been so easy!</Text>
      <RegisterForm onRegister={handleRegister} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:60,
    paddingRight:5,
    paddingVertical: 50, // Agregar paddingVertical
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:30,
    paddingRight:1,
    paddingVertical: 40, // Agregar paddingVertical
  },
  
  title: {
    fontSize: 30,
    marginBottom: 20,
    paddingLeft:60,
    paddingRight:5,
  },
  subTitle:{
    fontSize: 20,
    marginBottom: 20,
    paddingLeft:3,
    paddingRight:5,
  }
});

export default RegisterScreen;




// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// const RegisterScreen = ({ navigation }) => {
//   const handleRegister = async (email, password) => {
//     console.log('Registrando usuario:', email, password);

//     try {
//       // Aquí deberías realizar la llamada a la API de Google Sheets para guardar los datos
//       // Puedes usar la biblioteca 'axios' u otra biblioteca para hacer la solicitud HTTP

//       // Ejemplo de cómo podrías hacer la llamada a la API de Google Sheets
//       const response = await axios.post('URL_de_tu_API_de_Google_Sheets', {
//         email: email,
//         password: password,
//       });

//       // Si la llamada a la API fue exitosa, puedes navegar a la siguiente pantalla
//       navigation.navigate('Home'); // Reemplaza 'Home' con el nombre de tu pantalla de inicio
//     } catch (error) {
//       // Manejo de errores
//       console.error('Error al registrar usuario:', error);
//     }
//   };

//   return (
//     <View style={styles.container} >
//       <Text style={styles.title}>Registro</Text>
//       <RegisterForm onRegister={handleRegister} />
//     </View>
//   );
// };
