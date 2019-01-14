import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import {createStackNavigator} from 'react-navigation'
import HomeScreen from './containers/HomeScreen'
import ElectronicsScreen from './containers/ElectronicsScreen'
import BooksScreen from './containers/BooksSreen'
import CartScreen from './containers/CartScreen'
import ShoppingCartIcon from './containers/ShoppingCartIcon';

class ShoppingCart extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}
export default ShoppingCart;

const AppStackNavigator = createStackNavigator({
    Home: HomeScreen,
    Electronics: ElectronicsScreen,
    Books: BooksScreen,
    Cart: CartScreen
},{
    navigationOptions:{
        headerTitle: 'Shopping App',
        headerRight:(
            <ShoppingCartIcon/>
        )
    }
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});