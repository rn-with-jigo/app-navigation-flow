import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '../constants/iconsStrings';

interface BackArrowComponentProps {
    onPress(): void | Promise,
}

const BackArrowComponent = (props: BackArrowComponentProps) => {

    const { onPress } = props;
    return (
        <TouchableOpacity
            onPress={() => onPress()}
        >
            {
                Platform.OS === "ios" ?
                    <Ionicons name='close' size={25} color={"#000"} />
                    :
                    <Ionicons name='arrow-back' size={25} color={"#000"} />
            }
        </TouchableOpacity>
    )
}

export default BackArrowComponent

const styles = StyleSheet.create({})