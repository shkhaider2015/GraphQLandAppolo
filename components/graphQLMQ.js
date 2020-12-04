import { gql, useQuery } from '@apollo/client';
import React from 'react'
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native'

// const id = 1;

// const queries = {
//     user: gql`query {
//         user(id: ${id}) {
//           id
//           username
//           email
//           address {
//             geo {
//               lat
//               lng
//             }
//           }
//         }
//       }
//       `,
//     user_posts: gql`query {
//         user(id: ${id}) {
//           posts {
//             data {
//               id
//               title
//             }
//           }
//         }
//       }`
// }

const GraphQLMulti = () => {

    const [id, setId] = React.useState(1)
    const queries = {
        user: gql`query {
            user(id: ${id}) {
              id
              username
              email
              address {
                geo {
                  lat
                  lng
                }
              }
            }
          }
          `,
        user_posts: gql`query {
            user(id: ${id}) {
              posts {
                data {
                  id
                  title
                }
              }
            }
          }`
    }

    const { loading: loadingU, error: errorU, data: dataU } = useQuery(queries.user)
    const { loading, error, data } = useQuery(queries.user_posts)
    const [inputValue, setInputValue] = React.useState("0")



    // if (loading || loadingU) {
    //     return (
    //         <View>
    //             <Text>Loading ....</Text>
    //         </View>
    //     )
    // }

    if (error) {
        console.error(error)
        return (
            <View>
                <Text>User's Post Error</Text>
            </View>
        )
    }
    if (errorU) {
        console.error(errorU)
        return (
            <View>
                <Text>User Error</Text>
            </View>
        )
    }



    const handlePress = () => {
        if (parseInt(inputValue) !== 0) {
            if (parseInt(inputValue)) {
                setId(parseInt(inputValue))
            }
        }
    }


    // console.log("Post", data.user.posts.data)

    return (
        <View style={styles.container} >

            <View style={styles.header} >
                <Text style={styles.heading} >GraphQl Multi Queries</Text>
            </View>

            <View>
                <TextInput
                    value={inputValue}
                    onChangeText={text => setInputValue(text)}
                    style={styles.input}
                />
                <Button
                    title="Go"
                    onPress={() => handlePress()}
                />

            </View>

            {loading || loadingU ? <Text>Loading ...</Text> :
            error || errorU ? <Text>Error ..</Text> :

                <View>
                    <View>
                        <Text>User Details</Text>

                        <Text style={styles.name} > {dataU.user.username} </Text>
                        <Text style={styles.email} > {dataU.user.email} </Text>

                    </View>

                    <View>
                        <Text style={styles.postDetail} > {dataU.user.username}'s Post</Text>

                        <FlatList
                            data={data.user.posts.data}
                            renderItem={({ item }) => (<Text style={styles.post}> {item.id} : {item.title} </Text>)}
                            keyExtractor={(item) => item.id.toString()}
                        />

                    </View>
                </View>
            }





        </View>
    )
}


export default GraphQLMulti;

const styles = StyleSheet.create({
    container: {

    },
    header: {

    },
    heading: {

    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5
    },
    email: {
        fontSize: 12
    },
    postDetail: {
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 10
    },
    post: {
        marginTop: 3,
        fontStyle: 'italic'
    },
    input: {
        height: 40,
        marginTop: 10,
        borderColor: 'gray',
        borderWidth: 1
    }
})