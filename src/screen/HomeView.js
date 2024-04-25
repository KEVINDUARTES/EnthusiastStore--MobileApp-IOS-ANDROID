// import React from 'react';
// import { View, Text } from 'react-native';

// const HomeView = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Welcome to Home Screen!</Text>
//   </View>
// );

// export default HomeView;


// import React, { useState } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';

// const RegisterScreen = ({ navigation }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Aquí puedes agregar la lógica de autenticación
//     console.log('Username:', username);
//     console.log('Password:', password);
//     // Por ahora, simplemente navegará a la pantalla Home si los campos no están vacíos
//     if (username && password) {
//       navigation.navigate('Home');
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Authentication Screen</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
//         placeholder="Username"
//         value={username}
//         onChangeText={text => setUsername(text)}
//       />
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, paddingHorizontal: 10 }}
//         placeholder="Password"
//         value={password}
//         onChangeText={text => setPassword(text)}
//         secureTextEntry
//       />
//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default RegisterScreen;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import RegisterScreen from './src/screen/RegisterView';
// import HomeView from './src/screen/HomeView';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Auth" component={RegisterScreen} />
//         <Stack.Screen name="Home" component={HomeView} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
