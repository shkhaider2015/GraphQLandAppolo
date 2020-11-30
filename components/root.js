import React, { Component } from 'react';
import { Text, View, StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

// class Root extends Component {

//     constructor({ client }) {
//         super(client)
//         console.log(client)
//     }

//     render() {
//         return(
//             <View style={styles.container} >
//                 <Text>Welcome Root</Text>
//             </View>
//         )
//     }
// }

// export default Root;

import { useQuery, gql } from "@apollo/client";

const MY_DATA = gql`
{
    user(id: 1) {
      id
      name
    }
  }
`

const Root = () => {

    const { loading, error, data } = useQuery(MY_DATA)

    if(loading) return <Text>Loading ...</Text>
    if(error) return <Text>Error !!</Text>

    console.log(data)
    return (
        <View style={styles.container} >
            <Text> Welcome Root </Text>
        </View>
    )
}

export default Root;

