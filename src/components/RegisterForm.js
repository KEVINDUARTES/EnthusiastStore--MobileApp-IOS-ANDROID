import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aquí podrías realizar alguna validación de campos antes de llamar a onRegister
    onRegister(email, password);
  };
  return ( 
    
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Introduce tu email"
      />
      <Text style={styles.label}>Contraseña:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        secureTextEntry  // Aquí estamos usando la forma abreviada para secureTextEntry={true}
        placeholder="Introduce tu contraseña"
      />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default RegisterForm;
