import react from "react";
import { View ,StyleSheet,StatusBar,Text,Image} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator,Badge,Button,Chip,TextInput,Icon } from "react-native/types_generated/index";
const Component = () =>{
    const Results = useSafeAreaInsets();
    const Fun=()=>{
        console.log("Button is Pressed",new Date())
    }
    // console.log(Results)
    return(
        <>
            <StatusBar barStyle="light-content" hidden />
            <View style={[Mystyles.MystatusBar,{paddingTop:Results.top}]}>
            </View>
            <Text>Aditya university</Text>
        </>
    )
}
export default Component;
