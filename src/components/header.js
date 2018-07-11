import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class Head extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right></Right>
            </Header>
        )
    }
}