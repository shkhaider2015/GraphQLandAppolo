import React from 'react';
import { Text, View, StyleSheet, FlatList } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    text : {
        marginTop : 40,
        fontWeight : 'bold'
    },
    view : {
        marginTop : 20,
        fontStyle : 'italic'
    }
});

import { useQuery, gql } from "@apollo/client";

const MY_DATA = gql`
query (
    $options: PageQueryOptions
  ) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`

const GetPosts = () => {

    const { loading, error, data } = useQuery(MY_DATA)

    if (loading) return <Text>Loading ...</Text>
    if (error) return <Text>Error !!</Text>

    // console.log(data.posts.data[0].title)
    const mydata = data.posts.data
    return (
        <View style={styles.container} >
            <Text style={styles.text} > Welcome GetPosts </Text>
                <FlatList
                    data={mydata}
                    renderItem={(item) => (<Text>{ item.item.id } </Text>)}
                    keyExtractor={(item) => item.id.toString()}
                />
        </View>
    )
}

export default GetPosts;

