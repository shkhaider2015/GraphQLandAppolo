import { gql, useMutation } from '@apollo/client';
import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { TextInput as TI } from "react-native-paper";

const createPost = gql`
mutation (
    $input: CreatePostInput!
  ) {
    createPost(input: $input) {
      id
      title
      body
    }
  }`;

const Test = () => 
{
    
    const [emailValue, setEmailValue] = React.useState("Email")
    const [passwordValue, setPasswordValue] = React.useState("Password")
    const [materialText, setMaterialText] = React.useState("Email")

    const [createdPost, {data}] = useMutation(createPost)

    const handlePress = () => {
        console.log(emailValue)
        createdPost({
            variables : {
                "input": {
                  "title": emailValue,
                  "body": passwordValue
                }
              }
        });
    }

    return(
        <View style={styles.container} >
            <Text >Email</Text>
            <TextInput
            style={{ height : 30, borderColor : 'gray' , borderWidth : 1 }}
            onChangeText={text => setEmailValue(text) }
            value={emailValue}
            textContentType="emailAddress"
            />
            <Text >Password</Text>
            <TextInput
            style={{ height : 30, borderColor : 'gray', borderWidth : 1 }}
            onChangeText={text => setPasswordValue(text) }
            value={passwordValue}
            textContentType="password"
            secureTextEntry={true}
            />
            <Button
              
            title="Submit"
            onPress={() => handlePress() }
            />
            <Text style={{ color : 'green' }} >{ data ? "Email is : " + data.createPost.title : "" }</Text>

            {/* <TI 
            mode="outlined"
            focusable={true}
            onChangeText={text => setMaterialText(text)}
            value={materialText}
            textContentType="emailAddress"
            style={{ height : 80, marginTop : 10 }}
            /> */}
        </View> 
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        textAlign : 'center',
        alignContent : 'center',
        justifyContent : 'center',
        paddingStart : 10,
        paddingEnd : 10,

    },
    gg : {
        marginLeft : 10,
        marginRight : 10
    }
})

export default Test

