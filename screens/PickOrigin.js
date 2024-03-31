import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});

const PickOrigin = (data) => {
// export default function PickOrigin(data){
    return(
    <View style={styles.container}>
        {/* <Button
            title="plus"
            onPress={() => {
                data.navigation.navigate("PickOrigin");
            }}
        /> */}
    </View>
    )
}

export default PickOrigin;



