import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { loginstyle } from "./src/mainstyle";

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = () => {
    console.log('Login button pressed');
    setUsername('Charles Dominick');
    setPassword('Ocrisma | IT3B');
  };

  return (
    <View style={loginstyle.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>WELCOME TO MALUPI-LOGIN WHERE MAGICAL THINGS TAKE PLACE!</Text>
      
      <Text>Username:</Text>
      <TextInput
        value={username}
        style={loginstyle.TextInput}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />

      <Text>Password:</Text>
      <TextInput
        value={password}
        style={loginstyle.TextInput}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"        
      />

      <TouchableOpacity onPress={handlePress} style={{ marginTop: 15 }}>
        <Image
          style={loginstyle.ImageContainer}
          source={require('./src/assets/oms.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default App;
