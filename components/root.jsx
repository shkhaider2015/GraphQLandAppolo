import React, { Component } from 'react';
import { Text, View, StatusBar } from "react-native";

class Root extends Component {
    
    constructor(props) {
        super(props)
        console.log("My Props : ", props)
    }
    
    render() {
        return
        (
            <View style={styles.container}>
                <Text>Welcome Root</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
}

export default Root;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});