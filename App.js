import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PickStation from "./screens/PickStation";
import PickOrigin from "./screens/PickOrigin";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>これは駅構内専用の乗り換え案内アプリです</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="PickStation" component={PickStation} />
            <Stack.Screen name="PickOrigin" component={PickOrigin} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
