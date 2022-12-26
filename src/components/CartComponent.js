import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '../constants/iconsStrings'

interface CartComponentProps {
    onPress(): void | Promise,
}


const CartComponent = (props: CartComponentProps) => {

    const {onPress} = props;

    return (
        <View>
            <TouchableOpacity style={{ marginRight: 15, }}
                onPress={onPress}
            >
                <Ionicons name="cart" size={25} color={"#000"} />
            </TouchableOpacity>
        </View>
    )

}

export default CartComponent