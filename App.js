// import React from 'react';
// import { StyleSheet, Text,Image,TouchableOpacity,Button} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import MyImage from './assets/favicon.png';
// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Image source={MyImage} style={styles.Image}/>
//       <TouchableOpacity>
//         <Text style={styles.mytext}>Neeraja</Text>
//       </TouchableOpacity>
//       <Button title="Click Me"></Button>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   mytext: {
//     color: 'blue',
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//    Image:{
//     width: 100,
//     height: 100,
//   }
// });


// import react from "react";
// import { View, Text, Button, TouchableOpacity, Image, StyleSheet } from "react-native";
// import MyImage from "./assets/favicon.png"
// import { StatusBar } from "react-native";
// import Component from "./Component";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// const App = () => {
//   return (
//     <>
//       <SafeAreaProvider>
//         <Component />
//       </SafeAreaProvider>
//     </>
//   )
// }

// export default App;

// const Mystyles = StyleSheet.create({
//     MystatusBar:{
//         backgroundColor:"green"
//     }
// })
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Annapurna(Maamuu) </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import react from "react";
// import { View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
// import Image_1 from "./assets/favicon.png"
// import Image_2 from "./assets/adaptive-icon.png"
// import Image_3 from "./assets/icon.png"
// import Image_4 from "./assets/splash-icon.png"
// import { StatusBar } from "react-native";
// import Component from "./Component";
// import { SafeAreaProvider } from "react-native-safe-area-context";

// const MyData = [
//   { id: '1', name: 'Aditya', image: Image_1 },
//   { id: '2', name: 'Neeru', image: Image_2 },
//   { id: '3', name: 'Uma', image: Image_3 },
//   { id: '4', name: 'Akshu', image: Image_4 },
// ];  

// const App = () => {
//   return (
//     <>
//       <FlatList 
//         data={MyData}
//         renderItem={({ item }) => (
//         <View style={Mystyles.parent}>
//             <Image source={item.image} style={Mystyles.image} />
//             <Text style={Mystyles.text}>{item.name}</Text>
//         </View>
//         )}
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(item)=>item.id}
//       />
//     </>
//   )
// }

// export default App;
// const Mystyles = StyleSheet.create({
//   parent:{
//     flexDirection:"row",
//     alignItems:"center",
//     margin:10,
//     backgroundColor:"lightgray",
//     padding:10,
//     borderRadius:10
//   },
//   image:{
//     width:50,
//     height:50,
//     borderRadius:25,
//     marginRight:10
//   },
//   text:{
//     fontSize:18,
//     fontWeight:"bold"
//   }
// })

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Switch,
  Checkbox,
  RadioButton,
  Text,
  HelperText
} from "react-native-paper";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(true);
  const [checked, setChecked] = useState(false);
  const [radio, setRadio] = useState("no");
  const inputsDisabled = !isSwitchOn || checked || radio === "yes";
  const isEmailValid = () =>
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);

  const isMobileValid = () =>
    /^[0-9]{10}$/.test(mobile);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text>Enable Form</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={() => setIsSwitchOn(!isSwitchOn)}
        />
      </View>
      <View style={styles.row}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
        />
        <Text>Disable Inputs (Checkbox)</Text>
      </View>
      <RadioButton.Group
        onValueChange={(value) => setRadio(value)}
        value={radio}
      >
        <View style={styles.row}>
          <RadioButton value="no" />
          <Text>Enable Inputs</Text>
          <RadioButton value="yes" />
          <Text>Disable Inputs</Text>
        </View>
      </RadioButton.Group>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        disabled={inputsDisabled}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        disabled={inputsDisabled}
        style={styles.input}
      />
      <HelperText type="error" visible={email !== "" && !isEmailValid()}>
        Enter valid email
      </HelperText>
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        disabled={inputsDisabled}
        style={styles.input}
      />
      <TextInput
        label="Mobile Number"
        keyboardType="numeric"
        value={mobile}
        onChangeText={setMobile}
        disabled={inputsDisabled}
        style={styles.input}
      />
      <HelperText type="error" visible={mobile !== "" && !isMobileValid()}>
        Mobile must be 10 digits
      </HelperText>
      <Button mode="contained" disabled={inputsDisabled}>
        Submit
      </Button>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40
  },
  input: {
    marginBottom: 10
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  }
});
