import React, { Component } from 'react';
import { graphql } from '@apollo/react-hoc';
import { User, UserPost } from "./quriesAndMutation";


class MultipleQuries extends Component {




    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default graphql(User, {name : 'user'})(MultipleQuries)