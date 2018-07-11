import React, { Component } from 'react';
import { Container } from 'native-base';
import Head from '../components/header';

export default class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    render() {
        return (
            <Container>
                <Head title="Home" />
            </Container>
        )
    }
}