import React from 'react';
import { StyleSheet, Text,Image,TouchableOpacity,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyImage from './assets/favicon.png';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={MyImage} style={styles.Image}/>
      <TouchableOpacity>
        <Text style={styles.mytext}>Neeraja</Text>
      </TouchableOpacity>
      <Button title="Click Me"></Button>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mytext: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
  },
   Image:{
    width: 100,
    height: 100,
  }
});

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
