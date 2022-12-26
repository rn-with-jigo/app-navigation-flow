import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CustomeButtonProps{
    title: String | undefined,
    onPress: void | Promise | Function,
}

const CustomeButton = (props: CustomeButtonProps) => {

    const { title, onPress } = props;

    return (
        <TouchableOpacity style={styles.main_container}
            onPress={onPress}
        >
            <Text style={styles.btn_title_style}>{title ? title : 'CustomeButton'}</Text>
        </TouchableOpacity>
    )
}

export default CustomeButton

const styles = StyleSheet.create({
    btn_title_style: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    main_container: {
        margin: 10, height: 44, justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 5,
    }
})