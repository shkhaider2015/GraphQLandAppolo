import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GetPosts from "./getPosts";
import Test from "./test";
import { DrawerContent } from "./contentDrawer";
import { Text } from "react-native";
import MyAppBar from "./appBar";
import GraphQLMQ from "./graphQLMQ";
import GraphQLMulti from './graphQLMQC';


const Drawer = createDrawerNavigator();

class NavigationDrawer extends React.Component {


    render() {
        return (
            <NavigationContainer>
                <MyAppBar/>
                <Drawer.Navigator initialRouteName="GetPosts" drawerContent={ props => <DrawerContent {...props} /> } >
                    <Drawer.Screen name="GetPosts" component={GetPosts} />
                    <Drawer.Screen name="Test" component={Test} />
                    <Drawer.Screen name="GraphQlMulti" component={GraphQLMulti} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}

export default NavigationDrawer;