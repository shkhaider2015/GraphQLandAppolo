import { gql, useQuery, ApolloClient, InMemoryCache } from '@apollo/client';
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
const client = new ApolloClient({
    uri : "https://graphqlzero.almansi.me/api",
    cache : new InMemoryCache()
  })

class GraphQLMulti extends React.Component {

    // const [id, setId] = React.useState(1)
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

    // const { loading: loadingU, error: errorU, data: dataU } = useQuery(queries.user)
    // const { loading, error, data } = useQuery(queries.user_posts)

    constructor() {
        super()
        this.state = {
            id : 1,
            queries :  {
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
            },
            inputValue : "1",
            loading : true,
            error : false,

        }
    }

    getData = () => 
    {
        client.query(
            
            {
                query : gql`{
                    user(id: ${this.state.id}) {
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
                  }`
            },
    ).then((res) => {
        this.setState({ queries : { user : res.data.user }, loading : false, error : false })
    })
    .catch((err) => {
        console.error(err)
        this.setState({ loading : false, error : true })
    })
    }

    componentDidMount() {
       this.getData()
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("PrevID ", prevState.id)
        console.log("CurrentID ", this.state.id)

        if(prevState.id === this.state.id)
        {
         this.getData()   
        }
    }
    
    



    // if (loading || loadingU) {
    //     return (
    //         <View>
    //             <Text>Loading ....</Text>
    //         </View>
    //     )
    // }

    // if (error) {
    //     console.error(error)
    //     render() {
    //         return (
    //             <View>
    //                 <Text>User's Post Error</Text>
    //             </View>
    //         )
    //     }
    // }
    // if (errorU) {
    //     console.error(errorU)
    //     render(){
    //     return (
    //         <View>
    //             <Text>User Error</Text>
    //         </View>
    //     )
    //     }
    // }



    handlePress = () => {
        if (parseInt(this.state.inputValue) !== 0 && this.state.inputValue !== "") {
            if (parseInt(this.state.inputValue)) {
                // setId(parseInt(this.state.inputValue))
                this.setState({ id : parseInt(this.state.inputValue) })
            }
        }
    }


    

    render() {
        // console.log("data : ", this.state.queries.user)
        return (
            <View style={styles.container} >
    
                <View style={styles.header} >
                    <Text style={styles.heading} >GraphQl Multi Queries</Text>
                </View>
    
                <View>
                    <TextInput
                        value={this.state.inputValue}
                        onChangeText={text => this.setState({ inputValue : text }) }
                        style={styles.input}
                    />
                    <Button
                        title="Go"
                        onPress={() => this.handlePress()}
                    />
    
                </View>
    
                {this.state.loading ? <Text>Loading ...</Text> :
                this.state.error  ? <Text>Error ..</Text> :
    
                    <View>
                        <View>
                            <Text>User Details</Text>
    
                            <Text style={styles.name} > {this.state.queries.user.username} </Text>
                            <Text style={styles.email} > {this.state.queries.user.email} </Text>
    
                        </View>
    
                        {/* <View>
                            <Text style={styles.postDetail} > {dataU.user.username}'s Post</Text>
    
                            <FlatList
                                data={data.user.posts.data}
                                renderItem={({ item }) => (<Text style={styles.post}> {item.id} : {item.title} </Text>)}
                                keyExtractor={(item) => item.id.toString()}
                            />
    
                        </View> */}
                    </View>
                }
                            </View>
        )
    }

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