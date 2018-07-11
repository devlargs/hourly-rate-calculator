import React, { Component } from 'react';
import { Container } from 'native-base';
import Head from '../components/header';

export default class Calculator extends Component {
    static navigationOptions = {
        drawerLabel: 'Calculator',
    };

    render() {
        return (
            <Container>
                <Head title="Calculator" navigation={this.props.navigation} />
            </Container>
        )
    }
}