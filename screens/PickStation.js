import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});

const PickStation = ({navigation}) => {
// export default function PickStation(data){
    return(
        <View style={styles.container}>
            <Button
                title="plus"
                onPress={() => navigation.navigate("PickOrigin")}
            />
        </View>
    )
}

export default PickStation;



