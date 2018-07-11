import React, { Component } from 'react';
import { View, Text } from 'native-base';

export default class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}