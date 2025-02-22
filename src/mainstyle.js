import { StyleSheet } from "react-native";

export const loginstyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  ImageContainer: {
    width: 230,
    height: 300,  
    resizeMode: 'cover', 
  },
  TextInput: {
    justifyContent: 'center',
    alignItems: 'center', 
    borderWidth: 1,
    borderRadius: 10, 
    borderColor: 'black',
    width: 200,
    fontSize: 12,
    marginTop: 10,
    padding: 8, 
  }
});
