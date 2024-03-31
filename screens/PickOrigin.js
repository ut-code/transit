import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    },
});

const PickOrigin = (data) => {
    return(
    <View style={styles.container}>
        <Button
            title="千代田線ホーム"
            // onPress={() => {
            //     data.navigation.navigate("PickOrigin");
            // }}
        />
        <Button
            title="半蔵門線ホーム"
            // onPress={() => {
            //     data.navigation.navigate("PickOrigin");
            // }}
        />
        <Button
            title="銀座線ホーム"
            // onPress={() => {
            //     data.navigation.navigate("PickOrigin");
            // }}
        />
    </View>
    )
}

export default PickOrigin;



