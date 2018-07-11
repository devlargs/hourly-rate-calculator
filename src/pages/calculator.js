import React, { Component } from 'react';
import { View, Text } from 'native-base';

export default class Calculator extends Component {
    static navigationOptions = {
        drawerLabel: 'Calculator',
    };

    render() {
        return (
            <View>
                <Text>Calculator</Text>
            </View>
        )
    }
}