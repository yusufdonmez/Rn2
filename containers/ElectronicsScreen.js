import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from 'react-redux';
import Products from '../components/Products';
import { electronics } from '../Data';

class ElectronicsScreen extends Component {
    static navigationOptions = {
        headerTitle : 'Elecktronics'
    }

    render() {
        return (
            <View style={styles.container}>
                <Products products={electronics} onPress={this.props.addItemToCart} />
            </View>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addItemToCart:(product)=>dispatch({type:'ADD_TO_CART',payload:product})
    }
}
export default connect(null,mapDispatchToProps)(ElectronicsScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});