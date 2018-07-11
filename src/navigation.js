import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

// Screens
import Home from './pages/home';
import Calculator from './pages/calculator';

const App = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    Calculator: {
        screen: Calculator,
    },
});

export default class Navigation extends Component {
    render() {
        return (
            <App />
        )
    }
}