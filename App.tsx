import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

import Home from "./src/screens/Home";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />

            <Home />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#820ad1",
    },
});
