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


import react from "react";
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import Image_1 from "./assets/favicon.png"
import Image_2 from "./assets/adaptive-icon.png"
import Image_3 from "./assets/icon.png"
import Image_4 from "./assets/splash-icon.png"
import { StatusBar } from "react-native";
import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";

const MyData = [
  { id: '1', name: 'Aditya', image: Image_1 },
  { id: '2', name: 'Neeru', image: Image_2 },
  { id: '3', name: 'Uma', image: Image_3 },
  { id: '4', name: 'Akshu', image: Image_4 },
];  

const App = () => {
  return (
    <>
      <FlatList 
        data={MyData}
        renderItem={({ item }) => (
        <View style={Mystyles.parent}>
            <Image source={item.image} style={Mystyles.image} />
            <Text style={Mystyles.text}>{item.name}</Text>
        </View>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=>item.id}
      />
    </>
  )
}

export default App;
const Mystyles = StyleSheet.create({
  parent:{
    flexDirection:"row",
    alignItems:"center",
    margin:10,
    backgroundColor:"lightgray",
    padding:10,
    borderRadius:10
  },
  image:{
    width:50,
    height:50,
    borderRadius:25,
    marginRight:10
  },
  text:{
    fontSize:18,
    fontWeight:"bold"
  }
})