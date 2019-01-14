import React from "react";
import { 
    View,
    Text,
    StyleSheet,Button
} from "react-native";
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import { withNavigation } from 'react-navigation'

const ShoppingCartIcon = (props) => (
    <View style={{padding:5}}> 
        <View style={{position:'absolute',height:30,width:30,borderRadius:15,
                    backgroundColor:'rgba(200,200,200,0.8)', right:15,bottom:15,
                    alignItems:'center',justifyContent:'center',zIndex:2000}}>
            <Text style={{color:'white', fontWeight:'bold'}}>{props.cartItems.length}</Text>
        </View>
        <Button title={props.cartItems.length.toString()} onPress={() => props.navigation.navigate('Cart')}/>
        {/**<Icon onPress={() => props.navigation.navigate('Cart')} name="ios-cart" size={30} /> */}
    </View>
    )
const mapStateToProps = (state) => {
    return{
        cartItems : state 
    }
}
export default connect(mapStateToProps)(withNavigation(ShoppingCartIcon));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});